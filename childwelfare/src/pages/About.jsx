
import { SiteNavigation, SiteFooter } from './SiteNavigation';
export default function About() {
  return (
    <>
      <SiteNavigation />
      <main className="about-page">
      <style>{`
        .about-page {
          --about-green: #5BB227;
          --about-green-dark: #34751F;
          --about-deep: #183B20;
          --about-pale: #F1F8EC;
          --about-ink: #17251b;
          --about-muted: #647067;
          color: var(--about-ink);
          background: #fff;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .about-page * { box-sizing: border-box; }
        .about-wrap { width: min(1120px, 100%); margin: 0 auto; }
        .about-hero {
          position: relative;
          overflow: hidden;
          padding: 88px 24px 84px;
          color: #fff;
          background:
            radial-gradient(circle at 84% 20%, rgba(91,178,39,.25), transparent 30%),
            linear-gradient(120deg, #102c1b 0%, var(--about-deep) 62%, #102b20 100%);
        }
        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 18px;
          padding: 8px 13px;
          border: 1px solid rgba(91,178,39,.35);
          border-radius: 999px;
          color: #b8e79e;
          background: rgba(91,178,39,.12);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .about-eyebrow::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--about-green);
        }
        .about-hero h1 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          line-height: 1.05;
          letter-spacing: -.045em;
        }
        .about-hero h1 span { color: #83cf59; }
        .about-hero p {
          max-width: 700px;
          margin: 22px 0 0;
          color: rgba(255,255,255,.8);
          font-size: 1.08rem;
          line-height: 1.85;
        }
        .about-section { padding: 76px 24px; }
        .about-section.soft { background: #f8fbf6; }
        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 54px;
          align-items: center;
        }
        .about-photo {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          border-radius: 24px;
          background:
            radial-gradient(circle at 25% 20%, rgba(131,207,89,.4), transparent 30%),
            linear-gradient(145deg, #dcebd2, #8fbf78 50%, #285b32);
          box-shadow: 0 18px 44px rgba(24,59,32,.13);
        }
        .about-photo::before, .about-photo::after {
          position: absolute;
          content: "";
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 50%;
        }
        .about-photo::before { width: 290px; height: 290px; top: 40px; left: -55px; }
        .about-photo::after { width: 370px; height: 370px; right: -115px; bottom: -155px; }
        .about-photo-caption {
          position: absolute;
          right: 22px;
          bottom: 22px;
          left: 22px;
          padding: 20px 22px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 16px;
          color: #fff;
          background: rgba(16,44,27,.78);
          backdrop-filter: blur(8px);
        }
        .about-photo-caption strong { display: block; margin-bottom: 5px; font-size: 1.1rem; }
        .about-photo-caption span { color: rgba(255,255,255,.8); font-size: .92rem; line-height: 1.6; }
        .about-label {
          display: inline-block;
          margin-bottom: 13px;
          color: var(--about-green-dark);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .about-copy h2 {
          margin: 0 0 18px;
          color: var(--about-deep);
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          line-height: 1.15;
          letter-spacing: -.035em;
        }
        .about-copy p { margin: 0 0 15px; color: var(--about-muted); line-height: 1.85; }
        .about-checklist { display: grid; gap: 12px; margin: 24px 0 0; padding: 0; list-style: none; }
        .about-checklist li { display: flex; align-items: flex-start; gap: 11px; color: #344536; line-height: 1.6; }
        .about-checklist li::before {
          content: "✓";
          display: grid;
          flex: 0 0 23px;
          width: 23px;
          height: 23px;
          place-items: center;
          border-radius: 50%;
          color: var(--about-green-dark);
          background: #e6f4dc;
          font-size: 13px;
          font-weight: 900;
        }
        .about-heading { max-width: 730px; margin: 0 auto 38px; text-align: center; }
        .about-heading h2 { margin: 0 0 14px; color: var(--about-deep); font-size: clamp(1.9rem, 4vw, 2.8rem); letter-spacing: -.035em; }
        .about-heading p { margin: 0; color: var(--about-muted); line-height: 1.8; }
        .about-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .about-card {
          padding: 27px;
          border: 1px solid #e4eddf;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(24,59,32,.05);
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .about-card:hover { transform: translateY(-4px); border-color: rgba(91,178,39,.55); box-shadow: 0 18px 38px rgba(24,59,32,.09); }
        .about-card-icon {
          display: grid;
          width: 52px;
          height: 52px;
          margin-bottom: 20px;
          place-items: center;
          border-radius: 15px;
          color: var(--about-green-dark);
          background: var(--about-pale);
          font-size: 1.45rem;
        }
        .about-card h3 { margin: 0 0 10px; color: var(--about-deep); font-size: 1.2rem; }
        .about-card p { margin: 0; color: var(--about-muted); line-height: 1.75; }
        .about-values { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .about-value { padding: 22px; border-radius: 16px; background: var(--about-pale); }
        .about-value strong { display: block; margin-bottom: 7px; color: var(--about-deep); }
        .about-value p { margin: 0; color: #53664f; font-size: .94rem; line-height: 1.7; }
        .about-cta {
          margin: 0 24px 78px;
          padding: 38px;
          border-radius: 22px;
          color: #fff;
          background: linear-gradient(120deg, var(--about-deep), #24542b);
        }
        .about-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .about-cta h2 { margin: 0 0 9px; font-size: clamp(1.55rem, 3vw, 2.1rem); }
        .about-cta p { max-width: 650px; margin: 0; color: rgba(255,255,255,.8); line-height: 1.75; }
        .about-cta a {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          padding: 13px 20px;
          border-radius: 10px;
          color: #17331c;
          background: #83cf59;
          font-weight: 800;
          text-decoration: none;
          transition: background .2s ease;
        }
        .about-cta a:hover { background: #a0e17e; }
        @media (max-width: 900px) {
          .about-grid { gap: 32px; }
          .about-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-values { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 650px) {
          .about-hero { padding: 62px 20px 60px; }
          .about-section { padding: 52px 20px; }
          .about-grid { grid-template-columns: 1fr; }
          .about-photo { min-height: 300px; }
          .about-cards, .about-values { grid-template-columns: 1fr; }
          .about-card { padding: 23px; }
          .about-cta { margin: 0 20px 55px; padding: 27px; }
          .about-cta-inner { align-items: flex-start; flex-direction: column; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-card, .about-cta a { transition: none; }
          .about-card:hover { transform: none; }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-wrap">
          <span className="about-eyebrow">About ChildFirst Tanzania</span>
          <h1>Every child deserves a chance to <span>thrive.</span></h1>
          <p>
            We believe children deserve to grow up safe, healthy, supported, and able
            to reach their potential. We work toward a future where every child is
            treated with dignity and has opportunities to learn and grow.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrap about-grid">
          <div className="about-photo" role="img" aria-label="Decorative green illustration representing hope and child wellbeing">
            <div className="about-photo-caption">
              <strong>Children first. Always.</strong>
              <span>Supporting safer, healthier, and more hopeful futures for children and families.</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="about-label">Who we are</span>
            <h2>Working alongside communities for children’s wellbeing</h2>
            <p>
              ChildFirst Tanzania is an organization focused on improving the wellbeing
              of vulnerable children. We believe lasting progress happens when children,
              families, schools, and communities are supported to work together.
            </p>
            <p>
              Our approach centres on child protection, education, health, and practical
              community support. We aim to help create environments where children feel
              safe, included, respected, and able to build a brighter future.
            </p>
            <ul className="about-checklist">
              <li>Put children’s safety, dignity, and wellbeing first.</li>
              <li>Encourage community participation and collaboration.</li>
              <li>Support access to education, care, and opportunity.</li>
              <li>Build relationships grounded in respect and compassion.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section soft">
        <div className="about-wrap">
          <header className="about-heading">
            <span className="about-label">Our purpose</span>
            <h2>What guides our work</h2>
            <p>Our mission and vision shape the way we support children, families, and communities.</p>
          </header>
          <div className="about-cards">
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">♡</div>
              <h3>Our Mission</h3>
              <p>To protect and empower vulnerable children across Tanzania through care, education, inclusion, and community support.</p>
            </article>
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">◎</div>
              <h3>Our Vision</h3>
              <p>A Tanzania where every child can grow up safe, healthy, valued, and able to reach their potential.</p>
            </article>
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">✳</div>
              <h3>Our Approach</h3>
              <p>We work with communities and partners, listening to local needs and focusing on practical, child-centred support.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrap">
          <header className="about-heading">
            <span className="about-label">Our focus areas</span>
            <h2>Helping children build brighter futures</h2>
            <p>We focus on connected areas that can make a meaningful difference in children’s everyday lives.</p>
          </header>
          <div className="about-cards">
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">⌂</div>
              <h3>Child Protection</h3>
              <p>Promoting safer environments, awareness, inclusion, and support for children at risk.</p>
            </article>
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">▤</div>
              <h3>Education</h3>
              <p>Encouraging access to learning, school resources, and opportunities for personal development.</p>
            </article>
            <article className="about-card">
              <div className="about-card-icon" aria-hidden="true">＋</div>
              <h3>Health & Wellbeing</h3>
              <p>Supporting awareness of children’s health, nutrition, and overall wellbeing.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section soft">
        <div className="about-wrap">
          <header className="about-heading">
            <span className="about-label">Our values</span>
            <h2>The principles behind every action</h2>
          </header>
          <div className="about-values">
            <div className="about-value">
              <strong>Compassion</strong>
              <p>We approach children and families with empathy and care.</p>
            </div>
            <div className="about-value">
              <strong>Integrity</strong>
              <p>We value honesty, responsibility, and trust.</p>
            </div>
            <div className="about-value">
              <strong>Inclusion</strong>
              <p>Every child deserves respect, belonging, and opportunity.</p>
            </div>
            <div className="about-value">
              <strong>Community</strong>
              <p>We believe collaboration helps create lasting change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-wrap about-cta-inner">
          <div>
            <h2>Be part of a brighter future</h2>
            <p>Your interest, partnership, or support can help advance child wellbeing. Contact our team to learn more about working together.</p>
          </div>
          <a href="mailto:childrenfirsttanzania@gmail.com">Contact us ↗</a>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}
