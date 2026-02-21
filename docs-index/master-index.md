# OpenClaw Docs Master Index

이 문서는 공식 docs 인덱스 운용의 단일 진입점이다.

## 핵심 규칙

1. OpenClaw 설정/이슈 해결 작업은 항상 이 Master Index를 먼저 확인한다.
2. 먼저 이벤트 케이스(eventcases)를 검사해 긴급/장애/보안/업데이트 상황인지 판별한다.
3. 이벤트 케이스가 아니면 유즈케이스(usecases)에서 해당 작업 도메인을 선택한다.
4. 상세 근거가 필요하면 `index.md`에서 DOC-ID를 역추적해 원문 문서로 이동한다.
5. 인덱스는 임시 캐시 성격이다. 최종 판단/명령은 원문 docs를 기준으로 확정한다.

## 세션 시작 체크리스트(권장 자동화)

- OpenClaw 버전 업데이트 가능 여부 확인
- 공식 문서 변경 여부 확인(로컬 docs git diff/fetch)
- `index.md` 재생성 후 기존 chunk들과 일관성 점검

## 빠른 사용 절차

1. 이벤트 여부 판별 → `eventcases/*.md`
2. 일반 작업이면 도메인 선택 → `usecases/*.md`
3. DOC-ID 확인 → `index.md`에서 heading/context 확보
4. 실제 문서 열람 → `openclaw/docs/...` 원문 기준 실행

## 유즈케이스 인덱스

- [uc-setup-deploy](usecases/uc-setup-deploy.md) — 설치/온보딩/배포/플랫폼 구성 (문서 64개)
- [uc-model-agent-core](usecases/uc-model-agent-core.md) — 모델/에이전트 코어 개념 및 레퍼런스 (문서 170개)
- [uc-channel-integration](usecases/uc-channel-integration.md) — 채널 연동 및 외부 인터페이스 (문서 71개)
- [uc-tools-workflow](usecases/uc-tools-workflow.md) — 도구/플러그인/자동화 워크플로우 (문서 128개)
- [uc-gateway-operations](usecases/uc-gateway-operations.md) — 게이트웨이 운영/로깅/런타임 관리 (문서 52개)
- [uc-dev-architecture](usecases/uc-dev-architecture.md) — 아키텍처/실험/리팩터/개발 참고 (문서 90개)

## 이벤트 케이스 인덱스

- [ev-troubleshooting](eventcases/ev-troubleshooting.md) — 문제 발생 시 진단/복구/디버깅 (문서 26개)
- [ev-security](eventcases/ev-security.md) — 보안 검토/위협 모델/민감 이슈 대응 (문서 6개)
- [ev-upgrade](eventcases/ev-upgrade.md) — 업데이트/마이그레이션/버전 전환 (문서 10개)
- [ev-ops-monitoring](eventcases/ev-ops-monitoring.md) — 운영 이벤트(헬스체크/하트비트/크론/웹훅) (문서 30개)

## Claude Code Skill 연계 규칙

- OpenClaw 설정/이슈 해결 작업은 `openclaw/skills/claude-code-openclaw/SKILL.md`를 기본 워크플로우로 사용한다.
- 스킬은 이 Master Index를 1차 라우터로 사용해야 한다.
- 운영 실행 체크리스트는 `openclaw/docs-index/OPERATIONS-CHECKLIST.md`를 따른다.

## 재생성/대조 명령

```bash
python3 openclaw/docs-index/scripts/rebuild_index.py
python3 openclaw/docs-index/scripts/compare_homepage_docs.py
```

## 산출물

- 상세 임시 인덱스: `openclaw/docs-index/index.md`
- 분할 인덱스: `openclaw/docs-index/usecases/*.md`, `openclaw/docs-index/eventcases/*.md`
- 운영 체크리스트: `openclaw/docs-index/OPERATIONS-CHECKLIST.md`
- 인덱서 스크립트: `openclaw/docs-index/scripts/*.py`
