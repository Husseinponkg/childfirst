
import { SiteNavigation, SiteFooter } from './SiteNavigation';
const workAreas = [
  {
    number: '01',
    icon: '⌂',
    title: 'Child Protection',
    summary: 'Promoting safer environments where children are respected, heard, and protected.',
    details: [
      'Encourage awareness of children’s rights and safeguarding.',
      'Promote safe, inclusive spaces at home, school, and in the community.',
      'Support community conversations about preventing abuse, neglect, and exploitation.',
    ],
  },
  {
    number: '02',
    icon: '▤',
    title: 'Education Support',
    summary: 'Helping children access learning opportunities and develop their potential.',
    details: [
      'Promote access to learning resources and school support.',
      'Encourage attendance, participation, and a positive learning environment.',
      'Work with families and communities to value every child’s education.',
    ],
  },
  {
    number: '03',
    icon: '＋',
    title: 'Health & Wellbeing',
    summary: 'Encouraging healthy development through awareness, care, and community support.',
    details: [
      'Promote child health, nutrition, and wellbeing awareness.',
      'Encourage families to seek appropriate health services when needed.',
      'Support positive practices that help children grow and thrive.',
    ],
  },
  {
    number: '04',
    icon: '♧',
    title: 'Family Empowerment',
    summary: 'Working alongside caregivers to strengthen the support around each child.',
    details: [
      'Encourage positive caregiving and family participation.',
      'Connect community members around shared child wellbeing goals.',
      'Promote practical information and support for caregivers.',
    ],
  },
  {
    number: '05',
    icon: '◉',
    title: 'Community Awareness',
    summary: 'Building understanding and collaboration around issues that affect children.',
    details: [
      'Create opportunities for community dialogue and learning.',
      'Promote inclusion and respect for children from different backgrounds.',
      'Encourage local participation in child-focused initiatives.',
    ],
  },
  {
    number: '06',
    icon: '✳',
    title: 'Partnership & Participation',
    summary: 'Working with people and organizations who share a commitment to children.',
    details: [
      'Welcome collaboration with community groups and institutions.',
      'Encourage volunteering and sharing useful skills.',
      'Build relationships around practical, child-centred goals.',
    ],
  },
];

export default function OurWorks() {
  return (
    <>
      <SiteNavigation />
      <main className="our-works-page">
      <style>{`
        .our-works-page {
          --work-green: #5BB227;
          --work-green-dark: #34751F;
          --work-deep: #183B20;
          --work-pale: #F1F8EC;
          --work-ink: #17251b;
          --work-muted: #647067;
          color: var(--work-ink);
          background: #fff;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .our-works-page * { box-sizing: border-box; }
        .works-wrap { width: min(1120px, 100%); margin: 0 auto; }
        .works-hero {
          position: relative;
          overflow: hidden;
          padding: 86px 24px 82px;
          color: #fff;
          background:
            radial-gradient(circle at 85% 20%, rgba(91,178,39,.25), transparent 30%),
            linear-gradient(120deg, #102c1b 0%, var(--work-deep) 62%, #102b20 100%);
        }
        .works-eyebrow {
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
        .works-eyebrow::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--work-green);
        }
        .works-hero h1 {
          max-width: 800px;
          margin: 0;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -.045em;
        }
        .works-hero h1 span { color: #83cf59; }
        .works-hero p {
          max-width: 690px;
          margin: 22px 0 0;
          color: rgba(255,255,255,.8);
          font-size: 1.08rem;
          line-height: 1.85;
        }
        .works-intro { padding: 66px 24px 30px; }
        .works-heading { max-width: 760px; margin: 0 auto; text-align: center; }
        .works-label {
          display: inline-block;
          margin-bottom: 13px;
          color: var(--work-green-dark);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .works-heading h2 {
          margin: 0 0 14px;
          color: var(--work-deep);
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          letter-spacing: -.035em;
        }
        .works-heading p { margin: 0; color: var(--work-muted); line-height: 1.8; }
        .works-main { padding: 30px 24px 78px; }
        .works-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
        .works-card {
          display: flex;
          flex-direction: column;
          padding: 27px;
          border: 1px solid #e4eddf;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 12px 32px rgba(24,59,32,.055);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .works-card:hover {
          transform: translateY(-4px);
          border-color: rgba(91,178,39,.55);
          box-shadow: 0 18px 40px rgba(24,59,32,.1);
        }
        .works-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 21px; }
        .works-icon {
          display: grid;
          width: 56px;
          height: 56px;
          place-items: center;
          border-radius: 16px;
          color: var(--work-green-dark);
          background: var(--work-pale);
          font-size: 1.55rem;
          font-weight: 700;
        }
        .works-number { color: #a7c99a; font-size: .85rem; font-weight: 850; letter-spacing: .1em; }
        .works-card h3 { margin: 0 0 10px; color: var(--work-deep); font-size: 1.22rem; }
        .works-summary { margin: 0 0 18px; color: var(--work-muted); line-height: 1.75; }
        .works-card ul { display: grid; gap: 11px; margin: 0; padding: 0; list-style: none; }
        .works-card li { display: flex; align-items: flex-start; gap: 10px; color: #3e4c40; font-size: .94rem; line-height: 1.65; }
        .works-card li::before { content: "✓"; flex: 0 0 auto; color: var(--work-green-dark); font-weight: 900; }
        .works-note {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          margin-top: 30px;
          padding: 22px 24px;
          border-radius: 16px;
          background: var(--work-pale);
        }
        .works-note-mark { color: var(--work-green-dark); font-size: 1.4rem; line-height: 1; }
        .works-note strong { display: block; margin-bottom: 5px; color: var(--work-deep); }
        .works-note p { margin: 0; color: #53664f; line-height: 1.7; }
        .works-cta {
          margin: 0 24px 78px;
          padding: 38px;
          border-radius: 22px;
          color: #fff;
          background: linear-gradient(120deg, var(--work-deep), #24542b);
        }
        .works-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .works-cta h2 { margin: 0 0 9px; font-size: clamp(1.5rem, 3vw, 2.1rem); }
        .works-cta p { max-width: 650px; margin: 0; color: rgba(255,255,255,.8); line-height: 1.75; }
        .works-cta a {
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
        .works-cta a:hover { background: #a0e17e; }
        @media (max-width: 950px) { .works-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 650px) {
          .works-hero { padding: 62px 20px 58px; }
          .works-intro { padding: 48px 20px 20px; }
          .works-main { padding: 20px 20px 58px; }
          .works-grid { grid-template-columns: 1fr; }
          .works-card { padding: 24px; }
          .works-cta { margin: 0 20px 55px; padding: 27px; }
          .works-cta-inner { align-items: flex-start; flex-direction: column; }
        }
        @media (prefers-reduced-motion: reduce) {
          .works-card, .works-cta a { transition: none; }
          .works-card:hover { transform: none; }
        }
      `}</style>

      <section className="works-hero">
        <div className="works-wrap">
          <span className="works-eyebrow">What we do</span>
          <h1>Creating brighter futures through <span>action.</span></h1>
          <p>
            We focus on the things that matter to children’s everyday lives: safety,
            education, health, family support, and communities where every child can belong.
          </p>
        </div>
      </section>

      <section className="works-intro">
        <div className="works-wrap works-heading">
          <span className="works-label">Our work areas</span>
          <h2>Supporting children, families, and communities</h2>
          <p>
            Child wellbeing is connected to many parts of life. Our focus areas encourage
            collaboration and practical support, guided by the needs and voices of children
            and the communities around them.
          </p>
        </div>
      </section>

      <section className="works-main">
        <div className="works-wrap">
          <div className="works-grid">
            {workAreas.map((area) => (
              <article className="works-card" key={area.number}>
                <div className="works-card-top">
                  <div className="works-icon" aria-hidden="true">{area.icon}</div>
                  <span className="works-number">{area.number}</span>
                </div>
                <h3>{area.title}</h3>
                <p className="works-summary">{area.summary}</p>
                <ul>
                  {area.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="works-note">
            <span className="works-note-mark" aria-hidden="true">✳</span>
            <div>
              <strong>Child-centred work starts with listening.</strong>
              <p>
                Every community has different needs. We believe meaningful support begins
                by listening to children and caregivers, respecting local knowledge, and
                working together toward practical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="works-cta">
        <div className="works-wrap works-cta-inner">
          <div>
            <h2>Would you like to support our work?</h2>
            <p>Connect with ChildFirst Tanzania to discuss collaboration, community initiatives, or ways to support children’s wellbeing.</p>
          </div>
          <a href="mailto:childrenfirsttanzania@gmail.com">Contact us ↗</a>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}
