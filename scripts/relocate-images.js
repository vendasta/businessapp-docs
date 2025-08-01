#!/usr/bin/env node
/**
 * Relocate images from docusaurus/static/img/<section>/ to docusaurus/docs/<section>/img/
 * and update markdown links in docs to use relative paths.
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const DOCS_ROOT = path.join(repoRoot, 'docusaurus', 'docs');
const STATIC_IMG_ROOT = path.join(repoRoot, 'docusaurus', 'static', 'img');

// SECTION DIRECTORIES THAT SHOULD BE MOVED
function getSectionDirs() {
  return fs
    .readdirSync(STATIC_IMG_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function moveImages() {
  const sections = getSectionDirs();
  for (const section of sections) {
    const sourceDir = path.join(STATIC_IMG_ROOT, section);

    // keep top-level assets (like logos) in static/img, skip if there is no matching docs section
    const targetSectionDir = path.join(DOCS_ROOT, section);
    if (!fs.existsSync(targetSectionDir)) {
      console.log(`Skipping section '${section}' (no docs/<section> dir)`);
      continue;
    }

    const targetImgDir = path.join(targetSectionDir, 'img');
    ensureDir(targetImgDir);

    fs.readdirSync(sourceDir).forEach((file) => {
      const src = path.join(sourceDir, file);
      const dest = path.join(targetImgDir, file);
      fs.renameSync(src, dest);
      console.log(`Moved ${path.relative(repoRoot, src)} -> ${path.relative(repoRoot, dest)}`);
    });

    // Attempt to remove empty dir
    try {
      fs.rmdirSync(sourceDir);
    } catch (e) {
      // ignore not empty
    }
  }
}

function walk(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((dent) => {
    const p = path.join(dir, dent.name);
    if (dent.isDirectory()) walk(p, cb);
    else cb(p);
  });
}

function relPath(from, to) {
  let rel = path.relative(from, to).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel;
}

function updateMarkdownLinks() {
  walk(DOCS_ROOT, (file) => {
    if (!file.endsWith('.md')) return;
    let txt = fs.readFileSync(file, 'utf8');
    const dirOfDoc = path.dirname(file);

    // Pattern 1: absolute /img/<section>/<file>
    txt = txt.replace(/!\[([^\]]*)]\((\/img\/([^/]+)\/([^\)]+))\)/g, (m, alt, _full, section, imgFile) => {
      const imgAbs = path.join(DOCS_ROOT, section, 'img', imgFile);
      const newRel = relPath(dirOfDoc, imgAbs);
      return `![${alt}](${newRel})`;
    });

    // Pattern 2: relative ../../static/img/<section>/<file> OR similar including ./ static
    txt = txt.replace(/!\[([^\]]*)]\((?:\.\.\/)+(?:static\/)?img\/([^/]+)\/([^\)]+)\)/g, (m, alt, section, imgFile) => {
      const imgAbs = path.join(DOCS_ROOT, section, 'img', imgFile);
      const newRel = relPath(dirOfDoc, imgAbs);
      return `![${alt}](${newRel})`;
    });

    // Pattern 3: /static/img/<section>/<file> absolute
    txt = txt.replace(/!\[([^\]]*)]\((\/static\/img\/([^/]+)\/([^\)]+))\)/g, (m, alt, _full, section, imgFile) => {
      const imgAbs = path.join(DOCS_ROOT, section, 'img', imgFile);
      const newRel = relPath(dirOfDoc, imgAbs);
      return `![${alt}](${newRel})`;
    });

    fs.writeFileSync(file, txt);
    console.log('Updated links in', path.relative(DOCS_ROOT, file));
  });
}

if (require.main === module) {
  console.log('Relocating images...');
  moveImages();
  console.log('Updating markdown links...');
  updateMarkdownLinks();
  console.log('Done.');
}
