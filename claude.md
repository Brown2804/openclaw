# claude.md

OpenClaw 전용 운영 규칙 (로컬 강제 가이드)

## 세션 시작 필수 루틴

매 세션 시작 시 아래를 순서대로 실행한다.

1. **OpenClaw 버전 업데이트 확인**
   - `cd openclaw && git fetch --tags --prune`
   - `git describe --tags --always`
   - `git tag --sort=-v:refname | head`
   - 필요 시 `docs/install/updating.md` 기반으로 업데이트 계획 수립

2. **공식 문서 업데이트 확인**
   - `cd openclaw && git log --oneline -- docs | head -n 20`
   - `python3 openclaw/docs-index/scripts/compare_homepage_docs.py`
   - 홈페이지 sitemap 대비 local docs 누락/추가 경로 확인

3. **Master Index 하위 문서 대조**
   - `python3 openclaw/docs-index/scripts/rebuild_index.py`
   - `git diff -- openclaw/docs-index`
   - 변경된 DOC-ID / 버킷 배치가 실제 docs 변경과 일치하는지 검증

## 문서 인덱스 사용 규칙

- 단일 진입점: `openclaw/docs-index/master-index.md`
- 상세 검색: `openclaw/docs-index/index.md`
- 케이스별 분기:
  - 이벤트 대응: `openclaw/docs-index/eventcases/*.md`
  - 일반 작업: `openclaw/docs-index/usecases/*.md`
- 최종 판단은 반드시 원문(`openclaw/docs/...`) 기준으로 확정한다.

## Claude Code Skill 강제 정책

OpenClaw 폴더 내 작업(설정 변경, 이슈 트리아지, 장애 분석, 운영 체크)은
**반드시 `claude-code-openclaw` 스킬을 우선 사용**한다.

- 스킬 파일: `openclaw/skills/claude-code-openclaw/SKILL.md`
- 스킬 참조 인덱스: `openclaw/docs-index/master-index.md`

## Gateway 재시작 안전 규칙

- 대화 흐름 보존이 필요한 환경에서는 `openclaw gateway restart`를 직접 치지 않는다.
- 반드시 아래 래퍼를 사용한다.
  - `bash /home/khj12/.openclaw/workspace/scripts/restart_gateway_with_resume_detached.sh`
- 필요 시 세션 키를 명시한다.
  - `bash /home/khj12/.openclaw/workspace/scripts/restart_gateway_with_resume_detached.sh --session-key agent:main:main`

## 원칙

- 두 번 다시 삽질하지 않는다.
- 같은 유형의 반복 작업은 공식 문서 기반 스킬로 고정한다.
- API/툴 신규 도입 시에도 동일하게 공식 문서 기반 인덱스 + 스킬을 만든다.
