// src/components/SoftwarePage.tsx
// Exact same structure & CSS classes as EdTechPage.tsx.
// Only DATA and copy are Software-specific (Websites, App Dev, Robotics, Game Design).
import { useState, useEffect } from 'react'
import forwexLogo from '../assets/forwex-logo.png'
import { useMouseParallax } from '../hooks/useMouseParallax'

/* ---------------------------------------------------------- */
/*  TYPES                                                       */
/* ---------------------------------------------------------- */
interface SoftwarePageProps {
  onBack: () => void
}

/* ---------------------------------------------------------- */
/*  DATA                                                        */
/* ---------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home',       href: '#'         },
  { label: 'Services',   href: '#services' },
  { label: 'Courses',    href: '#'         },
  { label: 'Community',  href: '#'         },
  { label: 'Blog',       href: '#'         },
  { label: 'Contact Us', href: '#'         },
]

const COURSES = [
  {
    id: 1,
    tag: 'WEBSITES',
    title: 'Responsive Web Development',
    subtitle: 'HTML · CSS · JavaScript · React',
    desc: 'Build fast, beautiful, fully responsive websites from scratch — mastering layout, animations, and modern JS frameworks.',
    duration: '14 Weeks',
    level: 'Beginner → Advanced',
    students: '3,100+',
    badge: 'BESTSELLER',
    badgeColor: '#00d4ff',
    icon: '🌐',
    accentColor: '#00d4ff',
  },
  {
    id: 2,
    tag: 'APP DEV',
    title: 'Mobile App Development',
    subtitle: 'iOS · Android · React Native · Expo',
    desc: 'Ship polished apps to both app stores from a single codebase. Covers UI design, state management, APIs, and Firebase.',
    duration: '16 Weeks',
    level: 'Intermediate',
    students: '1,900+',
    badge: 'HOT',
    badgeColor: '#ff6b35',
    icon: '📱',
    accentColor: '#0070e0',
  },
  {
    id: 3,
    tag: 'ROBOTICS',
    title: 'Robotics & Embedded Systems',
    subtitle: 'Arduino · Raspberry Pi · Hardware + Software',
    desc: 'Combine hardware and software to build intelligent machines. Real sensors, actuators, and control systems built from scratch.',
    duration: '12 Weeks',
    level: 'Intermediate → Expert',
    students: '640+',
    badge: 'NEW',
    badgeColor: '#7c3aed',
    icon: '🤖',
    accentColor: '#00d4ff',
  },
  {
    id: 4,
    tag: 'GAME DESIGN',
    title: 'Game Design & Development',
    subtitle: 'Unity · Unreal · C# · 3D Modeling',
    desc: 'Design and ship your own games from concept to playable build — game mechanics, level design, physics, and publishing.',
    duration: '18 Weeks',
    level: 'Beginner → Intermediate',
    students: '1,050+',
    badge: 'TRENDING',
    badgeColor: '#00d4ff',
    icon: '🎮',
    accentColor: '#0070e0',
  },
  {
    id: 5,
    tag: 'CLOUD & DEVOPS',
    title: 'Cloud Architecture & DevOps',
    subtitle: 'AWS · Docker · Kubernetes · CI/CD',
    desc: 'Deploy at scale. Automate pipelines, containerize workloads, and manage infra the way senior engineers do it.',
    duration: '12 Weeks',
    level: 'Intermediate → Expert',
    students: '870+',
    badge: null,
    badgeColor: '',
    icon: '☁️',
    accentColor: '#00d4ff',
  },
  {
    id: 6,
    tag: 'CYBERSECURITY',
    title: 'Ethical Hacking & Cybersecurity',
    subtitle: 'Pentesting · OWASP · SOC · Forensics',
    desc: 'Think like an attacker, defend like a pro. Hands-on CTF labs, pen testing, and live incident response simulations.',
    duration: '14 Weeks',
    level: 'Intermediate',
    students: '730+',
    badge: null,
    badgeColor: '',
    icon: '🔐',
    accentColor: '#0070e0',
  },
]

const WORKSHOPS = [
  { title: 'Build a Portfolio Website in a Day',   duration: '6hr', icon: '🌐', seats: '38 seats left' },
  { title: 'Publish Your First App to Play Store', duration: '5hr', icon: '📱', seats: '22 seats left' },
  { title: 'Line-Following Robot Sprint',           duration: '4hr', icon: '🤖', seats: '14 seats left' },
  { title: '2D Platformer Game Jam',                duration: '8hr', icon: '🎮', seats: '30 seats left' },
]

const HERO_STATS = [
  { value: '500+',  label: 'Projects Shipped'    },
  { value: '98%',   label: 'Client Satisfaction' },
  { value: '50+',   label: 'Expert Engineers'    },
  { value: '4',     label: 'Specialised Tracks'  },
]

const HOW_IT_WORKS = [
  { num: '01', title: 'Pick Your Track',       desc: 'Choose Websites, App Dev, Robotics, or Game Design — or stack multiple tracks for a full skill set.' },
  { num: '02', title: 'Build with Engineers',  desc: 'Pair-program with real engineers. Code reviews, architecture calls, and daily standups on live projects.' },
  { num: '03', title: 'Ship to Production',    desc: 'Every learner deploys at least one real product — real users, real infra, real experience on your CV.' },
  { num: '04', title: 'Get Certified & Hired', desc: 'Walk away with an industry certification plus direct introductions to our hiring partner network.' },
]

/* ---------------------------------------------------------- */
/*  NAVBAR — identical to EdTechPage Navbar                    */
/* ---------------------------------------------------------- */
function Navbar({ onBack }: { onBack: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <a
            href="#"
            className="navbar__logo"
            aria-label="Forwex Technologies"
            onClick={(e) => { e.preventDefault(); onBack() }}
          >
            <img src={forwexLogo} alt="Forwex Technologies" />
          </a>

          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                {label === 'Home'
                  ? <a href={href} onClick={(e) => { e.preventDefault(); onBack() }}>{label}</a>
                  : <a href={href}>{label}</a>
                }
              </li>
            ))}
          </ul>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            label === 'Home'
              ? <a key={label} href={href} onClick={(e) => { e.preventDefault(); onBack(); setMenuOpen(false) }}>{label}</a>
              : <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </>
  )
}

/* ---------------------------------------------------------- */
/*  HERO — mirrors EdTechHero exactly                          */
/* ---------------------------------------------------------- */
function SoftwareHero({ onBack }: { onBack: () => void }) {
  return (
    <section className="et-hero">
      {/* Back breadcrumb — same as EdTech */}
      <button className="et-back-btn" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to Services
      </button>

      {/* Eyebrow */}
      <div className="et-eyebrow">
        <span className="badge-dot" />
        <span>Software · Courses &amp; Programs</span>
        <div className="et-eyebrow__line" />
      </div>

      {/* Title */}
      <h1 className="et-hero__title">
        <span className="et-hero__title--white">BUILD THE FUTURE —</span>
        <br />
        <span className="et-hero__title--cyan">ONE LINE OF CODE</span>
        <br />
        <span className="et-hero__title--white">AT A TIME</span>
      </h1>

      <p className="et-hero__subtitle">
        From responsive websites to mobile apps, robotics systems to immersive games —
        Forwex Software trains you to ship real products alongside real engineers.
      </p>

      {/* Stats row — exact same markup as EdTech hero */}
      <div className="hero-stats et-hero__stats">
        {HERO_STATS.map(({ value, label }) => (
          <div key={label} className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- */
/*  COURSES GRID — mirrors CoursesGrid exactly                 */
/* ---------------------------------------------------------- */
function CoursesGrid() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Beginner', 'Intermediate', 'Expert']

  const visible = filter === 'All'
    ? COURSES
    : COURSES.filter(c => c.level.includes(filter))

  return (
    <section className="et-section">
      {/* Header row */}
      <div className="et-section__header">
        <div>
          <div className="et-eyebrow">
            <span className="badge-dot" />
            <span>What We Offer</span>
          </div>
          <h2 className="et-section__title">
            OUR <span className="et-section__title--cyan">COURSES</span>
          </h2>
        </div>
        {/* Filter buttons */}
        <div className="et-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`et-filter-btn${filter === f ? ' et-filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="et-courses-grid">
        {visible.map((course, i) => (
          <div
            key={course.id}
            className="et-course-card"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {/* Corner glow */}
            <div
              className="et-course-card__glow"
              style={{ background: `radial-gradient(circle at 0% 0%, ${course.accentColor}18, transparent 70%)` }}
            />

            {/* Top row: icon + badge */}
            <div className="et-course-card__top">
              <div className="et-course-card__icon-wrap">{course.icon}</div>
              {course.badge && (
                <span
                  className="et-course-card__badge"
                  style={{ color: course.badgeColor, borderColor: `${course.badgeColor}55`, background: `${course.badgeColor}12` }}
                >
                  {course.badge}
                </span>
              )}
            </div>

            {/* Tag */}
            <p className="et-course-card__tag" style={{ color: course.accentColor }}>{course.tag}</p>

            {/* Title + subtitle */}
            <div>
              <h3 className="et-course-card__title">{course.title}</h3>
              <p className="et-course-card__subtitle">{course.subtitle}</p>
            </div>

            {/* Description */}
            <p className="et-course-card__desc">{course.desc}</p>

            {/* Meta */}
            <div className="et-course-card__meta">
              <span>⏱ {course.duration}</span>
              <span>📶 {course.level}</span>
              <span>👥 {course.students}</span>
            </div>

            <div className="et-course-card__divider" />

            {/* CTA */}
            <button className="et-enroll-btn">
              Enroll Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- */
/*  HOW IT WORKS — mirrors EdTech HowItWorks exactly          */
/* ---------------------------------------------------------- */
function HowItWorks() {
  return (
    <section className="et-how-section">
      <div className="et-how-section__inner">
        <div className="et-how-section__header">
          <p className="et-how-section__eyebrow">YOUR JOURNEY</p>
          <h2 className="et-section__title">
            HOW IT <span className="et-section__title--cyan">WORKS</span>
          </h2>
        </div>
        <div className="et-steps-grid">
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.num} className="et-step-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="et-step-card__num">{s.num}</div>
              <h3 className="et-step-card__title">{s.title}</h3>
              <p className="et-step-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- */
/*  BUILD SESSIONS — mirrors Workshops exactly                 */
/* ---------------------------------------------------------- */
function Workshops() {
  return (
    <section className="et-section">
      <div className="et-section__header" style={{ marginBottom: '2rem' }}>
        <div>
          <div className="et-eyebrow">
            <span className="badge-dot" />
            <span>Hands-On Sessions</span>
          </div>
          <h2 className="et-section__title">
            UPCOMING <span className="et-section__title--cyan">BUILD SESSIONS</span>
          </h2>
        </div>
        <div className="et-section__line" />
      </div>
      <div className="et-workshops-grid">
        {WORKSHOPS.map((w, i) => (
          <div key={w.title} className="et-workshop-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="et-workshop-card__icon">{w.icon}</div>
            <div className="et-workshop-card__title">{w.title}</div>
            <div className="et-workshop-card__meta">
              <span className="et-workshop-card__duration">{w.duration}</span>
              <span className="et-workshop-card__seats">{w.seats}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- */
/*  CTA BANNER — mirrors EdTech CtaBanner exactly             */
/* ---------------------------------------------------------- */
function CtaBanner() {
  return (
    <section className="et-cta-section">
      <div className="et-cta-card">
        <div className="et-cta-card__glow" />
        <p className="et-cta-card__eyebrow">LIMITED COHORT SEATS</p>
        <h2 className="et-cta-card__title">
          READY TO SHIP<br />
          <span className="et-section__title--cyan">YOUR FIRST PRODUCT?</span>
        </h2>
        <p className="et-cta-card__desc">
          Next cohort kicks off soon. Build real software with real engineers,
          deploy to production, and land your first developer role.
        </p>
        <button className="btn-get-started et-cta-card__btn">
          <span>Apply for Next Cohort</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- */
/*  BACKGROUND — identical to EdTechPage                       */
/* ---------------------------------------------------------- */
function ParallaxGrid() {
  const ref = useMouseParallax()
  return (
    <div
      ref={ref}
      className="bg-hex-grid"
      aria-hidden="true"
      style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
    />
  )
}

/* ---------------------------------------------------------- */
/*  SOFTWARE PAGE ROOT — mirrors EdTechPage root exactly      */
/* ---------------------------------------------------------- */
export default function SoftwarePage({ onBack }: SoftwarePageProps) {
  return (
    <div className="app">
      {/* Exact same background layers as home & EdTech */}
      <ParallaxGrid />
      <div className="bg-radial"  aria-hidden="true" />
      <div className="scan-line"  aria-hidden="true" />

      {/* Navbar — Home link calls onBack */}
      <Navbar onBack={onBack} />

      <main style={{ position: 'relative', zIndex: 2 }}>
        <SoftwareHero onBack={onBack} />
        <CoursesGrid />
        <HowItWorks />
        <Workshops />
        <CtaBanner />
      </main>

      <footer className="et-footer">
        © 2025 FORWEX TECHNOLOGIES · EDTECH · SOFTWARE · MARKETING
      </footer>
    </div>
  )
}
