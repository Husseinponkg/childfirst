
import { SiteNavigation, SiteFooter } from './SiteNavigation';
import member1 from '../assets/2.png';
import member2 from '../assets/5.png';
import member3 from '../assets/1.png';
import member4 from '../assets/4.png';
import member5 from '../assets/3.png';
import member6 from '../assets/6.png';
const teamMembers = [
  {
    name: 'Executive Director',
    role: 'Leadership & Strategy',
    description: 'Guides the organization’s vision, partnerships, and commitment to child wellbeing.',
    initials: 'ED',
    image: member1,
  },
  {
    name: 'Programme Coordinator',
    role: 'Community Programmes',
    description: 'Coordinates child-focused activities with schools, families, and local communities.',
    initials: 'PC',
    image: member2,
  },
  {
    name: 'General Secretary',
    role: 'daily operations & administration',
    description: 'Supports child safeguarding, awareness, and access to appropriate community support.',
    initials: 'CP',
    image: member3,
  },
  {
    name: 'communication officer',
    role: 'communication and outreach',
    description: 'Communicates the organization’s mission and impact to various stakeholders.',
    initials: 'CO',
    image: member4,
  },
  {
    name: 'Treasure',
    role: 'Money management and financial oversight',
    description: 'Builds relationships with caregivers and community partners to support children.',
    initials: 'TO',
    image: member5,
  },
  {
    name: 'Volunteers & Support Team',
    role: 'Making a Difference Together',
    description: 'Contributes time, skills, and care to help deliver the organization’s work.',
    initials: 'ST',
    image: member6,
  },
];

function Team() {
  return (
    <>
      <SiteNavigation />
      <main className="team-page">
      <style>{`
        .team-page {
          --team-green: #5BB227;
          --team-green-dark: #34751F;
          --team-deep: #183B20;
          --team-pale: #F1F8EC;
          --team-ink: #17251b;
          --team-muted: #647067;
          color: var(--team-ink);
          background: #fff;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .team-page * { box-sizing: border-box; }
        .team-wrap { width: min(1120px, 100%); margin: 0 auto; }
        .team-hero {
          position: relative;
          overflow: hidden;
          padding: 86px 24px 80px;
          color: #fff;
          background:
            radial-gradient(circle at 85% 18%, rgba(91,178,39,.24), transparent 29%),
            linear-gradient(120deg, #102c1b, var(--team-deep) 62%, #102b20);
        }
        .team-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          margin-bottom: 18px;
          border: 1px solid rgba(91,178,39,.35);
          border-radius: 999px;
          color: #b8e79e;
          background: rgba(91,178,39,.12);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .team-eyebrow::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--team-green);
        }
        .team-hero h1 {
          max-width: 780px;
          margin: 0;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -.045em;
        }
        .team-hero h1 span { color: #83cf59; }
        .team-hero p {
          max-width: 680px;
          margin: 22px 0 0;
          color: rgba(255,255,255,.78);
          font-size: 1.08rem;
          line-height: 1.8;
        }
        .team-content { padding: 72px 24px 84px; }
        .team-heading { max-width: 720px; margin: 0 auto 38px; text-align: center; }
        .team-label {
          display: inline-block;
          margin-bottom: 12px;
          color: var(--team-green-dark);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .team-heading h2 {
          margin: 0 0 14px;
          color: var(--team-deep);
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          letter-spacing: -.035em;
        }
        .team-heading p { margin: 0; color: var(--team-muted); line-height: 1.8; }
        .team-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
        .team-card {
          position: relative;
          overflow: hidden;
          padding: 28px;
          border: 1px solid #e4eddf;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 12px 32px rgba(24,59,32,.055);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .team-card::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--team-green);
          content: "";
        }
        .team-card:hover {
          transform: translateY(-4px);
          border-color: rgba(91,178,39,.55);
          box-shadow: 0 18px 40px rgba(24,59,32,.1);
        }
        .team-avatar {
          overflow: hidden;
          display: grid;
          width: 68px;
          height: 68px;
          margin-bottom: 22px;
          place-items: center;
          border: 1px solid #d8ebcd;
          border-radius: 20px;
          color: var(--team-green-dark);
          background: var(--team-pale);
          font-size: 1.15rem;
          font-weight: 850;
          letter-spacing: .04em;
        }
        .team-card h3 { margin: 0 0 7px; color: var(--team-deep); font-size: 1.2rem; }
        .team-role { display: block; margin-bottom: 14px; color: var(--team-green-dark); font-size: .88rem; font-weight: 750; }
        .team-card p { margin: 0; color: var(--team-muted); font-size: .96rem; line-height: 1.75; }
        .team-values {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 42px;
        }
        .team-value { padding: 22px; border-radius: 16px; background: var(--team-pale); }
        .team-value strong { display: block; margin-bottom: 7px; color: var(--team-deep); }
        .team-value p { margin: 0; color: #53664f; font-size: .94rem; line-height: 1.7; }
        .team-cta {
          margin: 0 24px 78px;
          padding: 36px;
          border-radius: 22px;
          color: #fff;
          background: linear-gradient(120deg, var(--team-deep), #24542b);
        }
        .team-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .team-cta h2 { margin: 0 0 9px; font-size: clamp(1.5rem, 3vw, 2.1rem); }
        .team-cta p { max-width: 640px; margin: 0; color: rgba(255,255,255,.78); line-height: 1.7; }
        .team-cta a {
          flex: 0 0 auto;
          display: inline-flex;
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
        .team-cta a:hover { background: #a0e17e; }
        @media (max-width: 850px) {
          .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .team-values { grid-template-columns: 1fr; }
          .team-cta-inner { align-items: flex-start; flex-direction: column; }
        }
        @media (max-width: 560px) {
          .team-hero { padding: 62px 20px 58px; }
          .team-content { padding: 50px 20px 60px; }
          .team-grid { grid-template-columns: 1fr; }
          .team-card { padding: 24px; }
          .team-cta { margin: 0 20px 55px; padding: 26px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .team-card, .team-cta a { transition: none; }
          .team-card:hover { transform: none; }
        }
      `}</style>

      <section className="team-hero">
        <div className="team-wrap">
          <span className="team-eyebrow">The people behind our mission</span>
          <h1>Meet the people who put children <span>first.</span></h1>
          <p>
            Child wellbeing takes a community. Our work depends on people who care,
            collaborate, and believe every child in Tanzania deserves safety, dignity,
            and the chance to thrive.
          </p>
        </div>
      </section>

      <section className="team-content">
        <div className="team-wrap">
          <header className="team-heading">
            <span className="team-label">Our team</span>
            <h2>Working together for every child</h2>
            <p>
              From programme coordination to community outreach, each role contributes
              to creating better opportunities for children and families.
            </p>
          </header>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.role}>
                <div className="team-avatar" aria-hidden="true"><img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} /></div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>
              </article>
            ))}
          </div>

          <div className="team-values">
            <div className="team-value">
              <strong>Child-centred</strong>
              <p>Children’s safety, dignity, and wellbeing guide our decisions.</p>
            </div>
            <div className="team-value">
              <strong>Community-led</strong>
              <p>We value the knowledge and participation of families and local communities.</p>
            </div>
            <div className="team-value">
              <strong>Working with care</strong>
              <p>We aim to approach our work with compassion, respect, and responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="team-wrap team-cta-inner">
          <div>
            <h2>Would you like to work with us?</h2>
            <p>We welcome conversations with volunteers, community partners, and people who want to support children’s wellbeing in Tanzania.</p>
          </div>
          <a href="mailto:childrenfirsttanzania@gmail.com">Get in touch ↗</a>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}

export default Team;
