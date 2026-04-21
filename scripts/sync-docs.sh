#!/usr/bin/env bash
set -euo pipefail

# sync-docs.sh — Syncs documentation folders to target repositories.
# Reads mappings from docs-sync.yml and creates PRs in target repos.
#
# Usage:
#   ./scripts/sync-docs.sh                  # Run all syncs
#   ./scripts/sync-docs.sh --dry-run        # Preview changes without pushing
#   ./scripts/sync-docs.sh --name "Yesware Docs"  # Run a specific sync only

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG_FILE="$REPO_ROOT/docs-sync.yml"
WORK_DIR=$(mktemp -d)
DRY_RUN=false
FILTER_NAME=""

cleanup() {
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --name)
      FILTER_NAME="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Check dependencies
for cmd in git gh yq; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Error: '$cmd' is required but not installed."
    if [[ "$cmd" == "yq" ]]; then
      echo "  Install with: brew install yq  (or see https://github.com/mikefarah/yq)"
    fi
    exit 1
  fi
done

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Error: Config file not found at $CONFIG_FILE"
  exit 1
fi

# Read the number of sync entries
SYNC_COUNT=$(yq '.syncs | length' "$CONFIG_FILE")

if [[ "$SYNC_COUNT" -eq 0 ]]; then
  echo "No sync mappings found in $CONFIG_FILE"
  exit 0
fi

echo "Found $SYNC_COUNT sync mapping(s)"
echo "================================="

for ((i = 0; i < SYNC_COUNT; i++)); do
  NAME=$(yq ".syncs[$i].name" "$CONFIG_FILE")
  SOURCE_PATH=$(yq ".syncs[$i].source_path" "$CONFIG_FILE")
  TARGET_REPO=$(yq ".syncs[$i].target_repo" "$CONFIG_FILE")
  TARGET_PATH=$(yq ".syncs[$i].target_path" "$CONFIG_FILE")
  TARGET_BRANCH=$(yq ".syncs[$i].target_branch // \"main\"" "$CONFIG_FILE")

  # Apply name filter if specified
  if [[ -n "$FILTER_NAME" && "$NAME" != "$FILTER_NAME" ]]; then
    continue
  fi

  echo ""
  echo "Sync: $NAME"
  echo "  Source: $SOURCE_PATH"
  echo "  Target: $TARGET_REPO → $TARGET_PATH"
  echo "  Branch: $TARGET_BRANCH"

  SOURCE_FULL="$REPO_ROOT/$SOURCE_PATH"
  if [[ ! -d "$SOURCE_FULL" ]]; then
    echo "  WARNING: Source path does not exist, skipping."
    continue
  fi

  if $DRY_RUN; then
    FILE_COUNT=$(find "$SOURCE_FULL" -type f | wc -l | tr -d ' ')
    echo "  [DRY RUN] Would sync $FILE_COUNT files to $TARGET_REPO:$TARGET_PATH"
    continue
  fi

  # Clone target repo (shallow)
  TARGET_DIR="$WORK_DIR/target-$i"
  echo "  Cloning $TARGET_REPO..."
  git clone --depth 1 --branch "$TARGET_BRANCH" \
    "https://x-access-token:${GITHUB_TOKEN:-$GH_TOKEN}@github.com/$TARGET_REPO.git" \
    "$TARGET_DIR"

  # Ensure target directory exists
  mkdir -p "$TARGET_DIR/$TARGET_PATH"

  # Remove existing content at target path, then copy source
  rm -rf "$TARGET_DIR/${TARGET_PATH:?}/"*
  cp -r "$SOURCE_FULL/"* "$TARGET_DIR/$TARGET_PATH/"

  # Configure git identity for the commit
  cd "$TARGET_DIR"
  git config user.name "docs-sync[bot]"
  git config user.email "docs-sync[bot]@users.noreply.github.com"

  # Check for changes
  git add -A
  if git diff --cached --quiet; then
    echo "  No changes detected, skipping."
    cd "$REPO_ROOT"
    continue
  fi

  # Show what changed
  echo "  Changes detected:"
  git diff --cached --stat | sed 's/^/    /'

  # Create branch and commit
  BRANCH_NAME="docs-sync/$(echo "$SOURCE_PATH" | tr '/' '-')-$(date +%Y%m%d-%H%M%S)"
  git checkout -b "$BRANCH_NAME"
  git commit -m "docs: sync $NAME from businessapp-docs

Automated sync of $SOURCE_PATH to $TARGET_PATH.
Source: businessapp-docs"

  # Push and create PR
  git push origin "$BRANCH_NAME"

  PR_URL=$(gh pr create \
    --repo "$TARGET_REPO" \
    --base "$TARGET_BRANCH" \
    --head "$BRANCH_NAME" \
    --title "docs: sync $NAME from businessapp-docs" \
    --body "Automated documentation sync.

**Source:** \`$SOURCE_PATH\` in businessapp-docs
**Target:** \`$TARGET_PATH\` in this repo

This PR was created automatically by the docs-sync workflow." 2>&1)

  echo "  PR created: $PR_URL"
  cd "$REPO_ROOT"
done

echo ""
echo "Done!"
