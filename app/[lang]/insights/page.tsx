import { getDictionary } from "@/lib/dictionary";

export default async function InsightsPage({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang as any);
    const { insights } = dict;

    return (
        <div className="animate-in">
            <section style={{ minHeight: '80vh' }}>
                <div className="container">
                    <span className="section-label">{insights.title}</span>
                    <h1 style={{ marginBottom: '4rem' }}>{insights.body}</h1>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <a href={`/${params.lang}/insights/principles`} className="glass" style={{ padding: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'var(--transition-smooth)' }}>
                            <div>
                                <h3 style={{ marginBottom: '0.5rem' }}>{insights.list[0]}</h3>
                                <p style={{ color: 'var(--text-dim)' }}>Core constraints that derive our work.</p>
                            </div>
                            <span style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>→</span>
                        </a>

                        {insights.list.slice(1).map((item: string, i: number) => (
                            <div key={i} className="glass" style={{ padding: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, cursor: 'not-allowed' }}>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>{item}</h3>
                                    <p style={{ color: 'var(--text-dim)' }}>Coming soon.</p>
                                </div>
                                <span style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>[Locked]</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
