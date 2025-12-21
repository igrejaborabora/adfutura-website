import type { Metadata } from "next";
import "../globals.css";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: "adFutura | Intelligence for the AI Age",
  description: "adFutura is a strategic intelligence firm. Translating advanced analytics and AI into direction, systems, and sustained advantage.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as any);
  const { nav, footer } = dict;

  return (
    <html lang={params.lang}>
      <body>
        <nav className="navbar glass">
          <div className="container nav-content">
            <a href={`/${params.lang}`} className="logo">adFutura</a>
            <div className="nav-links">
              <a href={`/${params.lang}/services`} className="nav-link">{nav.services}</a>
              <a href={`/${params.lang}/work`} className="nav-link">{nav.work}</a>
              <a href={`/${params.lang}/insights`} className="nav-link">{nav.insights}</a>
              <a href={`/${params.lang}/contact`} className="nav-link">{nav.contact}</a>
            </div>
            <div className="lang-switcher">
              <a href={params.lang === 'en' ? '/en' : '/en'} style={{ opacity: params.lang === 'en' ? 1 : 0.5 }}>EN</a>
              <span style={{ margin: '0 0.5rem', opacity: 0.3 }}>|</span>
              <a href={params.lang === 'pt' ? '/pt' : '/pt'} style={{ opacity: params.lang === 'pt' ? 1 : 0.5 }}>PT</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="glass" style={{ padding: '6rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
              <div>
                <div className="logo" style={{ marginBottom: '1.5rem' }}>adFutura</div>
                <p style={{ color: 'var(--text-dim)' }}>Intelligence for the AI Age</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Navigation</h4>
                <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
                  <a href={`/${params.lang}/services`}>{nav.services}</a>
                  <a href={`/${params.lang}/work`}>{nav.work}</a>
                  <a href={`/${params.lang}/insights`}>{nav.insights}</a>
                  <a href={`/${params.lang}/contact`}>{nav.contact}</a>
                </div>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Links</h4>
                <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
                  <a href="/privacy">{footer.privacy}</a>
                  <a href="/terms">{footer.terms}</a>
                  <a href="https://linkedin.com" target="_blank">{footer.linkedin}</a>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '500', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span>{footer.signature.direction}</span>
                <span>{footer.signature.capabilities}</span>
                <span style={{ color: 'var(--accent-cyan)' }}>{footer.signature.advantage}</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
