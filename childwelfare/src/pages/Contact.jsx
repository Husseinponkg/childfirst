
import { SiteNavigation, SiteFooter } from './SiteNavigation';
const CONTACT_EMAIL = 'childrenfirsttanzania@gmail.com';
const WHATSAPP_NUMBER = '255683896132'; // International format: digits only
const DISPLAY_PHONE = '+255 683 896 132';

export default function Contact() {
  return (
    <>
      <SiteNavigation />
      <main className="contact-page">
      <style>{`
        .contact-page{--green:#5BB227;--green-dark:#34751F;--deep:#183B20;--pale:#F1F8EC;--ink:#17251b;--muted:#647067;min-height:100vh;color:var(--ink);background:#fff;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        .contact-page *{box-sizing:border-box}
        .contact-hero{position:relative;overflow:hidden;padding:88px 24px 82px;color:#fff;background:radial-gradient(circle at 85% 20%,rgba(91,178,39,.24),transparent 30%),linear-gradient(120deg,#102c1b 0%,var(--deep) 60%,#102b20 100%)}
        .contact-wrap{width:min(1100px,100%);margin:0 auto}
        .contact-eyebrow{display:inline-flex;align-items:center;gap:9px;margin:0 0 18px;padding:8px 13px;border:1px solid rgba(91,178,39,.35);border-radius:99px;color:#b8e79e;background:rgba(91,178,39,.12);font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .contact-eyebrow:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--green)}
        .contact-hero h1{max-width:760px;margin:0;font-size:clamp(2.5rem,6vw,4.5rem);line-height:1.04;letter-spacing:-.045em}
        .contact-hero h1 span{color:#83cf59}
        .contact-hero>div>p{max-width:620px;margin:22px 0 0;color:rgba(255,255,255,.78);font-size:1.08rem;line-height:1.8}
        .contact-main{padding:72px 24px 88px;background:#fff}
        .contact-intro{max-width:680px;margin-bottom:34px}
        .contact-intro h2{margin:0 0 12px;color:var(--deep);font-size:clamp(1.8rem,4vw,2.6rem);letter-spacing:-.035em}
        .contact-intro p{margin:0;color:var(--muted);line-height:1.8}
        .contact-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
        .contact-card{display:flex;flex-direction:column;align-items:flex-start;padding:30px;border:1px solid #e4eddf;border-radius:22px;background:#fff;box-shadow:0 14px 38px rgba(24,59,32,.06);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
        .contact-card:hover{transform:translateY(-4px);border-color:rgba(91,178,39,.55);box-shadow:0 20px 45px rgba(24,59,32,.11)}
        .contact-icon{display:grid;width:58px;height:58px;margin-bottom:22px;place-items:center;border-radius:17px;color:var(--green-dark);background:var(--pale)}
        .contact-icon svg{width:27px;height:27px}
        .contact-card h3{margin:0 0 9px;color:var(--deep);font-size:1.3rem}
        .contact-card p{margin:0 0 20px;color:var(--muted);line-height:1.7}
        .contact-detail{margin:0 0 22px;color:var(--deep);font-weight:750;overflow-wrap:anywhere}
        .contact-action{display:inline-flex;align-items:center;justify-content:center;gap:9px;margin-top:auto;padding:12px 18px;border:0;border-radius:10px;color:#fff;background:var(--green-dark);font:inherit;font-weight:750;text-decoration:none;transition:background .2s ease,transform .2s ease}
        .contact-action:hover{background:var(--deep);transform:translateY(-1px)}
        .contact-note{display:flex;gap:16px;align-items:flex-start;margin-top:28px;padding:22px 24px;border-radius:16px;color:var(--deep);background:var(--pale)}
        .contact-note strong{display:block;margin-bottom:4px}
        .contact-note p{margin:0;color:#53664f;line-height:1.7}
        .contact-note-mark{color:var(--green-dark);font-size:1.4rem;line-height:1}
        @media(max-width:680px){.contact-hero{padding:64px 20px 60px}.contact-main{padding:48px 20px 60px}.contact-cards{grid-template-columns:1fr}.contact-card{padding:24px}}
        @media(prefers-reduced-motion:reduce){.contact-card,.contact-action{transition:none}.contact-card:hover,.contact-action:hover{transform:none}}
      `}</style>

      <section className="contact-hero">
        <div className="contact-wrap">
          <span className="contact-eyebrow">We’re here for children</span>
          <h1>Let’s make a difference <span>together.</span></h1>
          <p>Have a question, want to support our work, or explore a partnership? Get in touch with ChildFirst Tanzania directly by email or WhatsApp.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-wrap">
          <div className="contact-intro">
            <h2>Contact our team</h2>
            <p>We welcome enquiries from families, community members, volunteers, donors, and organizations that share our commitment to children’s wellbeing across Tanzania.</p>
          </div>

          <div className="contact-cards">
            <article className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-11Z" stroke="currentColor" strokeWidth="1.8"/><path d="m4.5 6 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Email us</h3>
              <p>For general enquiries, donations, partnerships, or information about our programmes.</p>
              <div className="contact-detail">{CONTACT_EMAIL}</div>
              <a className="contact-action" href={`mailto:${CONTACT_EMAIL}`}>Send an email <span aria-hidden="true">↗</span></a>
            </article>

            <article className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20.1 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.3 8.1c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.6 1.1 1.5 2 2.6 2.6.2.1.4.1.6-.1l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.4c0 .4 0 .7-.6 1-.6.3-1.6.4-3.1-.3-1.5-.7-2.9-2-3.8-3.4-.9-1.4-1.2-2.5-.9-3.1Z" fill="currentColor"/></svg>
              </div>
              <h3>Chat on WhatsApp</h3>
              <p>Reach out for a direct conversation with our team. WhatsApp will open in a new tab.</p>
              <div className="contact-detail">{DISPLAY_PHONE}</div>
              <a className="contact-action" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">Message us on WhatsApp <span aria-hidden="true">↗</span></a>
            </article>
          </div>

          <div className="contact-note">
            <span className="contact-note-mark" aria-hidden="true">✳</span>
            <div>
              <strong>Every child deserves care, safety, and opportunity.</strong>
              <p>Thank you for your interest in ChildFirst Tanzania. Your questions, ideas, and support can help strengthen the communities around our children.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}
