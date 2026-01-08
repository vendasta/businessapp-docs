# Documentation Sync Process

## Overview

This document describes the process for syncing Business App documentation with the actual platform implementation to ensure docs accurately reflect the user experience.

## Repositories Involved

1. **businessapp-docs** - User-facing documentation
   - Location: `docusaurus/docs/business-app/getting-started-with-business-app.md`
   - Purpose: External documentation for Business App users

2. **galaxy** - Platform implementation (source of truth)
   - Location: `apps/business-center-client/src/app/get-started/`
   - Key files:
     - `get-started.service.ts` - Business logic for onboarding steps
     - `get-started.component.html` - UI template
     - `get-started-constants-helper.ts` - Step IDs and constants
     - `src/assets/i18n/en_devel.json` - Translation strings (search for `GET_STARTED.SETUP_CARDS`)

## Process for Syncing Documentation

### 1. Clone Both Repositories

```bash
# Clone documentation repository
git clone https://github.com/vendasta/businessapp-docs.git

# Clone platform repository (source of truth)
git clone https://github.com/vendasta/galaxy.git
```

### 2. Identify What Changed in Platform

Review the Get Started implementation in Galaxy:

**Key Areas to Check:**
- **Step definitions**: `galaxy/apps/business-center-client/src/app/get-started/get-started.service.ts`
  - Look for methods like `signUpWidget()`, `aiWorkforceWidget()`, `connectGBPWidget()`, etc.
  - Each method returns a `GettingStartedElement` with setup card configuration

- **Translation keys**: `galaxy/apps/business-center-client/src/assets/i18n/en_devel.json`
  - Search for `GET_STARTED.SETUP_CARDS` section
  - Contains titles, descriptions, and action text for each setup card

- **Step IDs**: `galaxy/apps/business-center-client/src/app/get-started/get-started-constants-helper.ts`
  - Defines `getStartedStepIds` object with all step identifiers

**Current Setup Steps (as of 2026-01-08):**
1. Sign Up (always complete)
2. AI Workforce (`aiWorkforceWidget`)
3. Connect Google Business Profile (`connectGBPWidget`)
4. Install Web Chat (`installWebChatWidget`)
5. Manage Integrations (`manageIntegrationsWidget`)
6. SMS Registration (`setUpSMSWidget`)
7. Mobile Notifications (`notificationsEnabledWidget` - mobile only)

### 3. Compare with Documentation

Compare the platform implementation with documentation:

```bash
# Read current documentation
cat businessapp-docs/docusaurus/docs/business-app/getting-started-with-business-app.md

# Search for setup steps section (around line 69)
# Compare with Galaxy implementation
```

**What to Look For:**
- Missing steps (new features added to platform)
- Outdated descriptions (wording changes)
- Removed steps (features deprecated)
- Order of steps (changed priorities)

### 4. Update Documentation

Create a branch and update the docs:

```bash
cd businessapp-docs
git checkout -b update-getting-started-docs

# Edit the file
# Update the "Setup steps may include:" section to match platform implementation
```

**Documentation Format:**
```markdown
### Setup steps may include:
- **[Step Name]**: [Description from GET_STARTED.SETUP_CARDS.[STEP].DESCRIPTION]
```

### 5. Commit and Create PR

```bash
# Stage changes
git add docusaurus/docs/business-app/getting-started-with-business-app.md

# Commit with descriptive message
git commit -m "Update Getting Started docs to match platform implementation

Synced the documentation with the actual Get Started experience in Business App by referencing the Galaxy repository implementation.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push branch
git push -u origin update-getting-started-docs

# Create PR
gh pr create --title "Update Getting Started documentation to match platform implementation" \
  --body "## Why

The Getting Started documentation was outdated and didn't reflect the actual onboarding experience users see in Business App.

## What Changed

[List specific changes: Added, Updated, Removed]

## Review Notes

- Changes verified against Galaxy repository implementation
- All setup card content matches translation keys in en_devel.json
- Order of steps preserved as shown in platform"
```

## Automation Opportunities

### Using Claude Code

This process can be automated with Claude Code:

```bash
# Example prompt for Claude:
"Update the Getting Started documentation at
docs.businessapp.io/business-app/getting-started-with-business-app
using the current Get-Started page content in the Galaxy repository.
Download both repos, compare them, and submit a PR with the updates."
```

### Periodic Sync Schedule

Recommended sync frequency:
- **After major releases**: Check for new onboarding steps
- **Monthly review**: Ensure descriptions match current UI text
- **When user reports confusion**: Investigate specific discrepancies

## Troubleshooting

### Git Configuration Issues

If git doesn't know who you are:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@vendasta.com"
```

### GitHub CLI Not Authenticated

If `gh` CLI needs authentication:
```bash
gh auth login
# Follow the prompts to authenticate
```

### Finding Translation Keys

To search for specific translation keys:
```bash
cd galaxy/apps/business-center-client
cat src/assets/i18n/en_devel.json | grep -A 10 "SETUP_CARDS"
```

## Related Files

### In businessapp-docs:
- `/docusaurus/docs/business-app/getting-started-with-business-app.md` - Main Getting Started page
- `/docusaurus/docs/business-app/img/` - Screenshots and images

### In galaxy:
- `/apps/business-center-client/src/app/get-started/get-started.service.ts` - Onboarding logic
- `/apps/business-center-client/src/app/get-started/get-started.component.html` - UI template
- `/apps/business-center-client/src/app/get-started/get-started-constants-helper.ts` - Constants
- `/apps/business-center-client/src/assets/i18n/en_devel.json` - English translations

## Notes

- The Galaxy repository is the **source of truth** for what users actually see
- Documentation should match translation keys exactly when possible
- Some steps are conditional (e.g., SMS registration varies by country, mobile notifications only on native app)
- The setup card can be skipped by users, so docs should reflect optional nature

## Last Updated

- **Date**: 2026-01-08
- **Synced Commit**: 16af5c5
- **PR**: #173
