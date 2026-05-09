import { useState, useEffect } from 'react'
// import './App.css'
// // ⬇ Place the Forwex logo PNG at src/assets/forwex-logo.png
// import forwexLogo from './assets/forwex-logo.png'
import './App.css'
import forwexLogo from './assets/forwex-logo.png'
import { useMouseParallax } from './hooks/useMouseParallax'

const NAV_LINKS = ['Home', 'Services', 'Courses', 'Community', 'Blog', 'Contact Us']

/* ---------------------------------------------------------- */
/*  NAVBAR                                                      */
/* ---------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize ≥ 768 px
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo" aria-label="Forwex Technologies">
            <img src={forwexLogo} alt="Forwex Technologies" />
          </a>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
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

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
      )}
    </>
  )
}

/* ---------------------------------------------------------- */
/*  HERO VISUAL — animated rings / orb / particles             */
/* ---------------------------------------------------------- */
const PARTICLE_POSITIONS: { top: string; left: string }[] = [
  { top: '10%', left: '62%' },
  { top: '22%', left: '82%' },
  { top: '75%', left: '18%' },
  { top: '82%', left: '72%' },
  { top: '52%', left: '92%' },
  { top: '14%', left: '24%' },
]

const TECH_LINES: { angle: number; length: string }[] = [
  { angle: 30,  length: '38%' },
  { angle: 110, length: '42%' },
  { angle: 200, length: '35%' },
  { angle: 290, length: '40%' },
]

// function HeroVisual() {
//   return (
//     <div className="hero-visual" aria-hidden="true">
//       {/* Hex grid texture */}
//       <div className="visual-hex" />

//       {/* Rings */}
//       <div className="ring ring-1" />
//       <div className="ring ring-2" />
//       <div className="ring ring-3" />

//       {/* Tech lines */}
//       {TECH_LINES.map(({ angle, length }) => (
//         <div
//           key={angle}
//           className="tech-line"
//           style={{
//             width: length,
//             transform: `rotate(${angle}deg)`,
//             marginTop: '-0.5px',
//           }}
//         />
//       ))}

//       {/* Central orb */}
//       {/* <div className="center-orb" /> */}
//       {/* Central logo — replaces orb */}
//       <img
//         src={forwexLogo}
//         alt="Forwex Technologies"
//         className="center-logo"
//       />

//       {/* Floating particles */}
//       {PARTICLE_POSITIONS.map((pos, i) => (
//         <div
//           key={i}
//           className="particle"
//           style={{
//             top: pos.top,
//             left: pos.left,
//             animationDuration: `${4.5 + i * 0.4}s`,
//             animationDelay: `${i * 0.35}s`,
//           }}
//         />
//       ))}
//     </div>
//   )
// }
/* ---------------------------------------------------------- */
/*  HERO VISUAL — 3-ring reactor with hologram logo           */
/* ---------------------------------------------------------- */

// Orbital dots: [ringClass, dotCount, orbitPercent]
const ORBITAL_RINGS = [
  { cls: 'ring-1', dots: 2, size: '68%' },
  { cls: 'ring-2', dots: 3, size: '84%' },
  { cls: 'ring-3', dots: 1, size: '100%' },
]

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Hex grid texture layer */}
      <div className="visual-hex" />

      {/* Depth glow behind everything */}
      <div className="reactor-glow" />

      {/* Rings — each has its own orbital dot(s) via CSS */}
      <div className="ring ring-1">
        <span className="orbit-dot orbit-dot--a" />
      </div>
      <div className="ring ring-2">
        <span className="orbit-dot orbit-dot--b" />
        <span className="orbit-dot orbit-dot--c" />
      </div>
      <div className="ring ring-3">
        <span className="orbit-dot orbit-dot--d" />
      </div>

      {/* Tech lines from center */}
      {[30, 110, 200, 290].map(angle => (
        <div
          key={angle}
          className="tech-line"
          style={{ width: '38%', transform: `rotate(${angle}deg)` }}
        />
      ))}

      {/* Center hologram logo — replaces orb */}
      <div className="logo-holo-wrap">
        <div className="logo-holo-glow" />
        <img
          src={forwexLogo}
          alt="Forwex Technologies"
          className="logo-holo-img"
          draggable={false}
        />
        {/* Scanline shimmer overlay */}
        <div className="logo-holo-scan" />
      </div>

      {/* Floating ambient particles */}
      {[
        { top: '10%', left: '62%', dur: '5.2s', delay: '0s'    },
        { top: '22%', left: '82%', dur: '4.8s', delay: '0.5s'  },
        { top: '75%', left: '18%', dur: '6.1s', delay: '1s'    },
        { top: '82%', left: '72%', dur: '4.4s', delay: '1.5s'  },
        { top: '52%', left: '92%', dur: '5.7s', delay: '0.8s'  },
        { top: '14%', left: '24%', dur: '6.3s', delay: '0.3s'  },
      ].map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

/* ---------------------------------------------------------- */
/*  STATS ROW                                                   */
/* ---------------------------------------------------------- */
const STATS = [
  { value: '500+',  label: 'Projects Deployed' },
  { value: '10K+',  label: 'Students Trained'  },
  { value: '99.9%', label: 'Uptime Guarantee'  },
  { value: '50+',   label: 'Expert Engineers'  },
]

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
/*  APP                                                         */
/* ---------------------------------------------------------- */
function App() {
  return (
    <div className="app">
      {/* Background layers */}
      {/* <div className="bg-hex-grid" aria-hidden="true" /> */}
      {/* Background layers — parallax grid */}
      <ParallaxGrid />
      <div className="bg-radial"   aria-hidden="true" />
      <div className="scan-line"   aria-hidden="true" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <main className="hero-section">
        <div className="hero-layout">

          {/* Left — copy */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span>EdTech · Software · Gaming</span>
            </div>

            {/* <h1 className="hero-title">
              <span className="hero-title__top">BUILD THE</span>
              <span className="hero-title__highlight">FUTURE</span>
              <span className="hero-title__bottom">WITH US</span>
            </h1> */}
            <h1 className="hero-title">
              <span className="hero-title__top">BUILD THE</span>
              <span className="hero-title__highlight">FUTURE</span>
              <span className="hero-title__bottom">WITH US</span>
            </h1>

            <p className="hero-subtitle">
              Engineering tomorrow's digital landscape through precision, innovation,
              and cinematic experiences — from classroom to codebase to console.
            </p>

            <a href="#" className="btn-get-started">
              <span>Get Started</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Meta hints */}
            <div className="hero-meta">
              <span className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Enterprise-grade security
              </span>
              <span className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                24 / 7 support
              </span>
              <span className="hero-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Real-time analytics
              </span>
            </div>
          </div>

          {/* Right — visual */}
          <HeroVisual />
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
