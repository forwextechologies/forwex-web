import { useState } from 'react'
import './ServicesPage.css'

/* ---------------------------------------------------------- */
/*  DATA                                                        */
/* ---------------------------------------------------------- */

const SERVICES = [
  {
    id: 'edtech',
    label: 'EdTech',
    tagline: 'LEARN · BUILD · GROW',
    headline: 'Education Reimagined for the Digital Age',
    description:
      'From beginner bootcamps to advanced certification paths, our EdTech platform bridges the gap between theory and industry-ready skills — powered by real mentors and live projects.',
    features: ['Live Mentorship', 'Certification Courses', 'Project-Based Learning'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 14V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="2" />
        <path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20h36" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    accentVar: '--svc-cyan',
  },
  {
    id: 'software',
    label: 'Software',
    tagline: 'DESIGN · DEVELOP · DEPLOY',
    headline: 'End-to-End Software Solutions That Scale',
    description:
      'We architect and build enterprise-grade applications — web, mobile, and cloud-native — with a relentless focus on performance, security, and seamless user experience.',
    features: ['Web & Mobile Apps', 'Cloud Architecture', 'API Integration'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 40h16M24 36v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22l4 4-4 4M26 30h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentVar: '--svc-blue',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    tagline: 'REACH · ENGAGE · CONVERT',
    headline: 'Data-Driven Campaigns That Move Markets',
    description:
      'Our performance marketing team blends creative strategy with precision analytics — crafting campaigns across SEO, social, and paid channels that turn audiences into advocates.',
    features: ['SEO & Content', 'Performance Ads', 'Brand Strategy'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36L20 24l6 6 8-10 6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M34 14h4M36 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 40h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accentVar: '--svc-violet',
  },
]

/* ---------------------------------------------------------- */
/*  CARD                                                        */
/* ---------------------------------------------------------- */

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`svc-card svc-card--${service.id}${hovered ? ' svc-card--hovered' : ''}`}
      style={{ animationDelay: `${index * 0.13}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div className="svc-card__bar" />

      {/* Corner hex decoration */}
      <div className="svc-card__corner" aria-hidden="true" />

      {/* Icon */}
      <div className="svc-card__icon-wrap">
        <div className="svc-card__icon-ring" />
        <span className="svc-card__icon">{service.icon}</span>
      </div>

      {/* Tag */}
      <p className="svc-card__tag">{service.tagline}</p>

      {/* Label */}
      <h3 className="svc-card__label">{service.label}</h3>

      {/* Headline */}
      <h4 className="svc-card__headline">{service.headline}</h4>

      {/* Description */}
      <p className="svc-card__desc">{service.description}</p>

      {/* Feature pills */}
      <ul className="svc-card__features" role="list">
        {service.features.map(f => (
          <li key={f} className="svc-card__feature">
            <span className="svc-card__feature-dot" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={`#${service.id}`} className="svc-card__cta">
        <span>Explore Now</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  )
}

/* ---------------------------------------------------------- */
/*  SECTION HEADING                                             */
/* ---------------------------------------------------------- */

function SectionHeading() {
  return (
    <div className="svc-heading">
      <div className="svc-heading__eyebrow">
        <span className="svc-heading__dot" />
        <span>What We Do</span>
        <span className="svc-heading__line" />
      </div>
      <h2 className="svc-heading__title">
        Our <span className="svc-heading__highlight">Services</span>
      </h2>
      <p className="svc-heading__sub">
        Three focused verticals — one unified vision. Forwex delivers expertise across education,
        engineering, and growth to help you build what's next.
      </p>
    </div>
  )
}

/* ---------------------------------------------------------- */
/*  SERVICES PAGE                                              */
/* ---------------------------------------------------------- */

export default function ServicesPage() {
  return (
    <section id="services" className="svc-section">
      {/* Background glow blobs */}
      <div className="svc-bg-glow svc-bg-glow--left"  aria-hidden="true" />
      <div className="svc-bg-glow svc-bg-glow--right" aria-hidden="true" />

      <div className="svc-inner">
        <SectionHeading />

        <div className="svc-grid">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
