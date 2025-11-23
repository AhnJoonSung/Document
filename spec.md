# GitHub 페이지 이력서 제작 요청 문서

## 프로젝트 개요

- **목적**: 백엔드 개발자 안준성의 온라인 이력서 페이지 제작
- **플랫폼**: GitHub Pages
- **기술 스택**: React + Vite
- **디자인 컨셉**: 현대적이고 미니멀한 개발자 이력서 (반응형 디자인)

---

## 기술 요구사항

### 프레임워크

- **React + Vite** 사용
- TypeScript
- Tailwind CSS 사용 권장

### 배포

- GitHub Pages 자동 배포 설정
- GitHub Actions 워크플로우 포함 (선택 사항)
- `gh-pages` 브랜치에 빌드 파일 배포

---

## 디자인 요구사항

### 전체적인 스타일

- **레이아웃**: 단일 페이지 스크롤 형식
- **색상**: 차분하고 전문적인 색상 팔레트 (다크 모드 선택 사항)
- **타이포그래피**:
  - 한글: Pretendard, Noto Sans KR
  - 영문/숫자: Inter, Roboto
- **반응형**: 모바일, 태블릿, 데스크톱 최적화
- **애니메이션**: Framer Motion 또는 CSS 애니메이션으로 부드러운 효과

### 디자인 스타일

- 깔끔한 카드형 레이아웃
- 아이콘 사용 (React Icons 라이브러리)
- 타임라인 형식의 경력/학력 표시
- 시각적 계층 구조가 명확한 정보 배치

---

## 콘텐츠 구조 및 내용

### 1. Header (상단 영역)

**구성 요소:**

- 이름: 안준성 (크고 굵게)
- 직무: Backend Developer (부제목)
- 짧은 소개 문구 (선택 사항): "확장 가능한 백엔드 시스템을 설계하고 구현하는 개발자"

**연락처 및 링크 (아이콘 + 텍스트):**

- 📧 이메일: tjdtna01@naver.com
- 📱 연락처: 010-3717-7612
- 📝 블로그: https://velog.io/@tjdtna01
- 💻 GitHub: https://github.com/AhnJoonSung

---

### 2. Education (학력)

**국립금오공과대학교**

- 전공: 컴퓨터소프트웨어공학과
- 기간: 2015.03 ~ 2021.02
- 학위: 학사

---

### 3. Work Experience (경력)

#### 주식회사 대모산개발단

- 직급/직무: PM 및 소프트웨어 개발자
- 기간: 2025.10 ~ 현재 (재직중)
- 회사 형태: 스타트업

#### 주식회사 드림시스

- 직급/직무: 소프트웨어 개발자
- 기간: 2025.03 ~ 2025.10
- 근무 기간: 7개월

#### 이치라이프

- 직급/직무: 소프트웨어 개발자
- 기간: 2021.09 ~ 2022.09
- 근무 기간: 1년
- 회사 형태: 스타트업

---

### 4. Education & Training (교육 및 프로그램)

#### OSSCA (오픈소스 컨트리뷰션 아카데미)

- 역할: 멘티
- 기간: 2025.07 ~ 2025.11
- 상태: 수료

#### SK Hy-five

- 기간: 2025.02 ~ 2025.03
- 상태: 수료

#### 42서울

- 기간: 2023.02 ~ 2024.12
- 상태: 수료
- 설명: 혁신적인 소프트웨어 교육 프로그램

---

### 5. Certifications (자격증)

**보유 자격증:**

- 정보처리기사
- SQLD (SQL 개발자)
- 네트워크관리사 2급
- TOPCIT 수준 4 (문제해결형)

---

### 6. Skills (기술 스택)

**카테고리별로 구분하여 시각화 (배지 또는 태그 형태):**

**Backend**

- Java
- Spring Boot
- Spring Data JPA
- MyBatis
- Python
- Django REST Framework

**Database**

- MariaDB
- Redis

**DevOps**

- Docker
- Docker Compose
- GitHub Actions
- AWS

**Version Control**

- Git
- SVN

**Others**

- Linux

---

### 7. Algorithm (알고리즘 역량)

**백준 온라인 저지**

- 티어: Platinum 5
- 해결 문제 수: 267문제
- 프로필 링크: https://solved.ac/profile/tjdtna01

---

## 기술 구현 요구사항

### 필수 기능

1. **반응형 디자인**: 모바일, 태블릿, 데스크톱 대응
2. **부드러운 애니메이션**: 스크롤 시 섹션별 페이드인 효과
3. **아이콘**: React Icons 라이브러리 활용
4. **링크**: 모든 외부 링크는 새 탭에서 열기 (target="\_blank")

### 불필요한 기능

- SEO 최적화 (제외)
- PDF 다운로드 버튼 (제외)

### 접근성

- 시맨틱 HTML 사용
- 키보드 네비게이션 지원

---

## 프로젝트 구조 제안

```
/
├── public/
│   └── (favicon, 이미지 등)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Training.jsx
│   │   ├── Certifications.jsx
│   │   ├── Skills.jsx
│   │   └── Algorithm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## GitHub Pages 배포 설정

### vite.config.js 설정 필요

```javascript
export default {
  base: "/Document/", // GitHub 저장소 이름
};
```

### package.json scripts 추가

```json
{
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

---

## AI에게 요청할 최종 프롬프트

"위 문서의 내용을 바탕으로 React + Vite를 사용한 GitHub Pages용 개발자 이력서 웹사이트를 제작해주세요.

**기술 스택:**

- React + Vite
- Tailwind CSS
- React Icons
- Framer Motion (애니메이션, 선택 사항)

**요구사항:**

- 반응형 디자인, 미니멀하고 전문적인 스타일
- 섹션: Header, Education, Work Experience, Education & Training, Certifications, Skills, Algorithm
- 부드러운 스크롤 애니메이션
- GitHub Pages 배포 설정 포함 (vite.config.js, package.json)
- 컴포넌트별로 파일 분리
- SEO 최적화 및 PDF 다운로드 기능은 제외

**배포:**

- GitHub Pages 호스팅
- gh-pages 패키지를 사용한 자동 배포 스크립트 포함
