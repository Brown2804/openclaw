#!/usr/bin/env python3
from __future__ import annotations

from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[2] / "docs"
OUT = Path(__file__).resolve().parents[1]
USECASE_DIR = OUT / "usecases"
EVENT_DIR = OUT / "eventcases"

USECASE_META = {
    "uc-setup-deploy": "설치/온보딩/배포/플랫폼 구성",
    "uc-model-agent-core": "모델/에이전트 코어 개념 및 레퍼런스",
    "uc-channel-integration": "채널 연동 및 외부 인터페이스",
    "uc-tools-workflow": "도구/플러그인/자동화 워크플로우",
    "uc-gateway-operations": "게이트웨이 운영/로깅/런타임 관리",
    "uc-dev-architecture": "아키텍처/실험/리팩터/개발 참고",
}

EVENT_META = {
    "ev-troubleshooting": "문제 발생 시 진단/복구/디버깅",
    "ev-security": "보안 검토/위협 모델/민감 이슈 대응",
    "ev-upgrade": "업데이트/마이그레이션/버전 전환",
    "ev-ops-monitoring": "운영 이벤트(헬스체크/하트비트/크론/웹훅)",
}

EVENT_KEYWORDS = {
    "ev-troubleshooting": [
        "troubleshooting",
        "debug",
        "doctor",
        "faq",
        "node-issue",
        "diagnostics",
        "testing",
    ],
    "ev-security": ["/security/", "threat-model", "formal-verification"],
    "ev-upgrade": ["updating", "migrating", "development-channels", "uninstall"],
    "ev-ops-monitoring": ["heartbeat", "cron", "webhook", "hooks", "poll", "auth-monitoring", "health"],
}

USECASE_ORDER = list(USECASE_META.keys())
EVENT_ORDER = list(EVENT_META.keys())


def heading_list(text: str, max_items: int = 8) -> list[str]:
    heads: list[str] = []
    for line in text.splitlines():
        m = re.match(r"^#{1,6}\s+(.+?)\s*$", line)
        if m:
            heads.append(m.group(1).strip())
        if len(heads) >= max_items:
            break
    return heads


def classify_usecase(rel: Path) -> str:
    parts = rel.parts
    if parts[0] == "zh-CN":
        cat = parts[1] if len(parts) > 1 else "(root)"
    else:
        cat = parts[0] if len(parts) > 0 else "(root)"

    if cat in {"start", "install", "pi.md", "pi-dev.md", "vps.md", "network.md"}:
        return "uc-setup-deploy"
    if cat in {"providers", "concepts", "reference", "nodes", "date-time.md", "prose.md"}:
        return "uc-model-agent-core"
    if cat in {"channels", "tts.md", "brave-search.md", "perplexity.md", "web"}:
        return "uc-channel-integration"
    if cat in {"tools", "plugins", "automation", "cli"}:
        return "uc-tools-workflow"
    if cat in {"gateway", "logging.md"}:
        return "uc-gateway-operations"
    return "uc-dev-architecture"


def classify_event(rel: Path) -> str | None:
    s = str(rel).lower()
    for key, words in EVENT_KEYWORDS.items():
        for w in words:
            if w in s:
                return key
    return None


def locale_of(rel: Path) -> str:
    return "zh-CN" if rel.parts[0] == "zh-CN" else "en"


def file_title(rel: Path, text: str) -> str:
    heads = heading_list(text, max_items=1)
    if heads:
        return heads[0]
    return rel.stem


def render_bucket_file(path: Path, bucket: str, desc: str, docs: list[dict]) -> None:
    lines = [
        f"# {bucket}",
        "",
        f"- 목적: {desc}",
        f"- 문서 수: {len(docs)}",
        "- 규칙: 한 줄당 1문서, 경로 기준으로 소스 역추적",
        "",
        "## 문서 목록",
    ]
    for d in docs:
        lines.append(
            f"- [{d['id']}] ({d['locale']}) {d['title']} — `{d['path']}`"
        )
    lines.append("")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    files = sorted([p for p in ROOT.rglob("*") if p.is_file() and p.suffix in {".md", ".mdx"}])

    docs: list[dict] = []
    by_usecase: dict[str, list[dict]] = defaultdict(list)
    by_event: dict[str, list[dict]] = defaultdict(list)

    for i, f in enumerate(files, start=1):
        rel = f.relative_to(ROOT)
        text = f.read_text(encoding="utf-8", errors="ignore")
        event_bucket = classify_event(rel)
        usecase_bucket = classify_usecase(rel)
        hlist = heading_list(text)
        doc = {
            "id": f"DOC-{i:04d}",
            "path": rel.as_posix(),
            "locale": locale_of(rel),
            "title": file_title(rel, text),
            "category": rel.parts[1] if rel.parts and rel.parts[0] == "zh-CN" and len(rel.parts) > 1 else rel.parts[0],
            "event_bucket": event_bucket or "-",
            "usecase_bucket": usecase_bucket,
            "headings": hlist,
            "line_count": len(text.splitlines()),
        }
        docs.append(doc)
        if event_bucket:
            by_event[event_bucket].append(doc)
        else:
            by_usecase[usecase_bucket].append(doc)

    # 1) Full temporary index
    now = datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")
    full_lines = [
        "# OpenClaw 공식 문서 임시 전체 인덱스 (Temporary)",
        "",
        f"- 생성 시각: {now}",
        f"- 대상 루트: `{ROOT}`",
        f"- 총 문서 수: {len(docs)}",
        "- 구성: 문서별 메타데이터 + heading 스냅샷 + 분류 버킷",
        "",
        "## 문서 카탈로그",
    ]
    for d in docs:
        full_lines.extend(
            [
                f"### {d['id']} · {d['title']}",
                f"- path: `{d['path']}`",
                f"- locale: `{d['locale']}`",
                f"- category: `{d['category']}`",
                f"- usecase_bucket: `{d['usecase_bucket']}`",
                f"- event_bucket: `{d['event_bucket']}`",
                f"- line_count: {d['line_count']}",
                "- headings: " + (" | ".join(d["headings"]) if d["headings"] else "(none)"),
                "",
            ]
        )

    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "index.md").write_text("\n".join(full_lines), encoding="utf-8")

    # 2) Split chunks (<=300 lines target)
    for k in USECASE_ORDER:
        docs_for_bucket = by_usecase.get(k, [])
        render_bucket_file(USECASE_DIR / f"{k}.md", k, USECASE_META[k], docs_for_bucket)

    for k in EVENT_ORDER:
        docs_for_bucket = by_event.get(k, [])
        render_bucket_file(EVENT_DIR / f"{k}.md", k, EVENT_META[k], docs_for_bucket)

    # 3) Master index
    master = [
        "# OpenClaw Docs Master Index",
        "",
        "이 문서는 공식 docs 인덱스 운용의 단일 진입점이다.",
        "",
        "## 핵심 규칙",
        "1. OpenClaw 설정/이슈 해결 작업은 항상 이 Master Index를 먼저 확인한다.",
        "2. 먼저 이벤트 케이스(eventcases)를 검사해 긴급/장애/보안/업데이트 상황인지 판별한다.",
        "3. 이벤트 케이스가 아니면 유즈케이스(usecases)에서 해당 작업 도메인을 선택한다.",
        "4. 상세 근거가 필요하면 `index.md`에서 DOC-ID를 역추적해 원문 문서로 이동한다.",
        "5. 인덱스는 임시 캐시 성격이다. 최종 판단/명령은 원문 docs를 기준으로 확정한다.",
        "",
        "## 세션 시작 체크리스트(권장 자동화)",
        "- OpenClaw 버전 업데이트 가능 여부 확인",
        "- 공식 문서 변경 여부 확인(로컬 docs git diff/fetch)",
        "- `index.md` 재생성 후 기존 chunk들과 일관성 점검",
        "",
        "## 빠른 사용 절차",
        "1) 이벤트 여부 판별 → `eventcases/*.md`",
        "2) 일반 작업이면 도메인 선택 → `usecases/*.md`",
        "3) DOC-ID 확인 → `index.md`에서 heading/context 확보",
        "4) 실제 문서 열람 → `openclaw/docs/...` 원문 기준 실행",
        "",
        "## 유즈케이스 인덱스",
    ]

    for k in USECASE_ORDER:
        count = len(by_usecase.get(k, []))
        master.append(f"- [{k}](usecases/{k}.md) — {USECASE_META[k]} (문서 {count}개)")

    master.extend(["", "## 이벤트 케이스 인덱스"])
    for k in EVENT_ORDER:
        count = len(by_event.get(k, []))
        master.append(f"- [{k}](eventcases/{k}.md) — {EVENT_META[k]} (문서 {count}개)")

    master.extend(
        [
            "",
            "## Claude Code Skill 연계 규칙",
            "- OpenClaw 설정/이슈 해결 작업은 `openclaw/skills/claude-code-openclaw/SKILL.md`를 기본 워크플로우로 사용한다.",
            "- 스킬은 이 Master Index를 1차 라우터로 사용해야 한다.",
            "",
            "## 재생성/대조 명령",
            "```bash",
            "python3 openclaw/docs-index/scripts/rebuild_index.py",
            "python3 openclaw/docs-index/scripts/compare_homepage_docs.py",
            "```",
            "",
            "## 산출물",
            "- 상세 임시 인덱스: `openclaw/docs-index/index.md`",
            "- 분할 인덱스: `openclaw/docs-index/usecases/*.md`, `openclaw/docs-index/eventcases/*.md`",
            "- 인덱서 스크립트: `openclaw/docs-index/scripts/*.py`",
        ]
    )

    (OUT / "master-index.md").write_text("\n".join(master), encoding="utf-8")


if __name__ == "__main__":
    main()
