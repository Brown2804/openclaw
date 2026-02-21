# OpenClaw 운영 체크리스트 (Docs-Indexed)

OpenClaw 설정 변경/이슈 해결/운영 점검 시 아래 순서대로 실행한다.

## A. 세션 시작

- [ ] `bash skills/claude-code-openclaw/scripts/session_start_checks.sh` 실행
- [ ] 버전 상태 확인 (`git describe --tags --always`)
- [ ] 최근 docs 변경 확인 (`git log --oneline -- docs | head -n 20`)
- [ ] 홈페이지 sitemap 대조 (`python3 docs-index/scripts/compare_homepage_docs.py`)

## B. 작업 분류

- [ ] 이벤트성(장애/보안/업데이트/운영이벤트)인지 먼저 판단
- [ ] 이벤트면 `docs-index/eventcases/*.md`에서 시작
- [ ] 일반 작업이면 `docs-index/usecases/*.md`에서 시작
- [ ] 관련 DOC-ID를 `docs-index/index.md`에서 역추적

## C. 실행

- [ ] `openclaw/docs/...` 원문 근거 확인 후 작업 수행
- [ ] 변경 범위를 최소화
- [ ] 재현 가능한 검증 명령 실행 (테스트/상태/로그)

## D. 인덱스 유지보수

- [ ] docs 변동 시 `python3 docs-index/scripts/rebuild_index.py` 재실행
- [ ] `git diff -- docs-index` 결과 검토
- [ ] chunk 파일이 300줄 이하인지 확인

## E. 마무리

- [ ] 변경 요약 및 위험도 기록
- [ ] 필요 시 롤백 경로 명시
- [ ] 커밋 메시지에 범위 명확히 기재
