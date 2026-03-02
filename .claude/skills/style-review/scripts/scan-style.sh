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
  "UI elements not in inline code (button/tab/field names)" \
  "warning" \
  "Click (Save|Cancel|Submit|Connect|Continue|Next|Back|Done|OK|Yes|No|Delete|Edit|Add|Remove|Create|Update|Send|Apply)[^'\`]"

run_check \
  "UI elements not in backticks (expanded verbs)" \
  "warning" \
  "(Go to|Select|Open|Navigate to|Choose|Tap) (Settings|Dashboard|Reports|Tools|Integrations|Notifications|Profile|Accounts|Analytics|Overview|Home|Inbox|Calendar|Contacts|Billing|Help)[^'\`]"

check_h1_in_body

run_check \
  "Heading sentence case (words after first should be lowercase)" \
  "warning" \
  "^#{2,3} [A-Za-z]+ (A[^n ]|B[^u]|[CDEFHIJKLMNOPQRSTUVWXYZ])[a-z]"

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
  "!\[.*\]\(\.\./|\!\[.*\]\(\./images/|!\[.*\]\(\./img/.*/|!\[.*\]\(/img/"

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
