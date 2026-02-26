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
