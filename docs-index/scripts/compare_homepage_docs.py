#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
from urllib.parse import urlparse
from urllib.request import urlopen
import xml.etree.ElementTree as ET

DOCS_ROOT = Path(__file__).resolve().parents[2] / "docs"
SITEMAP_URL = "https://docs.openclaw.ai/sitemap.xml"


def local_slug(rel: Path) -> str:
    parts = list(rel.parts)
    if not parts:
        return "/"
    p = Path(*parts)
    slug = "/" + p.as_posix()
    slug = slug.removesuffix(".md").removesuffix(".mdx")
    slug = slug.replace("/index", "")
    if slug == "":
        return "/"
    return slug


def fetch_site_slugs(url: str) -> set[str]:
    with urlopen(url, timeout=20) as r:
        xml_data = r.read()
    root = ET.fromstring(xml_data)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    slugs: set[str] = set()
    for loc in root.findall("sm:url/sm:loc", ns):
        raw = (loc.text or "").strip()
        if not raw:
            continue
        parsed = urlparse(raw)
        p = parsed.path.rstrip("/") or "/"
        slugs.add(p)
    return slugs


def collect_local_slugs() -> set[str]:
    slugs: set[str] = set()
    for p in DOCS_ROOT.rglob("*"):
        if p.is_file() and p.suffix in {".md", ".mdx"}:
            rel = p.relative_to(DOCS_ROOT)
            slugs.add(local_slug(rel))
    return slugs


def main() -> None:
    local = collect_local_slugs()
    site = fetch_site_slugs(SITEMAP_URL)

    only_local = sorted(local - site)
    only_site = sorted(site - local)

    print(f"Local slugs : {len(local)}")
    print(f"Site slugs  : {len(site)}")
    print(f"Only local  : {len(only_local)}")
    print(f"Only site   : {len(only_site)}")

    if only_local:
        print("\n[Only local] (first 50)")
        for s in only_local[:50]:
            print("-", s)

    if only_site:
        print("\n[Only site] (first 50)")
        for s in only_site[:50]:
            print("-", s)


if __name__ == "__main__":
    main()
