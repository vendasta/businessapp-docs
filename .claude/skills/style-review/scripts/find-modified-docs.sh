#!/usr/bin/env bash
# find-modified-docs.sh — lists modified documentation files for the current branch
#
# Usage:
#   ./find-modified-docs.sh              # compares to origin/master
#   ./find-modified-docs.sh origin/main  # specify base branch

BASE="${1:-origin/master}"

git diff --name-only --diff-filter=AMR "$BASE"...HEAD 2>/dev/null \
  | grep -E '^docusaurus/docs/.*\.(md|mdx)$' \
  || true
