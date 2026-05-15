// src/components/ServicesPage.tsx
// Only the EdTech "EXPLORE NOW" button triggers navigation.
// The other two (Software, Marketing) still use href="#" as before.

interface ServicesPageProps {
  onExploreEdTech: () => void
  onExploreSoftware: () => void
}

export default function ServicesPage({ onExploreEdTech, onExploreSoftware }: ServicesPageProps) {
  return (
    <section id="services" className="services-section">

      {/* ── Section header ────────────────────────────── */}
      <div className="services-header">
        <div className="services-eyebrow">
          <span className="eyebrow-dot" />
          <span>WHAT WE DO</span>
          <div className="eyebrow-line" />
        </div>
        <h2 className="services-title">
          OUR <span className="services-title--accent">SERVICES</span>
        </h2>
        <p className="services-subtitle">
          Three focused verticals — one unified vision. Forwex delivers expertise across
          education, engineering, and growth to help you build what's next.
        </p>
      </div>

      {/* ── Cards grid ────────────────────────────────── */}
      <div className="services-grid">

        {/* ── EdTech card ─────────────────────────────── */}
        <div className="service-card service-card--edtech">
          <div className="service-card__icon">
            {/* briefcase icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>

          <p className="service-card__tag">LEARN · BUILD · GROW</p>
          <h3 className="service-card__title">EDTECH</h3>
          <p className="service-card__subtitle">Education Reimagined for the Digital Age</p>
          <p className="service-card__desc">
            From beginner bootcamps to advanced certification paths, our EdTech platform
            bridges the gap between theory and industry-ready skills — powered by real
            mentors and live projects.
          </p>

          <ul className="service-card__list">
            <li>Live Mentorship</li>
            <li>Certification Courses</li>
            <li>Project-Based Learning</li>
          </ul>

          {/* ↓ This button navigates to the EdTech page */}
          <button
            className="service-card__btn service-card__btn--edtech"
            onClick={onExploreEdTech}
          >
            EXPLORE NOW
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Software card ────────────────────────────── */}
        <div className="service-card service-card--software">
          <div className="service-card__icon">
            {/* monitor icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>

          <p className="service-card__tag">DESIGN · DEVELOP · DEPLOY</p>
          <h3 className="service-card__title">SOFTWARE</h3>
          <p className="service-card__subtitle">End-to-End Software Solutions That Scale</p>
          <p className="service-card__desc">
            We architect and build enterprise-grade applications — web, mobile, and
            cloud-native — with a relentless focus on performance, security, and
            seamless user experience.
          </p>

          <ul className="service-card__list">
            <li>Web &amp; Mobile Apps</li>
            <li>Cloud Architecture</li>
            <li>API Integration</li>
          </ul>

          {/* ↓ This button navigates to the Software page */}
          <button
            className="service-card__btn service-card__btn--software"
            onClick={onExploreSoftware}
          >
            EXPLORE NOW
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Marketing card ───────────────────────────── */}
        <div className="service-card service-card--marketing">
          <div className="service-card__icon">
            {/* trending-up icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>

          <p className="service-card__tag">REACH · ENGAGE · CONVERT</p>
          <h3 className="service-card__title">MARKETING</h3>
          <p className="service-card__subtitle">Data-Driven Campaigns That Move Markets</p>
          <p className="service-card__desc">
            Our performance marketing team blends creative strategy with precision
            analytics — crafting campaigns across SEO, social, and paid channels that
            turn audiences into advocates.
          </p>

          <ul className="service-card__list">
            <li>SEO &amp; Content</li>
            <li>Performance Ads</li>
            <li>Brand Strategy</li>
          </ul>

          <a href="#" className="service-card__btn service-card__btn--marketing">
            EXPLORE NOW
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
