# raw-markdown plugin

A local Docusaurus plugin that emits a complete raw-Markdown copy of every doc
page into the build output at `<permalink>.md`.

## Why this exists

The AI page actions in `src/components/PageActions.tsx` ("Open in Claude", "Open
in ChatGPT", etc.) prefill an assistant with the current page's content. Short
pages are embedded inline in the tool URL. Long pages exceed the URL length
limit (`MAX_AI_URL_LENGTH`), so the button instead links the assistant to the
page's `.md` file — the full content, with no truncation.

These `.md` files are served from **the same origin the reader is on**. That is
deliberate and load-bearing for gray-label:

> **Do not** replace this with a link to the GitHub source repo. That URL would
> expose the internal org and repo name to end users, violating the gray-label
> rule in `.cursor/rules/gray-label-business-owner-docs.mdc`. The same-origin
> `.md` file avoids that entirely.

## What it emits

- One file per doc at `build/<permalink>.md` (trailing slash stripped;
  `/` → `/index.md`).
- YAML frontmatter is stripped; the frontmatter `title` is reinstated as a
  leading `# ` heading (unless the body already starts with one).
- `.mdx` sources are written as-is (JSX/import lines are harmless for an LLM).

The permalink→file mapping (`permalinkToMdPath` in `index.js`) is mirrored by
`toMdUrl` in `PageActions.tsx`. **If you change one, change the other**, or the
fallback URL will 404.

## Coupling to nginx

`nginx.conf` has a `location ~ \.md$` block that serves these files as
`text/plain` (so browsers/assistants render them inline instead of downloading)
and adds `X-Robots-Tag: noindex` (so the raw files are never search-indexed and
can't dilute the canonical HTML pages). If you remove that block, `.md` requests
fall through to the SPA `index.html` handler and return the HTML shell instead
of Markdown.

## Cost

Runs once in the `postBuild` lifecycle hook, after HTML generation: N file reads
+ N file writes for N docs. Negligible next to the Rspack compile, and outside
the bundler graph (no effect on `experimental_faster` caching).
