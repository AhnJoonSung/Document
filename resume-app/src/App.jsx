import { HiOutlineMail, HiOutlinePhone, HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaPen } from 'react-icons/fa'

const contacts = [
  { icon: <HiOutlineMail className="w-4 h-4" />, label: 'tjdtna01@naver.com', href: 'mailto:tjdtna01@naver.com' },
  { icon: <HiOutlinePhone className="w-4 h-4" />, label: '010-3717-7612', href: 'tel:010-3717-7612' },
  { icon: <FaPen className="w-3.5 h-3.5" />, label: '블로그', href: 'https://velog.io/@tjdtna01' },
  { icon: <FaGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/AhnJoonSung' },
]

const careers = [
  {
    company: '주식회사 조코딩AX파트너스',
    role: '교육운영팀장',
    period: '2026.05 ~ 현재',
    tag: '재직중',
    highlight: true,
    note: '대모산개발단 영업양수로 승계 · 근속 2025.10 ~ 연속',
    projects: [
      {
        name: '기업 대상 AI · 바이브코딩 교육 운영',
        desc: '고객사별 교육 커리큘럼 설계, 강사 섭외 및 사전 온보딩, 견적·계약, 회차 운영을 총괄',
      },
      {
        name: '교육 운영 업무 자동화',
        desc: 'AI 에이전트 기반 업무 관리 체계를 직접 구축해 일정·산출물·강사 배정 등 반복 운영 업무를 자동화',
        stack: ['Claude Code', 'MCP', 'Python'],
      },
    ],
  },
  {
    company: '주식회사 대모산개발단',
    role: 'PM 및 풀스택 개발자',
    period: '2025.10 ~ 2026.04',
    tag: '6개월',
    projects: [
      {
        name: 'PBR — 쇼핑몰 상품관리 자동화',
        desc: '지그재그·쿠팡 입점 판매자의 상품 등록 업무를 자동화하는 웹 서비스. LLM 기반 검색 키워드 추출기(대형·공략·선점 3분류)와 상품 상세 정보 생성기, 쿠팡 상품 등록 연동, 사용자 승인 및 기능별 권한 체계, 결과 대시보드를 설계·구현하고 배포 파이프라인을 구축',
        stack: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Spring Security', 'Anthropic / OpenAI API', 'AWS S3 · EC2', 'Docker', 'GitHub Actions'],
      },
      {
        name: '급진적과부하 식단앱 — 식단 관리 서비스 추가 개발',
        desc: '식사 기록과 영양소 분석 기반 식단 관리 앱의 기능 고도화. 음식 검색 Elasticsearch 색인, 구독·결제 연동, 목표 설정 및 체중·통계 API를 담당',
        stack: ['Django REST Framework', 'PostgreSQL', 'Elasticsearch', 'Celery', 'Redis', 'Next.js', 'TypeScript'],
      },
      {
        name: 'travelmoving — AI 여행 일정 관리 앱',
        desc: '여행 일정을 계획·관리하는 모바일 서비스의 백엔드. 일정·경로·항공권 도메인 설계, Google·Apple 소셜 로그인과 JWT 인증, FCM 푸시 알림 및 리마인더, 장소·숙소·다국어 도시 데이터 API를 구현하고 AWS ECS 배포 환경을 구성',
        stack: ['Spring Boot', 'Spring Data JPA', 'QueryDSL', 'PostgreSQL', 'Spring Security', 'OAuth 2.0', 'FCM', 'AWS ECS · ECR · S3'],
      },
    ],
  },
  {
    company: '주식회사 드림시스',
    role: '백엔드 개발자',
    period: '2025.03 ~ 2025.10',
    tag: '7개월',
    projects: [
      {
        name: '카이스트 나노종합기술원 — File Browsing System (FBS)',
        desc: '반도체 공정 장비의 대용량 파일을 외부 서버로 전송하고 수집된 메타데이터를 웹에서 관리하는 시스템. 비동기 Webhook 전송 구조 설계, 체크섬 기반 무결성 검증 및 재시도·보상 로직, 전역 예외 처리·로깅 체계, 대용량 조회 페이지네이션을 구현',
        stack: ['Spring Boot', 'MyBatis', 'MariaDB', 'JSch', 'Next.js', 'JUnit'],
      },
      {
        name: '삼성전자 온양사업장 — 장비 데이터 수집·전송 프로그램',
        desc: '제조사별로 포맷이 다른 반도체 장비 데이터를 표준 형식으로 파싱해 전송하는 수집 프로그램. 설정만으로 신규 포맷을 추가할 수 있는 파서 구조 설계, 이벤트 기반 수집 파이프라인 구축, 설치 패키징 및 배포 자동화를 담당',
        stack: ['Spring Boot', 'Spring Integration', 'NSIS', 'Gradle'],
      },
    ],
  },
]

const educations = [
  { name: 'OSSCA (오픈소스 컨트리뷰션 아카데미)', desc: '멘티', period: '2025.07 ~ 2025.11', status: '수료' },
  { name: 'SK Hy-five', period: '2025.02 ~ 2025.03', status: '수료' },
  { name: '42서울', desc: '해외 커리큘럼 기반 프로그래머 양성 프로그램', period: '2023.02 ~ 2025.01', status: '수료' },
]

const skills = [
  { category: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'QueryDSL', 'Django REST Framework'] },
  { category: 'Database', items: ['PostgreSQL', 'MariaDB', 'Redis', 'Elasticsearch'] },
  { category: 'DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS EC2', 'AWS RDS', 'AWS ECS'] },
  { category: 'Frontend', items: ['Next.js'] },
  { category: 'Others', items: ['Git', 'Linux', 'Jira'] },
]

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-neutral-900">
        {children}
      </h2>
      <div className="flex-1 h-px bg-neutral-200" />
    </div>
  )
}

function ProjectList({ projects }) {
  return (
    <ul className="mt-5 space-y-4">
      {projects.map((p) => (
        <li key={p.name} className="relative pl-4">
          <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-neutral-300" />
          <h4 className="text-sm font-semibold text-neutral-800 leading-6">{p.name}</h4>
          <p className="text-sm text-neutral-500 leading-6 mt-1 break-keep">{p.desc}</p>
          {p.stack && (
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {p.stack.map((s) => (
                <span key={s} className="px-2 py-0.5 bg-neutral-50 border border-neutral-200 rounded text-xs text-neutral-500">
                  {s}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ title, subtitle, period, tag, note, highlight, isLast, projects }) {
  return (
    <div className={`grid grid-cols-[140px_1fr] gap-6 ${isLast ? '' : 'mb-6'}`}>
      <div className="text-right">
        <span className="text-sm text-neutral-400 leading-7">{period}</span>
      </div>
      <div className={`border-l-2 border-neutral-200 pl-6 relative ${projects ? 'pb-2' : ''}`}>
        <div className={`absolute -left-[5px] top-2 w-2 h-2 rounded-full ring-2 ring-white ${highlight ? 'bg-neutral-900' : 'bg-neutral-300'}`} />
        <h3 className="text-base font-semibold text-neutral-900 leading-7">{title}</h3>
        {subtitle && <p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>}
        {note && <p className="text-xs text-neutral-400 mt-1">{note}</p>}
        {tag && (
          <span className={`inline-block text-xs mt-2 px-2.5 py-0.5 rounded font-medium ${
            highlight ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500'
          }`}>
            {tag}
          </span>
        )}
        {projects && <ProjectList projects={projects} />}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* Header */}
      <header className="bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto px-8 pt-20 pb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">Resume</p>
          <h1 className="text-4xl font-bold tracking-tight">안준성</h1>
          <p className="text-lg text-neutral-400 mt-2 font-medium">PM & Backend Developer</p>
          <div className="w-12 h-0.5 bg-white/30 mt-6 mb-6" />
          <p className="text-sm text-neutral-300 leading-relaxed max-w-lg">
            백엔드 개발을 기반으로, 풀스택, 프로젝트 관리로 역할을 넓혀가고 있습니다. <br />
            최근에는 AI 툴을 활용한 업무 효율화에 관심을 가지고 있습니다.
          </p>
          <div className="flex flex-wrap gap-5 mt-8">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {c.icon}
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-8 py-10">
        {/* 경력 — 헤더 바로 아래 */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60 mb-10 -mt-8 relative z-10">
          <SectionTitle>Experience</SectionTitle>
          {/* 회사 간 간격은 space-y-10이 담당 — isLast로 항목 자체 margin은 끈다 */}
          <div className="space-y-10">
            {careers.map((c) => (
              <TimelineItem
                key={c.company}
                title={c.company}
                subtitle={c.role}
                period={c.period}
                tag={c.tag}
                note={c.note}
                highlight={c.highlight}
                projects={c.projects}
                isLast
              />
            ))}
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60 mb-10">
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.category} className="flex items-start gap-4">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider w-20 shrink-0 pt-1.5">{s.category}</span>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-md text-sm text-neutral-700 font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 학력 */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60 mb-10">
          <SectionTitle>Education</SectionTitle>
          <TimelineItem
            title="국립금오공과대학교"
            subtitle="컴퓨터소프트웨어공학과 (학사)"
            period="2015.03 ~ 2021.02"
            isLast
          />
        </section>

        {/* 교육 및 프로그램 */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60 mb-10">
          <SectionTitle>Programs</SectionTitle>
          {educations.map((e, i) => (
            <TimelineItem
              key={e.name}
              title={e.name}
              subtitle={e.desc}
              period={e.period}
              tag={e.status}
              isLast={i === educations.length - 1}
            />
          ))}
        </section>

        {/* 자격증 & 알고리즘 — 2 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60">
            <SectionTitle>Certifications</SectionTitle>
            <div className="space-y-3">
              {['정보처리기사', 'TOPCIT 수준 4 (문제해결형)'].map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                  <span className="text-sm text-neutral-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60">
            <SectionTitle>Algorithm</SectionTitle>
            <h3 className="text-sm font-semibold text-neutral-900">백준 온라인 저지</h3>
            <p className="text-sm text-neutral-400 mt-1">Platinum 5 · 267문제 해결</p>
            <a
              href="https://solved.ac/profile/tjdtna01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-700 px-4 py-2 rounded-md transition-colors duration-200"
            >
              <HiExternalLink className="w-3.5 h-3.5" />
              프로필 보기
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 py-8">
        <p className="text-center text-xs text-neutral-500 tracking-wide">© 2025 안준성</p>
      </footer>
    </div>
  )
}
