import { getDictionary } from "@/lib/dictionary";

export default async function PrinciplesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'pt');
  const { principles } = dict;

  return (
    <div className="pb-32">
      <section className="min-h-[90vh] pt-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            LOCKED
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16">{principles.title}</h1>

          <div className="grid gap-12">
            {principles.points.map((point: string, i: number) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="text-2xl md:text-3xl font-black text-cyan min-w-[3rem] mt-1">
                  {i + 1}
                </span>
                <p className="text-2xl md:text-3xl font-medium leading-tight">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-12 border-t border-white/10 opacity-50 font-mono text-sm tracking-widest uppercase">
            {principles.footer}
          </div>
        </div>
      </section>
    </div>
  );
}
