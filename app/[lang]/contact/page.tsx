import { getDictionary } from "@/lib/dictionary";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const { contact } = dict;

    return (
        <div className="animate-in">
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>
                        <div>
                            <span className="section-label">{contact.title}</span>
                            <h1 style={{ marginBottom: '2rem' }}>{contact.invitation.title}</h1>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '3rem', color: 'var(--text-dim)' }}>
                                {contact.invitation.subtitle}
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{contact.invitation.intro}</p>
                            <ul style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                                {contact.invitation.points.map((p: string, i: number) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}>
                                        <span style={{ color: 'var(--accent-cyan)' }}>→</span> {p}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ opacity: 0.7 }}>{contact.invitation.outro}</p>
                        </div>

                        <div className="glass" style={{ padding: '4rem' }}>
                            <form style={{ display: 'grid', gap: '2rem' }}>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.6 }}>{contact.form.name}</label>
                                    <input type="text" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '0.5rem 0', color: 'white', fontSize: '1.1rem', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.6 }}>{contact.form.company}</label>
                                    <input type="text" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '0.5rem 0', color: 'white', fontSize: '1.1rem', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.6 }}>{contact.form.email}</label>
                                    <input type="email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '0.5rem 0', color: 'white', fontSize: '1.1rem', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.6 }}>{contact.form.message}</label>
                                    <textarea rows={4} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '0.5rem 0', color: 'white', fontSize: '1.1rem', outline: 'none', resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                                    {contact.form.submit}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
