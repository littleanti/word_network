# 🗂️ PLAN — 3_word_network · 순우리말 어휘망 연결 게임

> 개발 계획 및 진행 상태
> Last updated: 2026-04-25
> Status: **Phase 0 / 설계 단계** — 미구현
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

## 📐 Phase 0 — 설계 (현재)

| # | 작업 | 산출물 | 상태 |
|---|------|-------|------|
| 0.1 | PRD 작성 | `docs/PRD.md` | ✅ |
| 0.2 | TRD 작성 | `docs/TRD.md` | ✅ |
| 0.3 | PLAN 작성 | `docs/PLAN.md` | ✅ |
| 0.4 | 단어 데이터 초안 (50개) | `src/data/words.js` 초안 | ✅ |
| 0.5 | 장면 매핑 초안 (8개) | `src/data/scenes.js` 초안 + hotspot 좌표 | ✅ |
| 0.6 | 일러스트 자산 전략 결정 | **이모지 콜라주** (3단 폴백 최저층) — Phase 2에서 SVG 검토 | ✅ |
| 0.7 | 카테고리 라벨 통일 | '자연' / '동물' / '일상' / '행동' / '감정(체언)' 확정 | ✅ |
| 0.8 | 디자인 토큰 차용 | 1단계 tokens.css 색상/폰트 차용 완료 (`tokens.css`) | ✅ |

**Exit 게이트**: 0.4–0.7 완료 시 Phase 1 착수.

---

## 🚶 Phase 1 — Walking Skeleton (M1)

> 목표: "흐름이 끊기지 않는 1장면짜리 데모"

| # | 작업 | 의존 | 메모 |
|---|------|-----|------|
| 1.1 | `index.html` + 화면 3개 골격(start/play/end) | — | 1단계 구조 차용 |
| 1.2 | `config.js` / `state.js` / `storage.js` 스텁 | — | TRD §2.3 스키마 |
| 1.3 | `main.js` 진입점 + 화면 전환 | 1.1, 1.2 | `ui.showScreen()` |
| 1.4 | `words.js` / `scenes.js` 1개 장면만 | 0.4, 0.5 | "비 오는 날" 1장면 |
| 1.5 | 정적 이모지 콜라주 일러스트 (3단 폴백 최저층) | 1.4 | SVG 없이도 동작 |
| 1.6 | 음절 도크 렌더 (탭만, 드래그 없음) | 1.4 | `syllable-dock.js` 최소판 |
| 1.7 | 슬롯 채움 + 정답 검증 | 1.6 | `slot.js` + `checkSlot` |
| 1.8 | 정답 시 다음 장면 / 종료 화면 | 1.7 | `game.js` 루프 |

**Exit 게이트**: 한 명이 처음부터 끝까지 5분 내 클리어. **드래그·TTS·힌트는 미포함**.

---

## 🎯 Phase 2 — MVP P0 완성 (M2)

### 2.A 인터랙션 강화
- [ ] 2.A.1 Pointer Events 기반 `dnd.js` (드래그 + 자성 스냅)
- [ ] 2.A.2 음절 도크 → 슬롯 드래그 동작
- [ ] 2.A.3 단어 칩 → 그림 hotspot 드래그·매칭 (`scene.js` hotspot)
- [ ] 2.A.4 탭 입력 시 빈 슬롯 자동 배치 (드래그 임계값 8px)

### 2.B 피드백
- [ ] 2.B.1 정답 사운드(짧은 차임) + 별 반짝임
- [ ] 2.B.2 오답 시 부드러운 흔들림 + prefix 잠금
- [ ] 2.B.3 햅틱 (`navigator.vibrate(20)`)

### 2.C 음성
- [ ] 2.C.1 `tts.js` 1단계에서 복사·키 prefix만 변경
- [ ] 2.C.2 정답 시 자동 발화 + 단어 칩 탭 시 재발화
- [ ] 2.C.3 음성 미지원 graceful fallback

### 2.D 종료 화면
- [ ] 2.D.1 모은 스티커/별 컬렉션 표시
- [ ] 2.D.2 격려 메시지(랜덤 풀)
- [ ] 2.D.3 "다시 하기" / "다른 장면" 분기

### 2.E 데이터 확장
- [ ] 2.E.1 장면 8개 완성 (자연 3 / 동물 3 / 일상 2)
- [ ] 2.E.2 단어 50개 + 음절·hotspot 매핑 검증

**Exit 게이트**: PRD §9 지표 측정 가능 + 학부모·아이 실기기 1회 이상 검증.

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

## 🌐 Phase 5 — PWA + 대시보드 (M5)

- [ ] `manifest.webmanifest` + 아이콘 세트
- [ ] Service Worker — 장면·폰트 사전 캐싱
- [ ] 부모 대시보드 (카테고리별 정답률·평균 시간)
- [ ] 다크 모드 + 폰트 크기 조절
- [ ] IndexedDB 누적 데이터 시각화

**Exit 게이트**: Lighthouse PWA ≥ 90, 오프라인 첫 로드 후 정상 동작.

---

## 🧰 Phase 6 — 라이브러리화 / 형제 통합 (M6)

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

## 📝 릴리즈 노트 (예약)

### v0.1.0 (예정 — Phase 1 완료 시)
- Walking Skeleton: 1장면 데모, 탭 입력만, 정답 검증·종료 화면

### v0.2.0 (예정 — Phase 2 / MVP)
- P0 기능 전부, 장면 8개·단어 50개, 드래그·TTS·햅틱

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
