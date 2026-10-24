import { SiteNavigation, SiteFooter } from './SiteNavigation';

export default function Volunteer() {
  return (
    <>
      <SiteNavigation />
      <main className="volunteer-page" style={{ minHeight: '60vh', padding: '80px 24px', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 style={{ color: '#183b20' }}>Become a Volunteer</h1>
        <p style={{ maxWidth: 620, margin: '16px auto', color: '#647067', lineHeight: 1.8 }}>
          We welcome volunteers who want to share their time, skills, and care to support children’s wellbeing in Tanzania.
        </p>
        <a href="mailto:childrenfirsttanzania@gmail.com" style={{ display: 'inline-block', marginTop: 12, padding: '12px 20px', background: '#5bb227', color: '#fff', borderRadius: 10, fontWeight: 800, textDecoration: 'none' }}>Get in touch ↗</a>
      </main>
      <SiteFooter />
    </>
  );
}
