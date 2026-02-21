---
name: claude-code-openclaw
description: OpenClaw 저장소 내부에서 설정 변경, 장애/이슈 트리아지, 문서 근거 확인, 운영 점검을 수행하는 실행 스킬. Use when working in the openclaw repo for configuration edits, troubleshooting, upgrade checks, docs-grounded fixes, or gateway/runtime operations. 항상 docs-index Master Index를 먼저 사용해 관련 공식 문서를 좁힌 뒤 작업한다.
---

# Claude Code OpenClaw

OpenClaw 폴더 작업은 이 스킬을 기본 경로로 사용한다.

## Core Workflow

1. 작업 루트를 `openclaw/`로 고정한다.
2. `docs-index/master-index.md`를 먼저 읽고 작업 유형을 분류한다.
3. 이벤트성 작업이면 `docs-index/eventcases/*.md`를 먼저 확인한다.
4. 일반 작업이면 `docs-index/usecases/*.md`에서 도메인 문서를 찾는다.
5. DOC-ID를 `docs-index/index.md`에서 역추적해 대상 문서 path/heading을 확보한다.
6. 최종 명령/수정안은 반드시 `docs/...` 원문 근거로 확정한다.
7. 변경 후 검증 명령(빌드/테스트/상태 확인)을 실행한다.

## Mandatory Rules in OpenClaw Repo

- OpenClaw 설정/이슈 해결은 이 스킬 워크플로우를 건너뛰지 않는다.
- 문서 근거 없이 추측으로 설정값을 바꾸지 않는다.
- 장애 대응은 항상 이벤트 케이스 인덱스부터 확인한다.
- 동일한 반복 작업은 스크립트/레퍼런스로 축적한다.

## Session Start Ops

세션 시작 시 아래를 수행한다.

1. `bash skills/claude-code-openclaw/scripts/session_start_checks.sh`
2. 출력에서 docs 변경/버전 차이가 있으면 `python3 docs-index/scripts/rebuild_index.py` 실행
3. `git diff -- docs-index`로 인덱스 변경을 검토

## References

- 운영 기준: `references/master-index-workflow.md`
- 버킷 안내: `references/doc-buckets.md`
- 운영 체크리스트: `openclaw/docs-index/OPERATIONS-CHECKLIST.md`
- 실행 스크립트: `scripts/session_start_checks.sh`
