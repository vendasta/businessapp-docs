#!/usr/bin/env bash
# scan-style.sh — scans Business App documentation for style violations
#
# Usage:
#   ./scan-style.sh                    # scans git-modified docs in current branch
#   ./scan-style.sh docusaurus/docs/   # scans a directory
#   ./scan-style.sh path/to/file.md    # scans a single file

set -euo pipefail

# ── Colours ────────────────────────────────────────────────────────────────
red()    { printf '\033[0;31m%s\033[0m\n' "$*"; }
yellow() { printf '\033[0;33m%s\033[0m\n' "$*"; }
green()  { printf '\033[0;32m%s\033[0m\n' "$*"; }
bold()   { printf '\033[1m%s\033[0m\n' "$*"; }

# ── File list ───────────────────────────────────────────────────────────────
if [ $# -eq 0 ]; then
  # Default: modified docs in current branch vs origin/master
  mapfile -t FILES < <(
    git diff --name-only --diff-filter=AM origin/master...HEAD 2>/dev/null \
      | grep -E '^docusaurus/docs/.*\.(md|mdx)$' || true
  )
  if [ ${#FILES[@]} -eq 0 ]; then
    # Fall back to working tree changes
    mapfile -t FILES < <(
      git diff --name-only --diff-filter=AM 2>/dev/null \
        | grep -E '^docusaurus/docs/.*\.(md|mdx)$' || true
    )
  fi
  if [ ${#FILES[@]} -eq 0 ]; then
    yellow "No modified documentation files found. Pass a path to scan explicitly."
    exit 0
  fi
  bold "Scanning ${#FILES[@]} modified file(s)..."
elif [ -d "$1" ]; then
  mapfile -t FILES < <(find "$1" -name "*.md" -o -name "*.mdx" | sort)
  bold "Scanning ${#FILES[@]} file(s) in $1..."
elif [ -f "$1" ]; then
  FILES=("$1")
  bold "Scanning $1..."
else
  echo "Error: '$1' is not a file or directory." >&2
  exit 2
fi

# ── Check runner ────────────────────────────────────────────────────────────
ERRORS=0
WARNINGS=0

run_check() {
  local label="$1" severity="$2" pattern="$3"
  local results
  results=$(printf '%s\n' "${FILES[@]}" \
    | xargs grep -nE "$pattern" 2>/dev/null || true)
  if [ -n "$results" ]; then
    if [ "$severity" = "error" ]; then
      red "  FAIL — $label"
      echo "$results" | sed 's/^/    /'
      ERRORS=$((ERRORS + $(echo "$results" | wc -l)))
    else
      yellow "  WARN — $label"
      echo "$results" | sed 's/^/    /'
      WARNINGS=$((WARNINGS + $(echo "$results" | wc -l)))
    fi
  else
    green "  PASS — $label"
  fi
}

run_check_icase() {
  local label="$1" severity="$2" pattern="$3"
  local results
  results=$(printf '%s\n' "${FILES[@]}" \
    | xargs grep -niE "$pattern" 2>/dev/null || true)
  if [ -n "$results" ]; then
    if [ "$severity" = "error" ]; then
      red "  FAIL — $label"
      echo "$results" | sed 's/^/    /'
      ERRORS=$((ERRORS + $(echo "$results" | wc -l)))
    else
      yellow "  WARN — $label"
      echo "$results" | sed 's/^/    /'
      WARNINGS=$((WARNINGS + $(echo "$results" | wc -l)))
    fi
  else
    green "  PASS — $label"
  fi
}

# ── Custom check: missing frontmatter title (BUILD-SAFETY) ───────────────────
check_frontmatter_title() {
  local results=""
  for f in "${FILES[@]}"; do
    local in_frontmatter=0 has_title=0
    while IFS= read -r line; do
      if [ "$line" = "---" ]; then
        if [ $in_frontmatter -eq 1 ]; then
          break
        else
          in_frontmatter=1
          continue
        fi
      fi
      if [ $in_frontmatter -eq 1 ]; then
        echo "$line" | grep -qE '^title:' && has_title=1
      fi
    done < "$f"
    if [ $in_frontmatter -eq 0 ] || [ $has_title -eq 0 ]; then
      results+="$f: missing title in frontmatter"$'\n'
    fi
  done
  results="${results%$'\n'}"
  if [ -n "$results" ]; then
    red "  FAIL — Missing frontmatter title (breaks build)"
    echo "$results" | sed 's/^/    /'
    ERRORS=$((ERRORS + $(echo "$results" | wc -l)))
  else
    green "  PASS — Missing frontmatter title (breaks build)"
  fi
}

# ── Custom check: unquoted colons in frontmatter values (BUILD-SAFETY) ───────
check_frontmatter_colons() {
  local results=""
  for f in "${FILES[@]}"; do
    local in_frontmatter=0 line_num=0
    while IFS= read -r line; do
      line_num=$((line_num + 1))
      if [ "$line" = "---" ]; then
        if [ $in_frontmatter -eq 1 ]; then
          break
        else
          in_frontmatter=1
          continue
        fi
      fi
      if [ $in_frontmatter -eq 1 ]; then
        # Only check known string fields: title, sidebar_label, description
        if echo "$line" | grep -qE '^(title|sidebar_label|description): '; then
          # Extract the value (everything after "key: ")
          local value
          value=$(echo "$line" | sed 's/^[a-z_]*: //')
          # Check if value contains a colon and is NOT quoted
          if echo "$value" | grep -qF ':'; then
            if ! echo "$value" | grep -qE '^".*"$' && ! echo "$value" | grep -qE "^'.*'$"; then
              results+="$f:$line_num:$line"$'\n'
            fi
          fi
        fi
      fi
    done < "$f"
  done
  results="${results%$'\n'}"
  if [ -n "$results" ]; then
    red "  FAIL — Unquoted colons in frontmatter values (breaks YAML parsing)"
    echo "$results" | sed 's/^/    /'
    ERRORS=$((ERRORS + $(echo "$results" | wc -l)))
  else
    green "  PASS — Unquoted colons in frontmatter values (breaks YAML parsing)"
  fi
}

# ── Custom check: unclosed code blocks and callout blocks (BUILD-SAFETY) ─────
check_unclosed_blocks() {
  local code_results="" callout_results=""
  for f in "${FILES[@]}"; do
    # Count triple-backtick lines
    local code_count
    code_count=$(grep -cE '^\x60\x60\x60' "$f" 2>/dev/null) || code_count=0
    if [ $((code_count % 2)) -ne 0 ]; then
      code_results+="$f: $code_count triple-backtick lines (odd — likely unclosed)"$'\n'
    fi
    # Count ::: lines
    local callout_count
    callout_count=$(grep -cE '^:::' "$f" 2>/dev/null) || callout_count=0
    if [ $((callout_count % 2)) -ne 0 ]; then
      callout_results+="$f: $callout_count ::: lines (odd — likely unclosed)"$'\n'
    fi
  done
  code_results="${code_results%$'\n'}"
  callout_results="${callout_results%$'\n'}"

  if [ -n "$code_results" ]; then
    yellow "  WARN — Unclosed code blocks (odd number of triple-backtick lines)"
    echo "$code_results" | sed 's/^/    /'
    WARNINGS=$((WARNINGS + $(echo "$code_results" | wc -l)))
  else
    green "  PASS — Unclosed code blocks (odd number of triple-backtick lines)"
  fi

  if [ -n "$callout_results" ]; then
    yellow "  WARN — Unclosed callout blocks (odd number of ::: lines)"
    echo "$callout_results" | sed 's/^/    /'
    WARNINGS=$((WARNINGS + $(echo "$callout_results" | wc -l)))
  else
    green "  PASS — Unclosed callout blocks (odd number of ::: lines)"
  fi
}

# ── Custom check: H1 in body (skips frontmatter) ────────────────────────────
check_h1_in_body() {
  local results=""
  for f in "${FILES[@]}"; do
    local in_frontmatter=0 past_frontmatter=0 line_num=0
    while IFS= read -r line; do
      line_num=$((line_num + 1))
      if [ "$line" = "---" ]; then
        if [ $in_frontmatter -eq 1 ]; then
          past_frontmatter=1
          in_frontmatter=0
          continue
        elif [ $past_frontmatter -eq 0 ]; then
          in_frontmatter=1
          continue
        fi
      fi
      if [ $past_frontmatter -eq 1 ] && echo "$line" | grep -qE '^# [^#]'; then
        results+="$f:$line_num:$line"$'\n'
      fi
    done < "$f"
  done
  results="${results%$'\n'}"
  if [ -n "$results" ]; then
    yellow "  WARN — H1 in body (Docusaurus uses frontmatter title as H1)"
    echo "$results" | sed 's/^/    /'
    WARNINGS=$((WARNINGS + $(echo "$results" | wc -l)))
  else
    green "  PASS — H1 in body (Docusaurus uses frontmatter title as H1)"
  fi
}

# ── Custom check: frontmatter recommended fields ────────────────────────────
check_frontmatter_fields() {
  local results=""
  for f in "${FILES[@]}"; do
    local in_frontmatter=0 has_sidebar_label=0 has_description=0
    while IFS= read -r line; do
      if [ "$line" = "---" ]; then
        if [ $in_frontmatter -eq 1 ]; then
          break
        else
          in_frontmatter=1
          continue
        fi
      fi
      if [ $in_frontmatter -eq 1 ]; then
        echo "$line" | grep -qE '^sidebar_label:' && has_sidebar_label=1
        echo "$line" | grep -qE '^description:' && has_description=1
      fi
    done < "$f"
    if [ $has_sidebar_label -eq 0 ]; then
      results+="$f: missing sidebar_label"$'\n'
    fi
    if [ $has_description -eq 0 ]; then
      results+="$f: missing description"$'\n'
    fi
  done
  results="${results%$'\n'}"
  if [ -n "$results" ]; then
    yellow "  WARN — Frontmatter recommended fields (sidebar_label, description)"
    echo "$results" | sed 's/^/    /'
    WARNINGS=$((WARNINGS + $(echo "$results" | wc -l)))
  else
    green "  PASS — Frontmatter recommended fields (sidebar_label, description)"
  fi
}

# ── CRITICAL: Gray-label ─────────────────────────────────────────────────────
echo ""
bold "[ CRITICAL ] Gray-label / branding"
run_check_icase \
  "Vendasta mentions" \
  "error" \
  "Vendasta"

run_check_icase \
  "Partner Center references" \
  "error" \
  "Partner Center"

run_check_icase \
  "Partner / reseller / agency terminology" \
  "error" \
  "\b(partner|reseller|agency|agencies|white.?label)\b"

# ── CRITICAL: Evergreen ───────────────────────────────────────────────────────
echo ""
bold "[ CRITICAL ] Evergreen content"
run_check_icase \
  "Historical references" \
  "error" \
  "\b(previously|formerly|used to|before this update|earlier version|legacy|deprecated|renamed|has since|in the past|at one point|prior to this|old version)\b"

run_check_icase \
  "Future-state / roadmap language" \
  "error" \
  "\b(coming soon|on the roadmap|will be available|planned feature|in a future)\b"

# ── Voice and tone ────────────────────────────────────────────────────────────
echo ""
bold "[ VOICE ] Voice and tone"
run_check \
  "Third-person 'user' references (use 'you' instead)" \
  "warning" \
  "\b(the user|a user|users can|users are|users must|users should|users need)\b"

run_check_icase \
  "Passive voice indicators" \
  "warning" \
  "\b(can be done|is done|was done|are done|will be done|should be done|must be done)\b"

run_check_icase \
  "Marketing / promotional language" \
  "warning" \
  "\b(powerful|robust|seamless|cutting.?edge|best.?in.?class|world.?class|revolutionary|game.?changing|innovative|state.?of.?the.?art|amazing|incredible|awesome|unlock potential)\b"

run_check_icase \
  "Speculation / hedging language" \
  "warning" \
  "\b(might|may be able|could potentially|it is possible that|depending on your|in some cases)\b"

# ── Formatting ─────────────────────────────────────────────────────────────────
echo ""
bold "[ FORMATTING ] Formatting conventions"
run_check \
  "Em dashes (replace with colon, comma, or period)" \
  "warning" \
  "—"

run_check \
  "Arrow character (use a word like 'to', or a colon)" \
  "suggestion" \
  "→\|←\|↔\|⇒\|⟶"

run_check \
  "UI elements not in inline code (button/tab/field names)" \
  "warning" \
  "Click (Save|Cancel|Submit|Connect|Continue|Next|Back|Done|OK|Yes|No|Delete|Edit|Add|Remove|Create|Update|Send|Apply)([^'\`]|$)"

run_check \
  "UI elements not in backticks (expanded verbs)" \
  "warning" \
  "(Go to|Select|Open|Navigate to|Choose|Tap) (Settings|Dashboard|Reports|Tools|Integrations|Notifications|Profile|Accounts|Analytics|Overview|Home|Inbox|Calendar|Contacts|Billing|Help)([^'\`]|$)"

check_h1_in_body

# Heading sentence case — custom check with exclusion list to reduce false positives
check_heading_sentence_case() {
  local results
  results=$(printf '%s\n' "${FILES[@]}" \
    | xargs grep -nE "^#{2,3} [A-Za-z]+ (A[^n ]|B[^u]|[CDEFHIJKLMNOPQRSTUVWXYZ])[a-z]" 2>/dev/null || true)
  if [ -n "$results" ]; then
    # Filter out known acceptable patterns:
    #   Standard section names, product/brand proper nouns, common doc headings
    results=$(echo "$results" | grep -ivE \
      "Frequently Asked|Best Practices|How It Works|Getting Started|Related Articles|Next Steps|Need Help|Key (Concepts|Capabilities|Features|Benefits)|What You|For (Outlook|Chrome|Gmail|Safari|Firefox|Mac|Windows|Android|iOS)" \
      | grep -ivE \
      "Google|Facebook|Instagram|LinkedIn|WordPress|Salesforce|Outlook|Microsoft|YouTube|Twitter|Yelp|TripAdvisor|Apple|Amazon|Bing|Yahoo|Pinterest|Snapchat|TikTok|QuickBooks|Shopify|HubSpot|Mailchimp|Zapier|Stripe|PayPal|ActiveCampaign|Custom CSS" \
      || true)
  fi
  if [ -n "$results" ]; then
    yellow "  WARN — Heading sentence case (words after first should be lowercase)"
    echo "$results" | sed 's/^/    /'
    WARNINGS=$((WARNINGS + $(echo "$results" | wc -l)))
  else
    green "  PASS — Heading sentence case (words after first should be lowercase)"
  fi
}
check_heading_sentence_case

run_check \
  "Menu path without backticks or wrong separator" \
  "warning" \
  "(->|>>| — )[A-Z][a-z]"

# ── Images ─────────────────────────────────────────────────────────────────────
echo ""
bold "[ IMAGES ] Image conventions"
run_check \
  "Images missing alt text" \
  "error" \
  "!\[\]\("

run_check \
  "Non-kebab-case image filenames" \
  "warning" \
  "!\[.*\]\(.*[A-Z_].*\.(png|jpg|gif)\)"

run_check \
  "Images outside ./img/ directory" \
  "warning" \
  "!\[.*\]\(\.\./|!\[.*\]\(\./images/|!\[.*\]\(\./img/.*/|!\[.*\]\(/img/"

# ── Frontmatter ──────────────────────────────────────────────────────────────
echo ""
bold "[ FRONTMATTER ] Recommended frontmatter fields"
check_frontmatter_fields

# ── Links ─────────────────────────────────────────────────────────────────────
echo ""
bold "[ LINKS ] Link conventions"
run_check \
  "HTTP links (use HTTPS)" \
  "warning" \
  "\]\(http://"

run_check \
  "Absolute internal links (use relative paths)" \
  "warning" \
  "\]\(/docs/"

# ── BUILD-SAFETY ──────────────────────────────────────────────────────────────
echo ""
bold "[ BUILD-SAFETY ] Checks that prevent Cloud Build failures"
check_frontmatter_title

check_frontmatter_colons

# JSX / Wistia in .md files (not .mdx)
MD_ONLY=()
for f in "${FILES[@]}"; do
  [[ "$f" == *.md ]] && [[ "$f" != *.mdx ]] && MD_ONLY+=("$f")
done
if [ ${#MD_ONLY[@]} -gt 0 ]; then
  local_results=$(printf '%s\n' "${MD_ONLY[@]}" \
    | xargs grep -nE '<iframe|<WistiaVideo|^import |className=' 2>/dev/null || true)
  if [ -n "$local_results" ]; then
    red "  FAIL — JSX/Wistia in .md files (must use .mdx for JSX content)"
    echo "$local_results" | sed 's/^/    /'
    ERRORS=$((ERRORS + $(echo "$local_results" | wc -l)))
  else
    green "  PASS — JSX/Wistia in .md files (must use .mdx for JSX content)"
  fi
else
  green "  PASS — JSX/Wistia in .md files (no .md files to check)"
fi

check_unclosed_blocks

# ── Summary ────────────────────────────────────────────────────────────────────
echo ""
bold "════════════════════════════════"
bold "Summary"
bold "════════════════════════════════"
if [ $ERRORS -gt 0 ]; then
  red "Errors:   $ERRORS (must fix before publishing)"
fi
if [ $WARNINGS -gt 0 ]; then
  yellow "Warnings: $WARNINGS (review and address where possible)"
fi
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
  green "All checks passed — no style violations found."
fi
echo ""

exit $([ $ERRORS -gt 0 ] && echo 1 || echo 0)
