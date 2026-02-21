#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$REPO_ROOT"

echo "[1/4] Repository/version snapshot"
git rev-parse --short HEAD
git describe --tags --always || true

echo
echo "[2/4] Recent docs commits"
git log --oneline -- docs | head -n 20 || true

echo
echo "[3/4] Homepage docs sitemap compare"
python3 docs-index/scripts/compare_homepage_docs.py | sed -n '1,80p' || true

echo
echo "[4/4] Current docs-index diff"
git diff -- docs-index --stat || true

echo
echo "Done. If docs changed, run: python3 docs-index/scripts/rebuild_index.py"
