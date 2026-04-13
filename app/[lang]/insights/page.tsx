import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

export default async function InsightsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'pt');
    const { insights } = dict;

    return (
        <div className="pb-32">
            <section className="min-h-[80vh] pt-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
                        <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
                        {insights.title}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16">{insights.body}</h1>

                    <div className="grid gap-8 max-w-4xl">
                        <Link href={`/${lang}/insights/principles`} className="glass-panel p-8 md:p-12 flex flex-col md:flex-row justify-between md:items-center gap-6 hover:bg-white/10 transition-all duration-500 rounded-2xl group">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-cyan transition-colors">{insights.list[0]}</h3>
                                <p className="text-lg text-text-dim">Core constraints that derive our work.</p>
                            </div>
                            <span className="text-4xl text-cyan transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Link>

                        {insights.list.slice(1).map((item: string, i: number) => (
                            <div key={i} className="glass-panel p-8 md:p-12 flex flex-col md:flex-row justify-between md:items-center gap-6 opacity-40 cursor-not-allowed rounded-2xl">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{item}</h3>
                                    <p className="text-lg text-text-dim">Coming soon.</p>
                                </div>
                                <span className="font-mono text-text-dim tracking-widest uppercase">[Locked]</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
