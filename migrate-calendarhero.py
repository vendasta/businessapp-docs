#!/usr/bin/env python3
"""
CalendarHero Zendesk → Docusaurus migration script (v2).
- Fetches all articles via the public Zendesk API
- Downloads all inline images into ./img/ folders
- Converts HTML to clean Markdown, removing empty artefacts
"""

import json
import os
import re
import urllib.request
import urllib.parse
from html.parser import HTMLParser

# ---------------------------------------------------------------------------
# Section metadata
# ---------------------------------------------------------------------------
SECTIONS = {
    14071657142039: {"slug": "getting-started",            "label": "Getting Started",              "position": 0},
    14071664141591: {"slug": "setting-up-calendarhero",    "label": "Setting Up CalendarHero",      "position": 1},
    14071666823703: {"slug": "how-to",                     "label": "How To",                       "position": 2},
    14071667924631: {"slug": "how-does-calendarhero-work", "label": "How Does CalendarHero Work?",  "position": 3},
    14071698058391: {"slug": "what-can-calendarhero-do",   "label": "What Can CalendarHero Do?",    "position": 4},
    14071699526679: {"slug": "scheduling-meetings",        "label": "Scheduling Meetings",          "position": 5},
    14071705138455: {"slug": "privacy-and-security",       "label": "Privacy and Security",         "position": 6},
    14071756404759: {"slug": "technical-troubleshooting",  "label": "Technical Troubleshooting",    "position": 7},
    14071728421527: {"slug": "additional-resources",       "label": "Additional Resources",         "position": 8},
}

BASE_URL  = "https://support.calendarhero.com/api/v2/help_center/en-us"
DOCS_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                         "docusaurus", "docs", "calendarhero")

# ---------------------------------------------------------------------------
# Image downloader
# ---------------------------------------------------------------------------
def download_image(url, dest_dir):
    """Download an image to dest_dir. Returns the local filename or None."""
    try:
        parsed   = urllib.parse.urlparse(url)
        basename = os.path.basename(parsed.path)
        # Strip query strings from filename
        basename = basename.split("?")[0]
        if not basename or "." not in basename:
            basename = "image.png"
        # Sanitize
        basename = re.sub(r"[^\w.\-]", "_", basename)
        dest     = os.path.join(dest_dir, basename)
        if not os.path.exists(dest):
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
            with open(dest, "wb") as f:
                f.write(data)
        return basename
    except Exception as e:
        print(f"    [WARN] Could not download {url}: {e}")
        return None

# ---------------------------------------------------------------------------
# HTML → Markdown converter
# ---------------------------------------------------------------------------
class HtmlToMarkdown(HTMLParser):
    VALID_INLINE = {"strong", "b", "em", "i", "code", "a", "span"}

    def __init__(self, img_dir=None, base_url=""):
        super().__init__()
        self._buf        = []      # output tokens
        self._stack      = []      # (tag, attrs)
        self._skip       = 0       # depth of tags being skipped
        self._list       = []      # stack of 'ul'/'ol'
        self._counters   = []
        self._in_pre     = False
        self._in_code    = False
        self._link_href  = None
        self._link_buf   = []
        self._in_link    = False
        self._in_td      = False
        self._td_buf     = []
        self._tr_cells   = []
        self._header_row_done = False
        self._img_dir    = img_dir   # directory to save downloaded images
        self._base_url   = base_url  # for resolving relative image URLs

    # ---- helpers -----------------------------------------------------------
    def _emit(self, text):
        self._buf.append(text)

    def _current_tags(self):
        return [t for t, _ in self._stack]

    # ---- parser hooks ------------------------------------------------------
    def handle_starttag(self, tag, attrs):
        tag   = tag.lower()
        attrs = dict(attrs)
        self._stack.append((tag, attrs))

        if self._skip > 0:
            if tag not in ("br",):
                self._skip += 1
            return

        if tag in ("script", "style"):
            self._skip += 1
            return

        if tag in ("h1","h2","h3","h4","h5","h6"):
            self._emit("\n\n" + "#" * int(tag[1]) + " ")
        elif tag == "p":
            self._emit("\n\n")
        elif tag == "br":
            self._emit("  \n")
        elif tag in ("strong","b"):
            self._emit("**")
        elif tag in ("em","i"):
            self._emit("*")
        elif tag == "ul":
            self._list.append("ul"); self._counters.append(0)
            self._emit("\n")
        elif tag == "ol":
            self._list.append("ol"); self._counters.append(0)
            self._emit("\n")
        elif tag == "li":
            if self._list:
                indent = "  " * (len(self._list) - 1)
                if self._list[-1] == "ul":
                    self._emit(f"\n{indent}- ")
                else:
                    self._counters[-1] += 1
                    self._emit(f"\n{indent}{self._counters[-1]}. ")
        elif tag == "pre":
            self._in_pre = True
            self._emit("\n\n```\n")
        elif tag == "code" and not self._in_pre:
            self._in_code = True
            self._emit("`")
        elif tag == "blockquote":
            self._emit("\n\n> ")
        elif tag == "a":
            self._link_href = attrs.get("href", "")
            self._in_link   = True
            self._link_buf  = []
        elif tag == "img":
            src   = attrs.get("src", "")
            alt   = attrs.get("alt", "image")
            if src:
                # Make absolute
                if src.startswith("//"):
                    src = "https:" + src
                elif src.startswith("/"):
                    parsed = urllib.parse.urlparse(self._base_url)
                    src = f"{parsed.scheme}://{parsed.netloc}{src}"
                # Download if img_dir provided
                local_name = None
                if self._img_dir:
                    local_name = download_image(src, self._img_dir)
                if local_name:
                    ref = f"./img/{local_name}"
                else:
                    ref = src
                img_md = f"![{alt}]({ref})"
                if self._in_link:
                    self._link_buf.append(img_md)
                else:
                    self._emit(f"\n\n{img_md}\n\n")
        elif tag == "hr":
            self._emit("\n\n---\n\n")
        elif tag == "table":
            self._tr_cells = []
            self._header_row_done = False
            self._emit("\n\n")
        elif tag in ("th","td"):
            self._in_td   = True
            self._td_buf  = []
        elif tag == "tr":
            self._tr_cells = []
        elif tag == "div":
            self._emit("\n\n")

    def handle_endtag(self, tag):
        tag = tag.lower()
        # Pop matching tag from stack
        for i in range(len(self._stack)-1, -1, -1):
            if self._stack[i][0] == tag:
                self._stack.pop(i)
                break

        if self._skip > 0:
            self._skip -= 1
            return

        if tag in ("script","style"):
            return

        if tag in ("h1","h2","h3","h4","h5","h6"):
            self._emit("\n")
        elif tag in ("strong","b"):
            self._emit("**")
        elif tag in ("em","i"):
            self._emit("*")
        elif tag in ("ul","ol"):
            if self._list:
                self._list.pop(); self._counters.pop()
            self._emit("\n")
        elif tag == "pre":
            self._in_pre = False
            self._emit("\n```\n\n")
        elif tag == "code" and not self._in_pre:
            self._in_code = False
            self._emit("`")
        elif tag == "blockquote":
            self._emit("\n\n")
        elif tag == "a":
            text = "".join(self._link_buf).strip()
            href = self._link_href or ""
            if text:
                self._emit(f"[{text}]({href})")
            self._in_link  = False
            self._link_buf = []
            self._link_href = None
        elif tag in ("th","td"):
            self._in_td = False
            self._tr_cells.append("".join(self._td_buf).strip())
            self._td_buf = []
        elif tag == "tr":
            if self._tr_cells:
                row = "| " + " | ".join(self._tr_cells) + " |"
                self._emit(row + "\n")
                if not self._header_row_done:
                    sep = "| " + " | ".join(["---"] * len(self._tr_cells)) + " |"
                    self._emit(sep + "\n")
                    self._header_row_done = True
        elif tag == "table":
            self._emit("\n")

    def handle_data(self, data):
        if self._skip > 0:
            return
        if self._in_pre:
            self._emit(data)
            return
        # Normalise whitespace outside pre
        text = re.sub(r"[ \t]+", " ", data)
        if self._in_link:
            self._link_buf.append(text)
        elif self._in_td:
            self._td_buf.append(text)
        else:
            self._emit(text)

    # ---- post-process ------------------------------------------------------
    def get_markdown(self):
        md = "".join(self._buf)

        # Remove bold/italic markers that wrap only whitespace
        md = re.sub(r"\*\*\s*\*\*", "", md)
        md = re.sub(r"\*\s*\*",     "", md)

        # Remove list items that have no content after the bullet
        md = re.sub(r"\n([ \t]*[-\d]+[.)]\s*)\n", "\n", md)
        md = re.sub(r"\n([ \t]*-\s*)\n",          "\n", md)

        # Collapse 3+ blank lines to 2
        md = re.sub(r"\n{3,}", "\n\n", md)

        # Strip leading/trailing whitespace
        return md.strip()


def html_to_markdown(html_body, img_dir=None, base_url="https://support.calendarhero.com"):
    if not html_body:
        return ""
    p = HtmlToMarkdown(img_dir=img_dir, base_url=base_url)
    p.feed(html_body)
    return p.get_markdown()

# ---------------------------------------------------------------------------
# Utilities
# ---------------------------------------------------------------------------
def to_kebab(title):
    s = title.lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-+", "-", s)
    return s.strip("-") or "article"

def safe_yaml_value(value):
    if any(c in str(value) for c in [":", "#", "@", "["]):
        escaped = str(value).replace('"', '\\"')
        return f'"{escaped}"'
    return str(value)

def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode())

def fetch_all_articles():
    articles = []
    url = f"{BASE_URL}/articles.json?per_page=100&page=1"
    while url:
        data = fetch_json(url)
        articles.extend(data["articles"])
        url = data.get("next_page")
        if url:
            print("  Fetching next page…")
    return articles

# ---------------------------------------------------------------------------
# File writers
# ---------------------------------------------------------------------------
def write_category_json(folder, label, position):
    os.makedirs(folder, exist_ok=True)
    obj  = {"label": label, "position": position, "collapsed": True}
    path = os.path.join(folder, "_category_.json")
    with open(path, "w") as f:
        json.dump(obj, f, indent=2)
        f.write("\n")

def write_article(folder, filename, title, body_html, position):
    img_dir = os.path.join(folder, "img")
    os.makedirs(img_dir, exist_ok=True)
    md_body = html_to_markdown(body_html, img_dir=img_dir)

    # Remove img dir if nothing was downloaded
    if not os.listdir(img_dir):
        os.rmdir(img_dir)

    title_yaml = safe_yaml_value(title)
    content    = f"---\ntitle: {title_yaml}\nsidebar_position: {position}\n---\n\n{md_body}\n"

    path = os.path.join(folder, filename)
    with open(path, "w") as f:
        f.write(content)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    print("Deleting existing calendarhero docs…")
    import shutil
    for item in os.listdir(DOCS_ROOT):
        item_path = os.path.join(DOCS_ROOT, item)
        # Keep the index.mdx and _category_.json at root
        if item in ("index.mdx", "_category_.json"):
            continue
        if os.path.isdir(item_path):
            shutil.rmtree(item_path)

    print("Fetching articles from CalendarHero Zendesk…")
    articles = fetch_all_articles()
    print(f"Fetched {len(articles)} articles.")

    by_section = {}
    for a in articles:
        by_section.setdefault(a["section_id"], []).append(a)

    for sid, section_meta in SECTIONS.items():
        section_articles = by_section.get(sid, [])
        folder = os.path.join(DOCS_ROOT, section_meta["slug"])
        print(f"\nSection: {section_meta['label']} ({len(section_articles)} articles)")

        write_category_json(folder, section_meta["label"], section_meta["position"])

        used = set()
        for pos, article in enumerate(section_articles):
            title    = article.get("title", "Untitled")
            body_html = article.get("body", "")
            base     = to_kebab(title)
            fname    = base + ".md"
            if fname in used:
                fname = f"{base}-{article['id']}.md"
            used.add(fname)
            print(f"  {fname}")
            write_article(folder, fname, title, body_html, pos)

    print(f"\n✅ Migration complete → {DOCS_ROOT}")

if __name__ == "__main__":
    main()
