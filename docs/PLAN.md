# 🗂️ PLAN — 3_word_network · 순우리말 어휘망 연결 게임

> 개발 계획 및 진행 상태
> Last updated: 2026-05-04
> Status: **Phase 1 완료 · Phase 2 일부 완료**
> 참조: `./PRD.md`, `./TRD.md`, `../AGENTS.md`

## 🧭 마일스톤 개요

| 마일스톤 | 목표 | 게이트 |
|---------|------|-------|
| **M0** 설계 | PRD/TRD/PLAN 확정, 일러스트 자산 전략 결정 | 본 3문서 + 단어 50개 초안 |
| **M1** Walking Skeleton | 시작 → 1장면 클리어 → 종료, 단일 카테고리 | 한 명이 5분 안에 끝까지 플레이 |
| **M2** MVP (P0 완성) | F1~F10 전부 동작, 장면 8개·단어 50개 | 학부모·아이 실기기 검증 통과 |
| **M3** 확장 (P1) | 카테고리/난이도/힌트/복습/이어하기 | 자동 힌트 사용률 < 30% 확인 |
| **M4** 데이터 확장 | 장면 20개, 단어 100개, 카테고리 5개 균형 | 4주 사용자가 모든 카테고리 노출 |
| **M5** PWA + 대시보드 | 홈 화면 설치, 부모 대시보드, 다크 모드 | Lighthouse PWA 90+ |
| **M6** 라이브러리화 | 2단계와 dnd/syllable-block 공유 모듈 추출 | 두 게임 모두 회귀 없음 |

---

## 📐 Phase 0 — 설계 ✅ 완료

| # | 작업 | 산출물 | 상태 |
|---|------|-------|------|
| 0.1 | PRD 작성 | `docs/PRD.md` | ✅ |
| 0.2 | TRD 작성 | `docs/TRD.md` | ✅ |
| 0.3 | PLAN 작성 | `docs/PLAN.md` | ✅ |
| 0.4 | 단어 데이터 초안 (50개) | `src/data/words.js` 초안 | ✅ |
| 0.5 | 장면 매핑 초안 (8개) | `src/data/scenes.js` 초안 + hotspot 좌표 | ✅ |
| 0.6 | 일러스트 자산 전략 결정 | **이모지 콜라주** (3단 폴백 최저층) — Phase 4에서 SVG 재검토 | ✅ |
| 0.7 | 카테고리 라벨 통일 | '자연' / '동물' / '일상' / '행동' / '감정(체언)' 확정 | ✅ |
| 0.8 | 디자인 토큰 차용 | 1단계 tokens.css 색상/폰트 차용 완료 (`tokens.css`) | ✅ |

**Exit 게이트**: ✅ 달성

---

## 🚶 Phase 1 — Walking Skeleton (M1) ✅ 완료

> 목표: "흐름이 끊기지 않는 1장면짜리 데모"

| # | 작업 | 의존 | 상태 |
|---|------|-----|------|
| 1.1 | `index.html` + 화면 3개 골격(start/play/end) | — | ✅ |
| 1.2 | `config.js` / `state.js` / `storage.js` 스텁 | — | ✅ |
| 1.3 | `main.js` 진입점 + 화면 전환 | 1.1, 1.2 | ✅ |
| 1.4 | `words.js` / `scenes.js` 8개 장면 전체 | 0.4, 0.5 | ✅ |
| 1.5 | 이모지 콜라주 + 실사 배경 이미지(Unsplash) | 1.4 | ✅ |
| 1.6 | 음절 도크 렌더 (탭 입력, 3줄 기본 높이) | 1.4 | ✅ |
| 1.7 | 슬롯 채움 + 정답 검증 + prefix 잠금 | 1.6 | ✅ |
| 1.8 | 정답 시 다음 장면 / 종료 화면 (점수·스티커·격려) | 1.7 | ✅ |

**Exit 게이트**: ✅ 달성 (2026-04-29)

---

## 🎯 Phase 2 — MVP P0 완성 (M2) ✅ 완료

### 2.A 인터랙션 강화 (탭 기본 / 드래그 옵션)
- [x] 2.A.1 `dnd.js` — Pointer Events 이벤트 위임, AbortController 생명주기 ✅
- [x] 2.A.2 음절 도크 → 슬롯 드래그 (threshold 8px, ghost clone, drag-over 하이라이트) ✅
- [ ] 2.A.3 단어 칩 → hotspot 드래그 매칭 ← Phase 3으로 이동
- [x] 2.A.4 탭 시 빈 슬롯 자동 배치 ✅

### 2.B 피드백
- [x] 2.B.1 정답 사운드 — `playCorrect()` C5→E5→G5 아르페지오 (Web Audio API) ✅
- [x] 2.B.2 오답 사운드 + prefix 잠금 — `playIncorrect()` G3→D3 하강 톤 ✅
- [x] 2.B.3 햅틱 vibrate(15/30/50) ✅

### 2.C 음성
- [x] 2.C.1 `tts.js` (ko-KR, rate 0.85) ✅
- [x] 2.C.2 정답 시 자동 발화 + 장면 단어 탭으로 재발화 ✅
- [x] 2.C.3 음성 미지원 graceful fallback ✅

### 2.D 종료 화면
- [x] 2.D.1 모은 스티커 컬렉션 표시 ✅
- [x] 2.D.2 격려 메시지(랜덤 풀 6개) ✅
- [x] 2.D.3 "다시 하기" / "홈" 분기 ✅

### 2.E 데이터
- [x] 2.E.1 장면 8개 완성 (자연 3 / 동물 3 / 일상 2) ✅
- [x] 2.E.2 playground 단어 보강 — 그네·시소·모래 추가 (총 5개) ✅

### 2.F 계획 외 추가 구현 (v0.1.x)
- [x] 2.F.1 슬롯 탭으로 음절 취소 ✅
- [x] 2.F.2 게임 중 홈 버튼 ✅
- [x] 2.F.3 장면 배경 이미지 (picsum.photos) + 가독성 오버레이 ✅
- [x] 2.F.4 음절 도크 3줄 기본 높이 ✅
- [x] 2.F.5 Android 호환 이모지 교체 ✅

**Exit 게이트**: PRD §9 지표 측정 가능 + 학부모·아이 실기기 1회 이상 검증. ← 미달성 (실기기 검증 필요)

---

## 🧩 Phase 3 — 확장 P1 (M3)

| 영역 | 작업 |
|------|------|
| 설정 화면 | 카테고리 복수 선택, 난이도 3단, 세션 길이 3/5/10 |
| 자동 힌트 | 망설임 감지 → hintLevel 1(첫 음절 발광) → 2(위치 화살표) |
| 학부모 코칭 | 화면 상단 1줄 프롬프트, 회당 1회 |
| 오답 복습 | 종료 화면 오답 리스트 + TTS 재생 버튼 |
| 영속화 | localStorage 설정 저장 + `wn:resume` 이어하기 |
| 햅틱 토글 | iOS는 비활성 라벨, Android만 활성 |

**Exit 게이트**: 자동 힌트 사용률 < 30%, 이어하기 정상 복구.

---

## 📚 Phase 4 — 데이터 확장 (M4)

- [ ] 장면 20개, 단어 100개로 확장
- [ ] 카테고리 5개 균형 (각 12개+, 행동/감정은 8/6 최소)
- [ ] 디코이 음절 풀(`SYLLABLE_POOL_BY_FREQUENCY`) 정제 — 혼동군 묶음
- [ ] 계절·이벤트(추석/생일) 테마 팩 1개
- [ ] 일러스트 SVG 자체 제작 또는 라이센스 명시 정리

---

## 🧰 Phase 5 — 라이브러리화 / 형제 통합 (M6)

> **선결 조건**: 2단계(`2_syllable_assembly`)도 안정 동작 중일 것.

- [ ] `../shared/dnd.js` 추출 (Pointer Events + 자성 스냅)
- [ ] `../shared/syllable-block.js` (스타일 토큰만 외부 주입)
- [ ] `../shared/tts.js`, `../shared/storage.js` 통합
- [ ] 두 게임 모두 회귀 테스트 (Phase 2 게이트 재실행)
- [ ] `hangul_games/AGENTS.md` Cross-Project Architecture 항목 갱신

---

## 🚧 P2/P3 백로그 (시점 미정)

### P2 후보
- [ ] **수집 도감** — 익힌 단어 카테고리 책장 시각화 (F20)
- [ ] **사용자 단어집 JSON 업로드** (F21 변형)
- [ ] **SRL 스케줄러 통합** — 1단계/4단계와 진척도 동기화 (F26)
- [ ] **카테고리 직접 편집** UI

### P3 (실험)
- [ ] **발음 평가** Web Speech Recognition + Levenshtein
- [ ] **이미지 AI 생성** 일러스트 부족 카테고리 보충
- [ ] **멀티플레이어** WebRTC 방 만들기

---

## 🔄 기술 부채·개선 후보

| 항목 | 우선순위 | 메모 |
|------|---------|------|
| TypeScript 마이그레이션 | Medium | state 모델이 커지면 (TRD §2.3) |
| Vitest 유닛 테스트 | Medium | `checkSlot`, `buildDock`, `hitTest` 우선 |
| Playwright E2E | Low | 핵심 시나리오 3개 |
| Vite 도입 | Low | 번들·미니파이 필요할 때만 |
| i18n | Low | 영어 UI 지원 시 |
| React/Lit 마이그레이션 | Low | 화면이 5개 이상 늘어나면 |

---

## 🎯 브랜치 전략 (제안)

```
main                  # 배포 가능한 안정 버전
└── dev               # 통합 개발 브랜치
    ├── feat/skeleton            # Phase 1
    ├── feat/dnd                 # Phase 2.A
    ├── feat/tts                 # Phase 2.C
    ├── feat/settings-and-hint   # Phase 3
    └── refactor/shared-dnd      # Phase 6
```

커밋 컨벤션: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `data:` (단어/장면 추가 전용)

---

## 📝 릴리즈 노트

### v0.1.0 (2026-04-29 — Phase 0+1 완료)
- Walking Skeleton: 8장면, 탭 입력, 정답 검증, 종료 화면(점수·스티커·격려)
- 모바일 viewport 100dvh 고정

### v0.1.1 ~ v0.1.5 (2026-04-29 ~ 2026-05-04)
- 음절 도크 3줄 기본 높이 확장
- 게임 중 홈 버튼 추가
- Android 호환 이모지 교체
- TTS 정답 발화 + 장면 단어 탭 재발화 활성화
- 장면 실사 배경 이미지(Unsplash) + 가독성 오버레이 적용
- 슬롯 탭으로 음절 취소 기능 추가

### v0.2.0 (예정 — Phase 2 완성 / MVP)
- 드래그 입력(`dnd.js`) + hotspot 매칭
- 정답 사운드(차임)
- playground 장면 단어 보강

### v0.3.0 (예정 — Phase 3)
- 설정 화면, 자동 힌트, 코칭 프롬프트, 오답 복습, 이어하기

### v1.0.0 (예정 — Phase 4 + Phase 5)
- 장면 20개, PWA, 부모 대시보드, 다크 모드

---

## 🔗 참고 문서

- `../AGENTS.md` — 게임 단계 정의 (PRD 원본)
- `../../AGENTS.md` — 7단계 로드맵 + 모바일 우선 원칙
- `../../1_chosung_quiz/docs/` — 패턴 레퍼런스 (PRD/TRD/PLAN 형식)
- `../../1_chosung_quiz/src/data/words.js` — 단어 스키마 출발점
- `../../1_chosung_quiz/src/js/tts.js` — TTS 패턴 재사용 원본

<!-- MANUAL: -->
