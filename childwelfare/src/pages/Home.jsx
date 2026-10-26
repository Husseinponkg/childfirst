import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteNavigation, SiteFooter } from './SiteNavigation';
import story1 from '../assets/job.jpeg';
import story2 from '../assets/story2.jpeg';
import story3 from '../assets/story3.jpeg';

/* ============================================================
   Monochrome outline icons — 24x24, stroke="currentColor"
   ============================================================ */
const Icon = {
  Target: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  Eye: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),
  Handshake: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M3 12l3-3 4 4 3-3 3 3 5-5" />
      <path d="M3 12l3 3 4-4 3 3 3-3 5 5" />
    </svg>
  ),
  Book: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
      <path d="M9 8h7" />
    </svg>
  ),
  Health: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M20.5 8.5a4.5 4.5 0 0 0-8-3 4.5 4.5 0 0 0-8 3c0 5 8 10.5 8 10.5s8-5.5 8-10.5Z" />
      <path d="M8.5 12h2l1-2 2 4 1-2h2" />
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M12 3l7 3v5.5c0 5-3.5 8.2-7 9.5-3.5-1.3-7-4.5-7-9.5V6l7-3Z" />
      <path d="M9.2 12.2 11 14l4-4" />
    </svg>
  ),
  Droplet: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />
    </svg>
  ),
  Palette: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M12 3a9 9 0 0 0 0 18c1.4 0 2-1 2-2 0-1.2-1-1.6-1-3 0-1.1.9-2 2-2h2a4 4 0 0 0 4-4 7 7 0 0 0-9-7Z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Family: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <circle cx="8" cy="7" r="2.4" />
      <circle cx="16" cy="7" r="2.4" />
      <path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13a4.5 4.5 0 0 1 4 2.4" />
      <path d="M20.5 20v-2.5A4.5 4.5 0 0 0 16 13a4.5 4.5 0 0 0-3.3 1.4" />
    </svg>
  ),
  Heart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" width="24" height="24" {...p}>
      <path d="M12 20.5S3.5 15 3.5 8.8A4.3 4.3 0 0 1 12 6.5a4.3 4.3 0 0 1 8.5 2.3c0 6.2-8.5 11.7-8.5 11.7Z" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}>
      <path d="M4 12h15" /><path d="M13 6l6 6-6 6" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}>
      <path d="M4 12.5 10 18l10-11" />
    </svg>
  ),
};

/* ============================================================
   Data
   ============================================================ */
const HERO_SLIDES = [
  {
    image: story1,
    title: 'Every Child Deserves a Chance',
    subtitle: 'Together we protect, educate, and empower children across Tanzania',
  },
  {
    image: story2,
    title: 'Breaking the Cycle of Poverty',
    subtitle: 'Providing education, healthcare, and hope to vulnerable children',
  },
  {
    image: story3,
    title: 'Your Support Changes Lives',
    subtitle: "Join us in building a safer tomorrow for Tanzania's children",
  },
];

const MISSION = [
  { icon: Icon.Target,    title: 'Our Mission', desc: 'To protect and empower vulnerable children across Tanzania' },
  { icon: Icon.Eye,       title: 'Our Vision',  desc: 'A Tanzania where every child grows up safe, healthy, and educated' },
  { icon: Icon.Handshake, title: 'Our Values',  desc: 'Compassion, Integrity, Community, and Child-Centeredness' },
];

const PROGRAMS = [
  { icon: Icon.Book,    title: 'Education Support',        desc: 'School fees, uniforms, books, and after-school tutoring for children who would otherwise be left behind.' },
  { icon: Icon.Health,  title: 'Health & Nutrition',       desc: 'Medical check-ups, immunizations, and nutrition programs to ensure children grow healthy and strong.' },
  { icon: Icon.Shield,  title: 'Child Protection',         desc: 'Advocacy, counseling, and safe spaces for children affected by abuse, neglect, and exploitation.' },
  { icon: Icon.Droplet, title: 'Clean Water & Sanitation', desc: 'Building wells and improving sanitation in schools and communities to keep children healthy.' },
  { icon: Icon.Palette, title: 'Skills & Creativity',      desc: 'Arts, sports, and vocational training that build confidence and prepare children for the future.' },
  { icon: Icon.Family,  title: 'Family Empowerment',       desc: 'Supporting caregivers with training and income-generating opportunities to keep families together.' },
];

const STATS = [
  { value: '5,000+', label: 'Children Supported' },
  { value: '120+',   label: 'Schools Partnered' },
  { value: '45',     label: 'Communities Reached' },
  { value: '1+',    label: 'Years of Service' },
];

const STORIES = [
  { img: story1, tag: 'Education', title: "Amina's Journey to School", quote: '“Thanks to ChildFirst, I am the first girl in my family to attend secondary school. I dream of becoming a doctor.”', author: '— Amina, 15, Mwanza' },
  { img: story2, tag: 'Health',    title: "Joseph's Second Chance",     quote: '“After receiving medical care and nutrition support, Joseph is now healthy, energetic, and back in school.”', author: "— Joseph's mother, Arusha" },
  { img: story3, tag: 'Community', title: 'A Village Transformed',      quote: '“With a new clean water well at our school, children no longer miss classes to fetch water from distant rivers.”', author: '— Head Teacher, Dodoma Region' },
];

/* ============================================================
   Home
   ============================================================ */
function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const goTo = (path) => () => navigate(path);
  const scrollTo = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="home-page childfirst">
      <style>{STYLES}</style>
      <SiteNavigation />

      {/* HERO */}
      <section id="home" className="hero" aria-label="Introduction">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden={i !== currentSlide}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="hero-eyebrow">ChildFirst Tanzania · Since 2025</span>
              <h1>{s.title}</h1>
              <p>{s.subtitle}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={goTo('/donate')}>
                  Donate Now <Icon.ArrowRight />
                </button>
                <button className="btn btn-ghost" onClick={scrollTo('about')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentSlide}
              aria-label={`Show slide ${i + 1}`}
              className={`dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-strip" aria-label="Mission, Vision and Values">
        <div className="container">
          {MISSION.map(({ icon: I, title, desc }) => (
            <div className="mission-item" key={title}>
              <span className="icon-badge" aria-hidden="true"><I /></span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img src="./assets/story3.jpeg" alt="Children supported by ChildFirst Tanzania" loading="lazy" />
            <div className="experience-badge">
              <strong>1+</strong>
              <span>Years of Impact</span>
            </div>
          </div>
          <div className="about-content">
            <span className="label">Who we are</span>
            <h2>Giving Hope to Children in Tanzania Since 2025</h2>
            
            <p>
              ChildFirst Tanzania is a registered non-governmental organization dedicated to
              improving the lives of vulnerable children across Tanzania. We work with local
              communities, schools, and families to provide education, healthcare, protection,
              and opportunities for children to thrive.
            </p>
            <p>
              From Dar es Salaam to rural villages in Mwanza, Arusha, and beyond, our programs
              reach children who need it most — orphans, children with disabilities, street
              children, and those from low-income families.
            </p>
            <ul className="checklist">
              {[
                'Registered NGO in Tanzania',
                'Community-driven programs',
                'Transparent use of donations',
                'Partnerships with local schools & clinics',
              ].map((t) => (
                <li key={t}><span className="check-icon" aria-hidden="true"><Icon.Check /></span>{t}</li>
              ))}
            </ul>
            <button className="btn btn-primary" onClick={goTo('/about')}>
              Read Our Full Story <Icon.ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="programs-section">
        <div className="container">
          <header className="section-header">
            <span className="label">What we do</span>
            <h2>Our Programs</h2>
            <p>Comprehensive support that addresses the most critical needs of children</p>
          </header>
          <div className="programs-grid">
            {PROGRAMS.map(({ icon: I, title, desc }) => (
              <article className="program-card" key={title}>
                <span className="icon-badge" aria-hidden="true"><I /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="impact-section">
        <div className="container">
          <header className="section-header light">
            <span className="label">Our impact</span>
            <h2>Numbers That Matter</h2>
            <p>Every statistic represents a child whose life has changed</p>
          </header>
          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat-card" key={s.label}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="stories-section">
        <div className="container">
          <header className="section-header">
            <span className="label">Success stories</span>
            <h2>Lives We've Touched</h2>
            <p>Real stories of hope and transformation from across Tanzania</p>
          </header>
          <div className="stories-grid">
            {STORIES.map((s) => (
              <article className="story-card" key={s.title}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="story-content">
                  <span className="tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.quote}</p>
                  <span className="story-author">{s.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Every Child Deserves a Chance</h2>
          <p>Your donation, no matter how small, can change a child's life forever.</p>
          <div className="cta-buttons">
            <button className="btn btn-onbrand" onClick={goTo('/donate')}>
              <Icon.Heart /> Donate Now
            </button>
            <button className="btn btn-outline" onClick={goTo('/volunteer')}>
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-cta" aria-label="Contact">
        <div className="container contact-cta-content">
          <div>
            <h2>Stay Connected</h2>
            <p>Questions, ideas, or ways to help? Contact our team directly.</p>
          </div>
          <button className="btn btn-primary" onClick={goTo('/contact')}>
            Contact Us <Icon.ArrowRight />
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Home;

/* ============================================================
   Styles
   ============================================================ */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');

.home-page.childfirst {
  --green:        #5BB227;
  --green-dark:   #34751F;
  --green-deep:   #183B20;
  --green-pale:   #F1F8EC;
  --green-lime:   #8DDD5B;
  --ink:          #17251A;
  --muted:        #657064;
  --line:         #E3EEDF;
  --white:        #FFFFFF;

  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--ink);
  line-height: 1.65;
  background: var(--white);
  overflow-x: hidden;
}
.home-page.childfirst * { box-sizing: border-box; }
.home-page.childfirst .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- Shared buttons ---------- */
.home-page.childfirst .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.98rem;
  padding: 13px 28px;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease, color .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.home-page.childfirst .btn svg { flex-shrink: 0; }
.home-page.childfirst .btn:active { transform: translateY(1px); }

.home-page.childfirst .btn-primary {
  background: var(--green);
  color: #fff;
  box-shadow: 0 8px 20px rgba(91,178,39,.30);
}
.home-page.childfirst .btn-primary:hover {
  background: var(--green-dark);
  box-shadow: 0 12px 26px rgba(52,117,31,.36);
  transform: translateY(-2px);
}
.home-page.childfirst .btn-ghost {
  background: rgba(255,255,255,.08);
  color: #fff;
  border-color: rgba(255,255,255,.7);
  backdrop-filter: blur(4px);
}
.home-page.childfirst .btn-ghost:hover { background: #fff; color: var(--green-dark); }
.home-page.childfirst .btn-onbrand {
  background: #fff;
  color: var(--green-dark);
  box-shadow: 0 10px 26px rgba(0,0,0,.18);
}
.home-page.childfirst .btn-onbrand:hover { background: var(--green-pale); transform: translateY(-2px); }
.home-page.childfirst .btn-outline {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,.85);
}
.home-page.childfirst .btn-outline:hover { background: #fff; color: var(--green-dark); border-color: #fff; }

/* ---------- Icons ---------- */
.home-page.childfirst .icon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid var(--line);
  color: var(--green-dark);
  box-shadow: 0 6px 18px rgba(52,117,31,.08);
}
.home-page.childfirst .icon-badge svg { width: 26px; height: 26px; }

/* ---------- Hero ---------- */
.home-page.childfirst .hero {
  position: relative;
  height: 90vh;
  min-height: 580px;
  overflow: hidden;
  background: var(--green-deep);
}
.home-page.childfirst .hero-slide {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease;
  display: flex; align-items: center; justify-content: center;
  animation: cfZoom 14s ease-out infinite alternate;
}
.home-page.childfirst .hero-slide.active { opacity: 1; }
@keyframes cfZoom { from { transform: scale(1); } to { transform: scale(1.06); } }

.home-page.childfirst .hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(24,59,32,.92) 0%,
    rgba(52,117,31,.72) 45%,
    rgba(91,178,39,.45) 100%);
  z-index: 1;
}
.home-page.childfirst .hero-content {
  position: relative; z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 840px;
  padding: 0 24px;
}
.home-page.childfirst .hero-eyebrow {
  display: inline-block;
  background: rgba(141,221,91,.16);
  border: 1px solid rgba(141,221,91,.5);
  color: #E9FBDD;
  padding: 7px 18px;
  border-radius: 999px;
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 22px;
  backdrop-filter: blur(6px);
}
.home-page.childfirst .hero-content h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.12;
  margin: 0 0 20px;
}
.home-page.childfirst .hero-content p {
  font-size: clamp(1rem, 2vw, 1.18rem);
  margin: 0 auto 34px;
  color: #EAF6E3;
  max-width: 620px;
}
.home-page.childfirst .hero-buttons {
  display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
}
.home-page.childfirst .hero-dots {
  position: absolute; bottom: 28px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 10px; z-index: 3;
}
.home-page.childfirst .dot {
  width: 12px; height: 12px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,.55);
  cursor: pointer;
  padding: 0;
  transition: all .3s ease;
}
.home-page.childfirst .dot.active { width: 34px; background: var(--green-lime); }

/* ---------- Mission ---------- */
.home-page.childfirst .mission-strip {
  background: var(--green-pale);
  padding: 56px 0;
  border-bottom: 1px solid var(--line);
}
.home-page.childfirst .mission-strip .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}
.home-page.childfirst .mission-item {
  display: flex; gap: 16px; align-items: flex-start;
}
.home-page.childfirst .mission-item h3 {
  margin: 0 0 6px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  color: var(--green-dark);
}
.home-page.childfirst .mission-item p {
  margin: 0; color: var(--muted); font-size: .93rem;
}

/* ---------- Section headings ---------- */
.home-page.childfirst .label {
  display: inline-block;
  background: var(--green-pale);
  color: var(--green-dark);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 14px;
  border: 1px solid var(--line);
}
.home-page.childfirst .section-header {
  text-align: center;
  margin: 0 auto 56px;
  max-width: 720px;
}
.home-page.childfirst .section-header h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  color: var(--green-deep);
  margin: 0 0 12px;
  line-height: 1.2;
}
.home-page.childfirst .section-header p { color: var(--muted); margin: 0; }
.home-page.childfirst .section-header.light .label {
  background: rgba(141,221,91,.15);
  color: var(--green-lime);
  border-color: rgba(141,221,91,.4);
}
.home-page.childfirst .section-header.light h2 { color: #fff; }
.home-page.childfirst .section-header.light p { color: #D8EBD0; }

/* ---------- About ---------- */
.home-page.childfirst .about-section {
  padding: 96px 0;
  background: #fff;
}
.home-page.childfirst .about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.home-page.childfirst .about-image { position: relative; }
.home-page.childfirst .about-image img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 24px 48px rgba(24,59,32,.18);
  display: block;
}
.home-page.childfirst .experience-badge {
  position: absolute;
  bottom: -22px; right: -14px;
  background: linear-gradient(135deg, var(--green), var(--green-dark));
  color: #fff;
  padding: 22px 28px;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 14px 30px rgba(52,117,31,.35);
}
.home-page.childfirst .experience-badge strong {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem; line-height: 1; margin-bottom: 4px;
}
.home-page.childfirst .experience-badge span { font-size: .8rem; letter-spacing: .5px; }

.home-page.childfirst .about-content h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  color: var(--green-deep);
  margin: 0 0 20px;
  line-height: 1.25;
}
.home-page.childfirst .about-content p { color: var(--muted); margin: 0 0 16px; }

.home-page.childfirst .checklist {
  list-style: none;
  padding: 0;
  margin: 22px 0 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
}
.home-page.childfirst .checklist li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--green-deep);
  font-weight: 500;
  font-size: .93rem;
}
.home-page.childfirst .check-icon {
  display: inline-flex;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: var(--green-pale);
  color: var(--green-dark);
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ---------- Programs ---------- */
.home-page.childfirst .programs-section {
  padding: 96px 0;
  background: var(--green-pale);
}
.home-page.childfirst .programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 26px;
}
.home-page.childfirst .program-card {
  background: #fff;
  padding: 34px 28px;
  border-radius: 18px;
  border: 1px solid var(--line);
  box-shadow: 0 8px 24px rgba(52,117,31,.06);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.home-page.childfirst .program-card:hover {
  transform: translateY(-6px);
  border-color: var(--green);
  box-shadow: 0 18px 40px rgba(52,117,31,.14);
}
.home-page.childfirst .program-card .icon-badge {
  width: 60px; height: 60px;
  background: var(--green-pale);
  border-color: var(--line);
  margin-bottom: 18px;
}
.home-page.childfirst .program-card h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.18rem;
  color: var(--green-deep);
  margin: 0 0 10px;
}
.home-page.childfirst .program-card p { color: var(--muted); font-size: .94rem; margin: 0; }

/* ---------- Impact ---------- */
.home-page.childfirst .impact-section {
  padding: 96px 0;
  background: linear-gradient(135deg, var(--green-deep) 0%, #22552a 100%);
  position: relative;
  overflow: hidden;
}
.home-page.childfirst .impact-section::before {
  content: '';
  position: absolute;
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(141,221,91,.18), transparent 70%);
  top: -200px; right: -140px;
  pointer-events: none;
}
.home-page.childfirst .stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  position: relative;
  z-index: 1;
}
.home-page.childfirst .stat-card {
  text-align: center;
  padding: 32px 22px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(141,221,91,.22);
  border-radius: 18px;
  backdrop-filter: blur(6px);
  transition: transform .25s ease, background .25s ease;
}
.home-page.childfirst .stat-card:hover {
  transform: translateY(-4px);
  background: rgba(141,221,91,.10);
}
.home-page.childfirst .stat-card h3 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: var(--green-lime);
  margin: 0 0 8px;
  line-height: 1;
}
.home-page.childfirst .stat-card p { color: #DCEBD5; margin: 0; font-size: .95rem; }

/* ---------- Stories ---------- */
.home-page.childfirst .stories-section { padding: 96px 0; background: #fff; }
.home-page.childfirst .stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}
.home-page.childfirst .story-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: 0 10px 30px rgba(52,117,31,.08);
  transition: transform .3s ease, box-shadow .3s ease;
}
.home-page.childfirst .story-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 44px rgba(52,117,31,.16);
}
.home-page.childfirst .story-card img {
  width: 100%; height: 220px; object-fit: cover; display: block;
}
.home-page.childfirst .story-content { padding: 26px; }
.home-page.childfirst .tag {
  display: inline-block;
  background: var(--green-pale);
  color: var(--green-dark);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .8px;
  text-transform: uppercase;
  margin-bottom: 12px;
  border: 1px solid var(--line);
}
.home-page.childfirst .story-content h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  color: var(--green-deep);
  margin: 0 0 10px;
}
.home-page.childfirst .story-content p {
  color: var(--muted);
  font-style: italic;
  font-size: .95rem;
  margin: 0 0 14px;
}
.home-page.childfirst .story-author {
  font-size: .85rem;
  color: var(--green-dark);
  font-weight: 600;
}

/* ---------- CTA ---------- */
.home-page.childfirst .cta-section {
  padding: 96px 0;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.home-page.childfirst .cta-section::before {
  content: '';
  position: absolute;
  width: 640px; height: 640px;
  background: radial-gradient(circle, rgba(255,255,255,.12), transparent 65%);
  top: -280px; left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}
.home-page.childfirst .cta-section .container { position: relative; z-index: 1; }
.home-page.childfirst .cta-section h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin: 0 0 16px;
}
.home-page.childfirst .cta-section p {
  font-size: 1.08rem;
  margin: 0 0 34px;
  color: #EAF6E3;
}
.home-page.childfirst .cta-buttons {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
}

/* ---------- Contact CTA ---------- */
.home-page.childfirst .contact-cta {
  padding: 64px 0;
  background: var(--green-pale);
  border-top: 1px solid var(--line);
}
.home-page.childfirst .contact-cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}
.home-page.childfirst .contact-cta-content h2 {
  font-family: 'Poppins', sans-serif;
  color: var(--green-deep);
  margin: 0 0 6px;
  font-size: 1.6rem;
}
.home-page.childfirst .contact-cta-content p { color: var(--muted); margin: 0; }

/* ---------- Focus ---------- */
.home-page.childfirst a:focus-visible,
.home-page.childfirst button:focus-visible {
  outline: 3px solid var(--green);
  outline-offset: 3px;
  border-radius: 10px;
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .home-page.childfirst .about-grid { grid-template-columns: 1fr; gap: 60px; }
  .home-page.childfirst .hero { height: 80vh; min-height: 520px; }
}
@media (max-width: 640px) {
  .home-page.childfirst .hero { height: 72vh; min-height: 460px; }
  .home-page.childfirst .hero-content h1 { font-size: 1.85rem; }
  .home-page.childfirst .checklist { grid-template-columns: 1fr; }
  .home-page.childfirst .experience-badge { right: 12px; bottom: -18px; padding: 16px 22px; }
  .home-page.childfirst .experience-badge strong { font-size: 1.6rem; }
  .home-page.childfirst .contact-cta-content { justify-content: center; text-align: center; }
}
@media (prefers-reduced-motion: reduce) {
  .home-page.childfirst *,
  .home-page.childfirst *::before,
  .home-page.childfirst *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;