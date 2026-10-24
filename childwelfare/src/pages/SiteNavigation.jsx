import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Works', to: '/works' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

export function SiteNavigation() {
  const location = useLocation();

  return (
    <>
      <style>{`
        .cf-site-nav, .cf-site-nav * { box-sizing: border-box; }
        .cf-site-nav {
          position: sticky; top: 0; z-index: 1000;
          background: #fff; border-bottom: 1px solid #e5ede1;
          box-shadow: 0 5px 20px rgba(24,59,32,.05);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .cf-nav-inner {
          width: min(1200px, 100%); min-height: 78px; margin: 0 auto;
          padding: 12px 24px; display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .cf-brand {
          display: inline-flex; align-items: center; gap: 11px;
          color: #183b20; text-decoration: none; flex-shrink: 0;
        }
        .cf-brand img { width: 46px; height: 46px; object-fit: contain; }
        .cf-brand-text { display: flex; flex-direction: column; line-height: 1.05; }
        .cf-brand-text strong { font-size: 1.2rem; letter-spacing: -.03em; }
        .cf-brand-text span { margin-top: 4px; color: #34751f; font-size: .78rem; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
        .cf-nav-links { list-style: none; display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; }
        .cf-nav-links a {
          display: inline-flex; align-items: center; min-height: 42px;
          padding: 9px 12px; border-radius: 9px; color: #263629;
          font-size: .94rem; font-weight: 650; text-decoration: none;
          transition: background .2s ease, color .2s ease;
        }
        .cf-nav-links a:hover, .cf-nav-links a:focus-visible, .cf-nav-links a[aria-current="page"] {
          color: #34751f; background: #f1f8ec; outline: none;
        }
        .cf-nav-links .cf-donate-link {
          margin-left: 4px; padding: 10px 17px; color: #fff;
          background: #5bb227; border-radius: 10px; font-weight: 800;
        }
        .cf-nav-links .cf-donate-link:hover, .cf-nav-links .cf-donate-link[aria-current="page"] { color: #fff; background: #34751f; }
        @media (max-width: 760px) {
          .cf-nav-inner { align-items: flex-start; flex-direction: column; gap: 10px; padding: 12px 18px; }
          .cf-nav-links { width: 100%; justify-content: flex-start; gap: 3px; }
          .cf-nav-links a { min-height: 38px; padding: 8px 10px; font-size: .9rem; }
          .cf-nav-links .cf-donate-link { margin-left: 0; }
        }
        @media (prefers-reduced-motion: reduce) { .cf-nav-links a { transition: none; } }
      `}</style>
      <header className="cf-site-nav">
        <div className="cf-nav-inner">
          <Link className="cf-brand" to="/" aria-label="ChildFirst Tanzania home">
            <img src="/assets/logo.png" alt="" />
            <span className="cf-brand-text"><strong>ChildFirst</strong><span>Tanzania</span></span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="cf-nav-links">
              {links.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} aria-current={location.pathname === item.to ? 'page' : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link className="cf-donate-link" to="/donate" aria-current={location.pathname === '/donate' ? 'page' : undefined}>❤ Donate</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: '#122b18', color: '#f6faf3', padding: '38px 22px 20px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ width: 'min(1120px, 100%)', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '26px' }}>
          <div style={{ maxWidth: '380px' }}>
            <strong style={{ display: 'block', color: '#fff', fontSize: '1.15rem', marginBottom: 8 }}>ChildFirst Tanzania</strong>
            <p style={{ color: '#dcebd5', lineHeight: 1.7, margin: 0 }}>Working with communities to support children’s safety, wellbeing, and opportunities.</p>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#fff', marginBottom: 10 }}>Explore</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
              {links.map(item => <Link key={item.to} to={item.to} style={{ color: '#dcebd5', textDecoration: 'none' }}>{item.label}</Link>)}
              <Link to="/donate" style={{ color: '#dcebd5', textDecoration: 'none' }}>Donate</Link>
            </div>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#fff', marginBottom: 10 }}>Contact</strong>
            <a href="mailto:childrenfirsttanzania@gmail.com" style={{ display: 'block', color: '#dcebd5', marginBottom: 8 }}>childrenfirsttanzania@gmail.com</a>
            <a href="https://wa.me/255683896132" target="_blank" rel="noopener noreferrer" style={{ color: '#dcebd5' }}>WhatsApp: +255 683 896 132</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.16)', marginTop: 28, paddingTop: 16, color: '#dcebd5', fontSize: '.88rem' }}>
          © {new Date().getFullYear()} ChildFirst Tanzania. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
