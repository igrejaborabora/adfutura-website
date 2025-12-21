import { getDictionary } from "@/lib/dictionary";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  const { home } = dict;

  return (
    <div style={{ paddingBottom: '10vh' }}>

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label">
            <span>adFutura / Protocol v2.0</span>
          </div>
          <h1 style={{ marginBottom: '2rem' }}>
            <TextReveal delay={0.2}>{home.hero.headline}</TextReveal>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.5rem', color: 'var(--text-dim)', marginBottom: '4rem', lineHeight: '1.4' }}>
            {home.hero.subheadline}
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <MagneticButton href={`/${lang}/services`} className="btn btn-primary">
              {home.hero.cta_primary}
            </MagneticButton>
            <MagneticButton href={`/${lang}/work`} className="btn btn-outline">
              {home.hero.cta_secondary}
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* The Problem: High Contrast Protocol Style */}
      <section style={{ padding: '10rem 0', background: '#050505' }}>
        <div className="container">
          <span className="section-label">01 / DIAGNOSIS</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-dim)' }}>{home.problem.title}</h2>
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1', marginBottom: '3rem' }}>
                <TextReveal>{home.problem.body}</TextReveal>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift: Data Visualization Feel */}
      <section style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
          <div style={{ borderRight: '1px solid var(--glass-border)', padding: '6rem 4rem 6rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label">02 / SHIFT</span>
            <h2>{home.shift.title}</h2>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'var(--text-dim)' }}>{home.shift.intro}</p>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'white' }}>{home.shift.conclusion}</p>
          </div>
          <div style={{ padding: '6rem 0 6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
            {home.shift.points.map((point: string, i: number) => (
              <div key={i} className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-blue)' }}>
                <span className="mono" style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>DATA POINT 0{i + 1}</span>
                <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Preview: Horizontal Scroll Feel (Static for now, but styled) */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <span className="section-label">03 / CORE PRINCIPLES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {home.principles_preview.list.map((point: string, i: number) => (
              <div key={i} style={{ height: '400px', border: '1px solid #333', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.4s', cursor: 'grab' }} className="glass">
                <span className="mono" style={{ fontSize: '3rem', opacity: 0.2 }}>0{i + 1}</span>
                <p style={{ fontSize: '1.75rem', lineHeight: '1.2' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section style={{ padding: '15rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '3rem' }}>
            <TextReveal>{home.invitation.subtitle}</TextReveal>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            {home.invitation.points.map((point: string, i: number) => (
              <span key={i} className="mono" style={{ color: 'var(--accent-blue)', border: '1px solid var(--accent-blue)', padding: '0.5rem 1rem' }}>
                {point}
              </span>
            ))}
          </div>
          <MagneticButton href={`/${lang}/contact`} className="btn btn-primary">
            {home.invitation.cta}
          </MagneticButton>
        </div>
      </section>

    </div>
  );
}
