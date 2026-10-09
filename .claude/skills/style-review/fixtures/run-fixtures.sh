#!/usr/bin/env bash
# run-fixtures.sh — asserts scan-style.sh still catches what it is meant to.
#
#   .claude/skills/style-review/fixtures/run-fixtures.sh
#
# Each case gives an expected exit code and a line the output must contain.
# A silent PASS is the failure mode these guard: three of them cover bugs that
# shipped in this script and were caught only in review.
set -uo pipefail

HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
SCAN="$HERE/../scripts/scan-style.sh"
FAILURES=0

expect() {
  local file="$1" want_rc="$2" want_text="$3"
  local out rc
  out=$(bash "$SCAN" "$HERE/$file" 2>&1); rc=$?
  if [ "$rc" != "$want_rc" ]; then
    printf 'FAIL %s: exit %s, expected %s\n' "$file" "$rc" "$want_rc"
    FAILURES=$((FAILURES + 1))
    return
  fi
  if ! printf '%s' "$out" | grep -qF "$want_text"; then
    printf 'FAIL %s: output does not contain %s\n' "$file" "$want_text"
    FAILURES=$((FAILURES + 1))
    return
  fi
  printf 'ok   %s\n' "$file"
}

expect clean.md                   0 "PASS — Vendasta mentions"
expect unclosed-fence.md          1 "FAIL — Unclosed code fence"
expect nested-fence.md            0 "PASS — Code fences all closed"
expect brand-in-fence.md          1 "FAIL — Vendasta mentions"
expect trigger-in-fence.md        0 "PASS — Historical references"
expect trigger-in-inline-code.md  0 "PASS — Historical references"

if [ "$FAILURES" -gt 0 ]; then
  printf '\n%s fixture(s) failed\n' "$FAILURES"
  exit 1
fi
printf '\nall fixtures pass\n'
