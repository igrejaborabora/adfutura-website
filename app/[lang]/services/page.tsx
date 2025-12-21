import { getDictionary } from "@/lib/dictionary";

export default async function ServicesPage({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang as any);
    const { services } = dict;

    return (
        <div className="animate-in">
            <section style={{ textAlign: 'center', background: 'linear-gradient(to bottom, var(--bg-color), rgba(0, 112, 243, 0.05))' }}>
                <div className="container">
                    <span className="section-label">{services.landing.title}</span>
                    <h1 style={{ marginBottom: '2rem' }}>{services.landing.subtitle}</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'var(--text-dim)' }}>
                        {services.landing.body}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        {services.landing.domains.map((domain: string, i: number) => (
                            <div key={i} style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--accent-blue)', borderRadius: '20px', fontSize: '1rem' }}>
                                {domain}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory */}
            <section id="advisory" className="glass">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <span className="section-label">{services.advisory.title}</span>
                            <h2>{services.advisory.subtitle}</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{services.advisory.intro}</p>
                            <ul style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
                                {services.advisory.points.map((p: string, i: number) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-dim)' }}>
                                        <span style={{ color: 'var(--accent-cyan)' }}>•</span> {p}
                                    </li>
                                ))}
                            </ul>
                            <a href={`/${params.lang}/contact`} className="btn btn-primary">{services.advisory.cta}</a>
                        </div>
                        <div style={{ padding: '3rem', borderLeft: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.01)' }}>
                            <h4 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', opacity: 0.6 }}>Includes</h4>
                            <ul style={{ display: 'grid', gap: '1.5rem' }}>
                                {services.advisory.includes.map((item: string, i: number) => (
                                    <li key={i} style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section id="platforms">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', direction: 'rtl' }}>
                        <div style={{ direction: 'ltr' }}>
                            <span className="section-label">{services.platforms.title}</span>
                            <h2>{services.platforms.subtitle}</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{services.platforms.intro}</p>
                            <ul style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
                                {services.platforms.points.map((p: string, i: number) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-dim)' }}>
                                        <span style={{ color: 'var(--accent-blue)' }}>•</span> {p}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', fontStyle: 'italic' }}>{services.platforms.outro}</p>
                            <a href={`/${params.lang}/contact`} className="btn btn-outline">{services.platforms.cta}</a>
                        </div>
                        <div style={{ direction: 'ltr', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)' }}>
                                [ Platform Architecture Visualization ]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation */}
            <section id="innovation" className="glass">
                <div className="container">
                    <span className="section-label">{services.innovation.title}</span>
                    <h2>{services.innovation.subtitle}</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px' }}>{services.innovation.intro}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        {services.innovation.points.map((p: string, i: number) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid var(--glass-border)', borderRadius: '4px' }}>
                                <p>{p}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', margin: '4rem 0' }}>{services.innovation.outro}</p>
                    <div style={{ textAlign: 'center' }}>
                        <a href={`/${params.lang}/contact`} className="btn btn-primary">{services.innovation.cta}</a>
                    </div>
                </div>
            </section>

            {/* Transformation */}
            <section id="transformation">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <span className="section-label">{services.transformation.title}</span>
                        <h2>{services.transformation.subtitle}</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>{services.transformation.intro}</p>
                        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
                            {services.transformation.points.map((p: string, i: number) => (
                                <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
                                    <span style={{ fontSize: '2rem', opacity: 0.2, fontWeight: '800' }}>0{i + 1}</span>
                                    <p style={{ fontSize: '1.1rem' }}>{p}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', marginBottom: '3rem' }}>{services.transformation.outro}</p>
                        <a href={`/${params.lang}/contact`} className="btn btn-outline">{services.transformation.cta}</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
