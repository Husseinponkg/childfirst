import { SiteNavigation, SiteFooter } from './SiteNavigation';

export default function Donate() {
  return (
    <>
      <SiteNavigation />
      <main className="donate-page" style={{ minHeight: '60vh', padding: '80px 24px', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 style={{ color: '#183b20' }}>Support a Child Today</h1>
        <p style={{ maxWidth: 620, margin: '16px auto', color: '#647067', lineHeight: 1.8 }}>
          Your donation helps provide education, healthcare, and protection for vulnerable children across Tanzania.
        </p>
        <p style={{ color: '#34751f', fontWeight: 700 }}>Contact us to arrange a donation:</p>
        <a href="mailto:childrenfirsttanzania@gmail.com" style={{ display: 'inline-block', marginTop: 12, padding: '12px 20px', background: '#5bb227', color: '#fff', borderRadius: 10, fontWeight: 800, textDecoration: 'none' }}>childrenfirsttanzania@gmail.com</a>
      </main>
      <SiteFooter />
    </>
  );
}
