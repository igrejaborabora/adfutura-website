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
            <MagneticButton href={`/${lang}/services`} className="gradient-border-glow px-10 py-4 font-mono text-sm uppercase tracking-widest bg-white/10 text-white font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center rounded-2xl">
              {home.hero.cta_primary}
            </MagneticButton>
            <MagneticButton href={`/${lang}/work`} className="px-10 py-4 font-mono text-sm uppercase tracking-widest bg-transparent text-text-dim border border-white/10 hover:border-cyan hover:text-cyan hover:bg-cyan/10 transition-all duration-300 inline-flex items-center justify-center rounded-2xl">
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
            <div className="p-12 lg:py-24 lg:pl-16 flex flex-col justify-center gap-6">
              {home.shift.points.map((point: string, i: number) => (
                <div key={i} className="glass-panel p-8 rounded-xl relative overflow-hidden group hover:border-cyan/50 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-6 relative z-10">
                    <span className="font-mono text-cyan text-4xl leading-none opacity-50 font-black">0{i + 1}</span>
                    <p className="text-xl font-medium pt-1">{point}</p>
                  </div>
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

      {/* Approach - Layered Depth */}
      <section className="py-32 bg-black/60 backdrop-blur-md overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            METHODOLOGY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-24">{home.approach.title}</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-0 pl-0 md:pl-10">
            {home.approach.loop.map((step: string, i: number) => (
              <div 
                key={i} 
                className="glass-panel p-8 w-full md:w-72 rounded-2xl relative -mt-4 md:mt-0 md:-ml-12 first:mt-0 first:ml-0 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
                style={{ zIndex: i + 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <span className="text-cyan font-mono text-sm block mb-12 font-bold tracking-widest">0{i+1}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight relative z-10">{step}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-24 text-2xl font-medium">{home.approach.output}</p>
        </div>
      </section>

      {/* Services Preview - High-End Glass Cards */}
      <section className="py-32 relative overflow-hidden">
        {/* Glow de ambiente */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue/5 blur-[120px] mix-blend-screen z-[-1]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
            <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
            ARCHITECTURES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16">{home.services_preview.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {home.services_preview.list.map((service: string, i: number) => (
              <div key={i} className="group relative p-[1px] rounded-2xl overflow-hidden cursor-pointer">
                {/* 1. Animated Glow Border */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,200,255,0.8)_360deg)] animate-[spin_4s_linear_infinite] group-hover:bg-[conic-gradient(from_0deg,transparent_0_200deg,rgba(30,111,217,1)_360deg)] transition-all duration-500" />
                
                {/* 2. Inner Card */}
                <div className="relative h-full bg-[#050B16] rounded-2xl p-12 overflow-hidden flex flex-col justify-end min-h-[300px] z-10 shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
                  
                  {/* WebGL-like internal mesh gradient */}
                  <div className={`absolute -bottom-[50%] -right-[50%] w-[150%] h-[150%] rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-opacity duration-700 ${i % 2 === 0 ? 'bg-[#00C8FF]' : 'bg-[#1E6FD9]'}`} />
                  
                  {/* Subtle noise */}
                  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]" />
                  
                  <span className="font-mono text-cyan text-xs tracking-widest uppercase mb-4 relative z-20">0{i + 1} //</span>
                  <h3 className="text-4xl font-bold uppercase tracking-tight relative z-20 group-hover:translate-x-2 transition-transform duration-500">{service}</h3>
                </div>
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
          <MagneticButton href={`/${lang}/work`} className="gradient-border-glow px-10 py-4 font-mono text-sm uppercase tracking-widest bg-white/10 text-white font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center rounded-2xl">
            {home.work_preview.cta}
          </MagneticButton>
        </div>
      </section>

      {/* The Invitation - Liquid Glass Refraction */}
      <section className="py-40 text-center relative flex justify-center items-center px-4">
        {/* Animated Orbs behind the Glass Container */}
        <div className="absolute inset-0 flex justify-center items-center opacity-70">
          <div className="w-[600px] h-[600px] bg-cyan/20 blur-[100px] rounded-full absolute mix-blend-screen animate-[spin_10s_linear_infinite]" />
          <div className="w-[500px] h-[500px] bg-blue/30 blur-[120px] rounded-full absolute mix-blend-screen animate-[spin_15s_linear_infinite_reverse]" />
        </div>

        {/* Liquid Glass Container */}
        <div className="liquid-glass w-full max-w-5xl rounded-[3rem] p-16 md:p-24 z-10 flex flex-col items-center">
          <div className="liquid-glass-blob" />
          
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter uppercase mb-12 leading-tight relative z-10">
            <TextReveal>{home.invitation.subtitle}</TextReveal>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-16 relative z-10">
            {home.invitation.points.map((point: string, i: number) => (
              <span key={i} className="font-mono text-white/80 border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 text-sm tracking-widest uppercase">
                {point}
              </span>
            ))}
          </div>
          <MagneticButton href={`/${lang}/contact`} className="gradient-border-glow px-12 py-5 font-mono text-base uppercase tracking-widest bg-white/10 text-white font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center rounded-full z-10">
            {home.invitation.cta}
          </MagneticButton>
        </div>
      </section>

    </div>
    </PageTransition>
  );
}
