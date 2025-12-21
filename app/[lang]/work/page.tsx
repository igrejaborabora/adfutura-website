import { getDictionary } from "@/lib/dictionary";

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'pt');
    const { work } = dict;

    return (
        <div className="animate-in">
            <section style={{ textAlign: 'center', minHeight: '60vh' }}>
                <div className="container">
                    <span className="section-label">{work.title}</span>
                    <h1 style={{ marginBottom: '2rem' }}>{work.subtitle}</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.25rem', color: 'var(--text-dim)' }}>
                        {work.body}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{ textAlign: 'left' }}>
                                <div style={{ width: '100%', aspectRatio: '4/5', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    {work.placeholder}
                                </div>
                                <h3>{work.placeholder} {i}</h3>
                                <p style={{ color: 'var(--text-dim)' }}>Structural shift, designed to hold over time.</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '8rem', padding: '6rem', border: '1px solid var(--glass-border)', background: 'linear-gradient(45deg, transparent, rgba(0, 223, 216, 0.05))' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Ready for a structural shift?</h2>
                        <a href={`/${lang}/contact`} className="btn btn-primary">{work.cta}</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
