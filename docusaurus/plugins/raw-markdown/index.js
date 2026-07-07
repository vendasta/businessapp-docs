const fs = require('fs/promises');
const path = require('path');

// Matches a leading YAML frontmatter block (the `--- ... ---` at the very top of
// a source file). Stripped from the emitted .md so the file is clean prose.
const FRONTMATTER_RE = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/;

// Map a Docusaurus permalink to the path of its emitted .md file, mirroring the
// logic in src/components/PageActions.tsx (toMdUrl). Both must agree so the
// "Open in Claude" fallback URL resolves to a real file.
//   '/business-app/reviews/' -> '/business-app/reviews.md'
//   '/'                      -> '/index.md'
function permalinkToMdPath(permalink) {
  const trimmed = permalink.replace(/\/+$/, '');
  return `${trimmed === '' ? '/index' : trimmed}.md`;
}

/**
 * Emits a complete raw-Markdown copy of every doc page into the build output at
 * `<permalink>.md`. The "Open in Claude" (and other AI) buttons link to this
 * same-origin file when a page is too long to embed inline in the tool URL, so
 * the assistant gets the full page without truncation — and without ever
 * referencing an internal GitHub repo/brand (gray-label). See README.md.
 */
module.exports = function rawMarkdownPlugin(context) {
  const {siteDir} = context;
  // Captured during content loading, consumed after the build writes HTML.
  let docEntries = [];

  return {
    name: 'raw-markdown',

    async allContentLoaded({allContent}) {
      const docsContent = allContent['docusaurus-plugin-content-docs'] || {};
      const entries = [];
      // allContent is keyed by plugin name then plugin instance id ('default').
      for (const instance of Object.values(docsContent)) {
        for (const version of instance?.loadedVersions || []) {
          for (const doc of version.docs || []) {
            if (!doc.permalink || !doc.source) continue;
            entries.push({
              permalink: doc.permalink,
              title: doc.title,
              // doc.source is aliased, e.g. '@site/docs/foo/bar.md'.
              absSource: path.join(siteDir, doc.source.replace(/^@site\//, '')),
            });
          }
        }
      }
      docEntries = entries;
    },

    async postBuild({outDir}) {
      await Promise.all(
        docEntries.map(async ({permalink, title, absSource}) => {
          let raw;
          try {
            raw = await fs.readFile(absSource, 'utf8');
          } catch {
            // Source unreadable (shouldn't happen) — skip rather than fail the
            // whole Cloud Build over one page.
            return;
          }
          const body = raw.replace(FRONTMATTER_RE, '').trimStart();
          // Reinstate the title as an H1 (it lives in frontmatter, which we
          // stripped) unless the body already opens with one.
          const heading = title && !/^#\s/.test(body) ? `# ${title}\n\n` : '';
          const outPath = path.join(outDir, permalinkToMdPath(permalink));
          await fs.mkdir(path.dirname(outPath), {recursive: true});
          await fs.writeFile(outPath, `${heading}${body}\n`, 'utf8');
        }),
      );
    },
  };
};
