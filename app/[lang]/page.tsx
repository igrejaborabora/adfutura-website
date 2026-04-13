import { getDictionary } from "@/lib/dictionary";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import PageTransition from "@/components/ui/PageTransition";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  const { home } = dict;

  return (
    <PageTransition>
      <div className="pb-32">

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase glass-pill w-fit mx-0">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block rounded-full" />
            adFutura / Protocol v2.0
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold leading-[0.9] tracking-tighter uppercase mb-8">
            <TextReveal delay={0.2}>{home.hero.headline}</TextReveal>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-text-dim mb-16 leading-relaxed">
            {home.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <MagneticButton href={`/${lang}/services`} className="px-10 py-4 font-mono text-sm uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center justify-center">
              {home.hero.cta_primary}
            </MagneticButton>
            <MagneticButton href={`/${lang}/work`} className="px-10 py-4 font-mono text-sm uppercase tracking-widest bg-transparent text-text-dim border border-white/10 hover:border-cyan hover:text-cyan hover:bg-cyan/10 transition-all duration-300 inline-flex items-center justify-center">
              {home.hero.cta_secondary}
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* The Problem: High Contrast Protocol Style */}
      <section className="py-32 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            01 / DIAGNOSIS
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-text-dim">{home.problem.title}</h2>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-3xl md:text-5xl font-medium leading-tight mb-12">
                <TextReveal>{home.problem.body}</TextReveal>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift: Data Visualization Feel */}
      <section className="border-y border-white/10">
        <div className="container mx-auto px-0 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="lg:border-r border-b lg:border-b-0 border-white/10 p-12 lg:py-24 lg:pr-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
                <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
                02 / SHIFT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">{home.shift.title}</h2>
              <p className="mt-8 text-xl text-text-dim leading-relaxed">{home.shift.intro}</p>
              <p className="mt-8 text-xl text-white font-medium">{home.shift.conclusion}</p>
            </div>
            <div className="p-12 lg:py-24 lg:pl-16 flex flex-col justify-center gap-8">
              {home.shift.points.map((point: string, i: number) => (
                <div key={i} className="glass-panel p-8 border-l-4 border-l-blue relative overflow-hidden group hover:border-cyan transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-mono text-blue text-sm mb-4 block uppercase tracking-widest group-hover:text-cyan transition-colors">DATA POINT 0{i + 1}</span>
                  <p className="text-xl font-medium relative z-10">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Position */}
      <section className="py-32 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            OUR POSITION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">{home.position.title}</h2>
          <p className="text-2xl text-text-dim mb-8 max-w-3xl">{home.position.subtitle}</p>
          <p className="text-xl leading-relaxed mb-8 max-w-3xl">{home.position.body}</p>
          <p className="text-xl text-cyan font-medium">{home.position.focus}</p>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
                <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
                DIFFERENTIATION
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">{home.differentiation.title}</h2>
              <p className="text-2xl text-text-dim mb-8">{home.differentiation.subtitle}</p>
              <p className="text-xl leading-relaxed">{home.differentiation.body}</p>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              {home.differentiation.list.map((item: string, i: number) => (
                <div key={i} className="glass-panel p-8">
                  <p className="text-2xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            METHODOLOGY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16">{home.approach.title}</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {home.approach.loop.map((step: string, i: number) => (
              <div key={i} className="flex-1 w-full text-center flex flex-col items-center">
                <div className="w-full max-w-[200px] aspect-square rounded-full border border-blue glass-panel flex items-center justify-center mb-6">
                  <span className="text-xl font-medium px-4">{step}</span>
                </div>
                {i < home.approach.loop.length - 1 && (
                  <div className="text-3xl text-text-dim md:-rotate-90 mt-4 md:mt-0">↓</div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center mt-20 text-2xl font-medium">{home.approach.output}</p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            ARCHITECTURES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16">{home.services_preview.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {home.services_preview.list.map((service: string, i: number) => (
              <div key={i} className="glass-panel p-12 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-3xl font-bold uppercase tracking-tight">{service}</h3>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl mb-8">{home.services_preview.output}</p>
            <MagneticButton href={`/${lang}/services`} className="px-10 py-4 font-mono text-sm uppercase tracking-widest bg-transparent text-text-dim border border-white/10 hover:border-cyan hover:text-cyan hover:bg-cyan/10 transition-all duration-300 inline-flex items-center justify-center">
              {home.services_preview.cta}
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="py-32 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            MAGNITUDE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">{home.work_preview.title}</h2>
          <p className="text-2xl text-text-dim max-w-3xl mx-auto mb-16 leading-relaxed">{home.work_preview.body}</p>
          <MagneticButton href={`/${lang}/work`} className="px-10 py-4 font-mono text-sm uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center justify-center">
            {home.work_preview.cta}
          </MagneticButton>
        </div>
      </section>

      {/* Invitation */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-[radial-gradient(circle,rgba(0,102,255,0.15)_0%,transparent_70%)] z-[-1]" />
        
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter uppercase mb-16 leading-tight">
            <TextReveal>{home.invitation.subtitle}</TextReveal>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {home.invitation.points.map((point: string, i: number) => (
              <span key={i} className="font-mono text-cyan border border-cyan/50 bg-cyan/5 px-4 py-2 text-sm tracking-widest uppercase">
                {point}
              </span>
            ))}
          </div>
          <MagneticButton href={`/${lang}/contact`} className="px-12 py-5 font-mono text-base uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center justify-center">
            {home.invitation.cta}
          </MagneticButton>
        </div>
      </section>

    </div>
    </PageTransition>
  );
}
