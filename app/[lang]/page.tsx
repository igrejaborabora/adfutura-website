import { getDictionary } from "@/lib/dictionary";

export default async function HomePage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as any);
  const { home } = dict;

  return (
    <div className="animate-in">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <span className="section-label">adFutura</span>
          <h1>{home.hero.title}</h1>
          <p>{home.hero.subtitle}</p>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.1rem', whiteSpace: 'pre-line' }}>{home.hero.description}</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href={`/${params.lang}/services`} className="btn btn-primary">{home.hero.cta_services}</a>
            <a href={`/${params.lang}/work`} className="btn btn-outline">{home.hero.cta_work}</a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="glass" style={{ margin: '4rem 0' }}>
        <div className="container">
          <span className="section-label">{home.problem.title}</span>
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ marginBottom: '2rem' }}>{home.problem.subtitle}</h2>
            <p style={{ fontSize: '1.25rem', whiteSpace: 'pre-line', color: 'var(--text-dim)' }}>
              {home.problem.body}
            </p>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section>
        <div className="container">
          <span className="section-label">{home.shift.title}</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2>{home.shift.subtitle}</h2>
            </div>
            <div>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>{home.shift.body_intro}</p>
              <ul style={{ display: 'grid', gap: '1rem' }}>
                {home.shift.points.map((point: string, i: number) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>—</span> {point}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '2rem', fontWeight: '700' }}>{home.shift.footer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Position */}
      <section className="glass" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 112, 243, 0.05))' }}>
        <div className="container">
          <span className="section-label">{home.position.title}</span>
          <div style={{ maxWidth: '800px' }}>
            <h2>{home.position.subtitle}</h2>
            <p style={{ fontSize: '1.25rem', whiteSpace: 'pre-line' }}>{home.position.body}</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section>
        <div className="container">
          <span className="section-label">{home.different.title}</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2>{home.different.subtitle}</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>{home.different.intro}</p>
              <ul style={{ display: 'grid', gap: '1.5rem' }}>
                {home.different.points.map((point: string, i: number) => (
                  <li key={i} style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                    <span style={{ color: 'var(--accent-blue)', marginRight: '1rem' }}>0{i + 1}.</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <p style={{ fontSize: '1.25rem', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '2rem' }}>
                {home.different.outro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Principles Preview */}
      <section className="glass">
        <div className="container">
          <span className="section-label">{home.principles_preview.title}</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {home.principles_preview.points.map((point: string, i: number) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.01)' }}>
                <p style={{ fontSize: '1.1rem' }}>{point}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={`/${params.lang}/insights`} className="btn btn-outline">{home.principles_preview.cta}</a>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section>
        <div className="container">
          <span className="section-label">{home.approach.title}</span>
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>{home.approach.subtitle}</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem' }}>
            {home.approach.points.map((step: string, i: number) => (
              <div key={i} style={{ textAlign: 'center', flex: 1, minWidth: '200px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-blue)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {i + 1}
                </div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation (Footer CTA) */}
      <section className="glass" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <div className="container">
          <span className="section-label">{home.invitation.title}</span>
          <h2 style={{ marginBottom: '2rem' }}>{home.invitation.subtitle}</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-dim)', fontSize: '1.1rem' }}>{home.invitation.intro}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            {home.invitation.points.map((point: string, i: number) => (
              <div key={i} style={{ color: 'var(--accent-cyan)' }}>• {point}</div>
            ))}
          </div>
          <a href={`/${params.lang}/contact`} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>{home.invitation.cta}</a>
        </div>
      </section>
    </div>
  );
}
