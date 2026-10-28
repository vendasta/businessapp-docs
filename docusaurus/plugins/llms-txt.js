// Writes build/llms.txt from the docs that were just built, so the index AI
// assistants read is never older than the site. One section per product, in
// product switcher order; articles in that product's sidebar order, one line
// each with its frontmatter description.
//
// Format: https://llmstxt.org
const fs = require('fs');
const path = require('path');
const {applyTrailingSlash} = require('@docusaurus/utils-common');

const DOCS_PLUGIN = 'docusaurus-plugin-content-docs';

// Doc ids in the order the sidebar shows them: a category's own page first,
// then its items.
function sidebarDocIds(items, ids = []) {
  for (const item of items) {
    if (item.type === 'doc' || item.type === 'ref') ids.push(item.id);
    if (item.type === 'category') {
      if (item.link?.type === 'doc') ids.push(item.link.id);
      sidebarDocIds(item.items, ids);
    }
  }
  return ids;
}

module.exports = function llmsTxtPlugin(context, options) {
  // products: [{name, sidebarId}] from src/config/products.ts
  const {title, summary, products} = options;
  return {
    name: 'llms-txt',
    async postBuild({siteConfig, outDir, plugins}) {
      const siteUrl = siteConfig.url.replace(/\/$/, '');
      // Doc permalinks carry no trailing slash; routes get it from siteConfig.
      const toUrl = (permalink) =>
        siteUrl + applyTrailingSlash(permalink, {trailingSlash: siteConfig.trailingSlash, baseUrl: siteConfig.baseUrl});
      const version = plugins.find((p) => p.name === DOCS_PLUGIN).content.loadedVersions[0];
      const docsById = new Map(version.docs.map((d) => [d.id, d]));
      const parts = [`# ${title}`, '', `> ${summary}`, ''];
      for (const product of products) {
        const sidebar = version.sidebars[product.sidebarId];
        if (!sidebar) throw new Error(`llms-txt: no sidebar "${product.sidebarId}" for ${product.name}`);
        const lines = [...new Set(sidebarDocIds(sidebar))]
          .map((id) => docsById.get(id))
          .filter((d) => d && !d.unlisted && !d.frontMatter?.draft)
          .map((d) => {
            const desc = (d.description || '').replace(/\s+/g, ' ').trim();
            return `- [${d.title}](${toUrl(d.permalink)})${desc ? `: ${desc}` : ''}`;
          });
        parts.push(`## ${product.name}`, '', ...lines, '');
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), parts.join('\n'));
    },
  };
};
