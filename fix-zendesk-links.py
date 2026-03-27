#!/usr/bin/env python3
"""
Replace all support.calendarhero.com Zendesk article links in the migrated
Docusaurus docs with their corresponding local /calendarhero/... paths.
"""

import json
import os
import re
import urllib.request

SECTIONS = {
    14071657142039: "getting-started",
    14071664141591: "setting-up-calendarhero",
    14071666823703: "how-to",
    14071667924631: "how-does-calendarhero-work",
    14071698058391: "what-can-calendarhero-do",
    14071699526679: "scheduling-meetings",
    14071705138455: "privacy-and-security",
    14071756404759: "technical-troubleshooting",
    14071728421527: "additional-resources",
}

BASE_URL  = "https://support.calendarhero.com/api/v2/help_center/en-us"
DOCS_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                         "docusaurus", "docs", "calendarhero")

def to_kebab(title):
    s = title.lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-+", "-", s)
    return s.strip("-") or "article"

def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read())

def build_id_to_path():
    """Return a dict of article_id (int) -> docusaurus path string."""
    mapping = {}
    page = 1
    while True:
        url = f"{BASE_URL}/articles.json?per_page=100&page={page}"
        data = fetch_json(url)
        articles = data.get("articles", [])
        if not articles:
            break
        for article in articles:
            aid = article["id"]
            section_id = article["section_id"]
            title = article["title"]
            section_slug = SECTIONS.get(section_id)
            if section_slug is None:
                continue
            kebab = to_kebab(title)
            mapping[aid] = f"/calendarhero/{section_slug}/{kebab}"
        if not data.get("next_page"):
            break
        page += 1
    print(f"  Built mapping for {len(mapping)} articles.")
    return mapping

# Matches Zendesk article links from both domains
ZENDESK_ARTICLE_RE = re.compile(
    r"https?://(?:support|faq)\.calendarhero\.com/hc/en-us/articles/(\d+)[^\s\)\"\]]*"
)
# Matches any other leftover calendarhero zendesk-style URL (non-article)
ZENDESK_OTHER_RE = re.compile(
    r"https?://(?:support|faq)\.calendarhero\.com[^\s\)\"\]]*"
)
# Matches a markdown link where the URL is a zendesk link: [text](zendesk-url)
MARKDOWN_LINK_RE = re.compile(
    r"\[([^\]]*)\]\((https?://(?:support|faq)\.calendarhero\.com[^\)]*)\)"
)

def fix_file(path, id_map):
    with open(path, encoding="utf-8") as f:
        content = f.read()

    def md_link_replacer(m):
        text = m.group(1)
        url = m.group(2)
        # Try to extract article ID
        article_match = ZENDESK_ARTICLE_RE.match(url)
        if article_match:
            aid = int(article_match.group(1))
            docusaurus_path = id_map.get(aid)
            if docusaurus_path:
                return f"[{text}]({docusaurus_path})"
        # No mapping found — keep the text but drop the dead link
        return text

    new_content = MARKDOWN_LINK_RE.sub(md_link_replacer, content)

    # Also replace any bare (non-markdown) zendesk URLs with their docusaurus path
    def bare_url_replacer(m):
        aid = int(m.group(1))
        return id_map.get(aid, "")

    new_content = ZENDESK_ARTICLE_RE.sub(bare_url_replacer, new_content)

    count = content != new_content
    if count:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  Fixed: {os.path.relpath(path)}")
    return int(count)

def main():
    print("Fetching article list from Zendesk...")
    id_map = build_id_to_path()

    total = 0
    for dirpath, _, filenames in os.walk(DOCS_ROOT):
        for fname in filenames:
            if fname.endswith(".md") or fname.endswith(".mdx"):
                total += fix_file(os.path.join(dirpath, fname), id_map)

    print(f"\nDone. Replaced {total} Zendesk link(s) across all files.")

if __name__ == "__main__":
    main()
