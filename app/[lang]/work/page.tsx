import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'pt');
    const { work } = dict;

    return (
        <div className="pb-32">
            <section className="pt-20 min-h-[60vh]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <div className="flex items-center justify-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
                        <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
                        {work.title}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter uppercase mb-8">{work.subtitle}</h1>
                    <p className="max-w-3xl mx-auto mb-24 text-xl md:text-2xl text-text-dim leading-relaxed">
                        {work.body}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group cursor-not-allowed opacity-50 transition-opacity hover:opacity-100">
                                <div className="w-full aspect-[4/5] glass-panel mb-8 flex items-center justify-center text-text-dim text-sm font-mono uppercase tracking-widest relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue/5 group-hover:bg-blue/10 transition-colors duration-500" />
                                    [ UNDER NDA ]
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Strategic Realignment {i}</h3>
                                <p className="text-lg text-text-dim">Structural shift, designed to hold over time.</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-40 p-16 md:p-24 glass-panel rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.1)_0%,transparent_70%)]" />
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12 relative z-10">Ready for a structural shift?</h2>
                        <MagneticButton href={`/${lang}/contact`} className="relative z-10 px-12 py-5 font-mono text-base uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center justify-center">
                            {work.cta}
                        </MagneticButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
