import { HiOutlineMail, HiOutlinePhone, HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaPen } from 'react-icons/fa'

const contacts = [
  { icon: <HiOutlineMail className="w-4 h-4" />, label: 'tjdtna01@naver.com', href: 'mailto:tjdtna01@naver.com' },
  { icon: <HiOutlinePhone className="w-4 h-4" />, label: '010-3717-7612', href: 'tel:010-3717-7612' },
  { icon: <FaPen className="w-3.5 h-3.5" />, label: '블로그', href: 'https://velog.io/@tjdtna01' },
  { icon: <FaGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/AhnJoonSung' },
]

const careers = [
  { company: '주식회사 대모산개발단', role: 'PM 및 백엔드 리드 개발자', period: '2025.10 ~ 현재', tag: '재직중', highlight: true },
  { company: '주식회사 드림시스', role: '백엔드 개발자', period: '2025.03 ~ 2025.10', tag: '7개월' },
  { company: '이치라이프', role: '백엔드 개발자', period: '2021.09 ~ 2022.09', tag: '1년' },
]

const educations = [
  { name: 'OSSCA (오픈소스 컨트리뷰션 아카데미)', desc: '멘티', period: '2025.07 ~ 2025.11', status: '수료' },
  { name: 'SK Hy-five', period: '2025.02 ~ 2025.03', status: '수료' },
  { name: '42서울', desc: '해외 커리큘럼 기반 프로그래머 양성 프로그램', period: '2023.02 ~ 2025.01', status: '수료' },
]

const skills = [
  { category: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'Django REST Framework'] },
  { category: 'Database', items: ['MariaDB', 'Redis'] },
  { category: 'DevOps', items: ['Docker', 'Docker Compose', 'AWS EC2', 'AWS RDS'] },
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

function TimelineItem({ title, subtitle, period, tag, highlight, isLast }) {
  return (
    <div className={`grid grid-cols-[140px_1fr] gap-6 ${isLast ? '' : 'mb-6'}`}>
      <div className="text-right">
        <span className="text-sm text-neutral-400 leading-7">{period}</span>
      </div>
      <div className="border-l-2 border-neutral-200 pl-6 relative">
        <div className={`absolute -left-[5px] top-2 w-2 h-2 rounded-full ring-2 ring-white ${highlight ? 'bg-neutral-900' : 'bg-neutral-300'}`} />
        <h3 className="text-base font-semibold text-neutral-900 leading-7">{title}</h3>
        {subtitle && <p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>}
        {tag && (
          <span className={`inline-block text-xs mt-2 px-2.5 py-0.5 rounded font-medium ${
            highlight ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500'
          }`}>
            {tag}
          </span>
        )}
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
        {/* 기술 스택 — 헤더 바로 아래 */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60 mb-10 -mt-8 relative z-10">
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

        {/* 경력 */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200/60 mb-10">
          <SectionTitle>Experience</SectionTitle>
          {careers.map((c, i) => (
            <TimelineItem
              key={c.company}
              title={c.company}
              subtitle={c.role}
              period={c.period}
              tag={c.tag}
              highlight={c.highlight}
              isLast={i === careers.length - 1}
            />
          ))}
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
