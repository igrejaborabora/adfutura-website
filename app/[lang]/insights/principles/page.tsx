import { getDictionary } from "@/lib/dictionary";

export default async function PrinciplesPage({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang as any);
    const { principles } = dict;

    return (
        <div className="animate-in">
            <section style={{ textAlign: 'center', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span className="section-label">LOCKED</span>
                    <h1 style={{ marginBottom: '4rem', fontSize: '4rem' }}>{principles.title}</h1>

                    <div style={{ display: 'grid', gap: '3rem', textAlign: 'left' }}>
                        {principles.points.map((point: string, i: number) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-cyan)', display: 'block', minWidth: '40px' }}>
                  {i+1}
                </div>
                <p style={{ fontSize: '1.75rem', fontWeight: '400', lineHeight: '1.3' }}>
                  {point}
                </p>
              </div>
            ))}
                </div>

                <div style={{ marginTop: '6rem', opacity: 0.5, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Tudo o que fazemos deriva destes princípios.
                </div>
        </div>
      </section >
    </div >
  );
}
