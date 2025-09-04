# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code (claude.ai/code)에게 안내를 제공합니다.

## 프로젝트 개요

산업용 AI 솔루션에 중점을 둔 회사인 DeepAI Industrial Transfer (DIT)의 현대적인 홈페이지입니다. 애니메이션 파티클 배경과 반응형 디자인을 특징으로 하는 바닐라 HTML, CSS, JavaScript로 구축된 단일 페이지 애플리케이션입니다.

## 개발 명령어

### 로컬 개발
```bash
# 로컬 개발 서버 시작 (Python)
python -m http.server 8000
# http://localhost:8000 에서 접속

# Node.js 대안
npx http-server -p 8000
```

### 배포

#### GitHub Pages
- main 브랜치에 푸시
- Settings → Pages → main 브랜치에서 배포 설정

## 아키텍처

### 파일 구조
- `index.html` - DIT 회사의 한국어 콘텐츠가 포함된 메인 페이지
- `app.js` - 캔버스 렌더링을 사용한 애니메이션 파티클 배경 시스템
- `style-blue.css` - 파란색 그라데이션과 현대적 디자인의 현재 테마
- `style.css` - 대체 테마 (현재 비활성화)
- `logo3.png` - 회사 로고
- `CNAME` - 도메인 설정 (deepai-it.com)

### 주요 컴포넌트

#### 파티클 애니메이션 시스템 (`app.js`)
- 연결선이 있는 캔버스 기반 파티클 렌더링
- 기기 픽셀 비율 감지로 성능 최적화
- 화면 크기에 따른 파티클 수 스케일링으로 반응형 디자인
- `prefers-reduced-motion`을 통한 모션 감소 접근성 지원
- 기본 80개 파티클, 모바일 기기에서는 축소

#### 스타일링 시스템
- 일관된 테마를 위한 CSS 커스텀 속성
- 파란색 그라데이션 배경 (`--bg-top`, `--bg-middle`, `--bg-bottom`)
- 한국어 텍스트 최적화를 위한 Pretendard 폰트 패밀리
- 소프트 라이트 블렌드 모드의 애니메이션 그라데이션 오버레이
- 모바일 반응형 디자인

#### 콘텐츠 구조
- 로고와 네비게이션이 있는 고정 헤더
- 회사 태그라인이 있는 히어로 섹션
- 연락처 정보와 동적 저작권 연도가 있는 푸터

## 도메인 설정

사이트는 `deepai-it.com`에서 GitHub Pages로 배포되도록 설정되어 있습니다.

## 테마

두 가지 CSS 테마를 사용할 수 있습니다:
- `style-blue.css` (활성) - 현대적인 파란색 그라데이션 테마
- `style.css` - 대체 테마

파티클 시스템 색상 체계는 CSS 커스텀 속성을 통해 선택된 테마에 자동으로 적응합니다.