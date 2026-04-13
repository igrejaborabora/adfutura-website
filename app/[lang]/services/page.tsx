import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'pt');
    const { services } = dict;

    return (
        <div className="pb-32">
            <section className="pt-20 pb-32 text-center bg-gradient-to-b from-transparent to-blue/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-center gap-4 mb-8 font-mono text-xs text-cyan tracking-widest uppercase">
                        <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
                        {services.landing.title}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter uppercase mb-12">
                        <TextReveal>{services.landing.subtitle}</TextReveal>
                    </h1>
                    <p className="max-w-3xl mx-auto mb-16 text-xl md:text-2xl text-text-dim leading-relaxed">
                        {services.landing.body}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {services.landing.domains.map((domain: string, i: number) => (
                            <div key={i} className="px-6 py-3 border border-blue/50 rounded-full font-mono text-sm tracking-widest uppercase bg-blue/5 text-blue">
                                {domain}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory */}
            <section id="advisory" className="py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 glass-panel overflow-hidden rounded-2xl">
                        <div className="p-12 lg:p-16">
                            <span className="font-mono text-cyan text-sm tracking-widest uppercase block mb-4">{services.advisory.title}</span>
                            <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">{services.advisory.subtitle}</h2>
                            <p className="text-xl text-text-dim leading-relaxed mb-12">{services.advisory.intro}</p>
                            
                            <Link href={`/${lang}/contact`} className="inline-block px-8 py-4 font-mono text-sm uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                                {services.advisory.cta}
                            </Link>
                        </div>
                        <div className="p-12 lg:p-16 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                            <h4 className="mb-8 font-mono text-xs uppercase tracking-widest text-text-dim">Includes</h4>
                            <ul className="grid gap-6">
                                {services.advisory.points.map((item: string, i: number) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="text-cyan text-xl leading-none mt-1">→</span>
                                        <span className="text-xl font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section id="platforms" className="py-32 relative">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] mix-blend-screen z-[-1] -translate-y-1/2" />
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 glass-panel aspect-square md:aspect-video lg:aspect-square flex items-center justify-center p-12 rounded-2xl relative overflow-hidden border-cyan/20">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,200,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[gradient_8s_linear_infinite]" />
                            <span className="font-mono text-text-dim uppercase tracking-widest opacity-50 z-10 text-center">[ Platform Architecture Visualization ]</span>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="font-mono text-cyan text-sm tracking-widest uppercase block mb-4">{services.platforms.title}</span>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">{services.platforms.subtitle}</h2>
                            <p className="text-xl text-text-dim leading-relaxed mb-12">{services.platforms.intro}</p>
                            <ul className="grid gap-6 mb-12">
                                {services.platforms.points.map((p: string, i: number) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="text-blue text-xl leading-none mt-1">●</span>
                                        <span className="text-lg">{p}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xl italic text-white/80 mb-12 border-l-4 border-cyan pl-6 py-2">{services.platforms.outro}</p>
                            <Link href={`/${lang}/contact`} className="inline-block px-8 py-4 font-mono text-sm uppercase tracking-widest bg-transparent text-white border border-white/20 hover:border-cyan hover:text-cyan transition-all duration-300">
                                {services.platforms.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation */}
            <section id="innovation" className="py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="glass-panel p-12 lg:p-24 rounded-2xl">
                        <div className="max-w-3xl mb-16">
                            <span className="font-mono text-cyan text-sm tracking-widest uppercase block mb-4">{services.innovation.title}</span>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">{services.innovation.subtitle}</h2>
                            <p className="text-xl text-text-dim leading-relaxed">{services.innovation.intro}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {services.innovation.points.map((p: string, i: number) => (
                                <div key={i} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-xl">
                                    <p className="text-lg">{p}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-16">
                            <p className="text-2xl font-bold text-cyan">{services.innovation.outro}</p>
                            <Link href={`/${lang}/contact`} className="inline-block px-10 py-5 font-mono text-sm uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                                {services.innovation.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation */}
            <section id="transformation" className="py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="font-mono text-cyan text-sm tracking-widest uppercase block mb-4">{services.transformation.title}</span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">{services.transformation.subtitle}</h2>
                        <p className="text-xl text-text-dim leading-relaxed mb-16">{services.transformation.intro}</p>
                        
                        <div className="grid gap-6 mb-16">
                            {services.transformation.points.map((p: string, i: number) => (
                                <div key={i} className="flex gap-8 items-center p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-xl hover:border-cyan/50 transition-colors duration-300">
                                    <span className="text-5xl font-black text-white/10">0{i + 1}</span>
                                    <p className="text-xl">{p}</p>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-2xl text-cyan font-medium mb-12">{services.transformation.outro}</p>
                        <Link href={`/${lang}/contact`} className="inline-block px-8 py-4 font-mono text-sm uppercase tracking-widest bg-transparent text-white border border-white/20 hover:border-cyan hover:text-cyan transition-all duration-300">
                            {services.transformation.cta}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
