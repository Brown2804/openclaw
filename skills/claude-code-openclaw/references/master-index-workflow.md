# Master Index Workflow

## 1) 분류

- 긴급/장애/보안/업데이트 이슈: `docs-index/eventcases/*.md`
- 일반 구현/설정/탐색: `docs-index/usecases/*.md`

## 2) 근거 확보

- 버킷 파일에서 DOC-ID 확인
- `docs-index/index.md`에서 DOC-ID 상세(heading, path, line_count) 확인
- 최종적으로 `docs/<path>` 원문을 읽고 명령/수정안 확정

## 3) 실행

- 변경 범위를 최소화
- 설정/코드 변경 후 재현 가능한 검증 명령 실행
- 실패 시 이벤트 케이스 인덱스로 복귀해 원인 분기 재탐색

## 4) 유지보수

- docs가 바뀌면 `python3 docs-index/scripts/rebuild_index.py`로 인덱스 재생성
- 인덱스/스킬에서 반복되는 수작업을 scripts로 승격
