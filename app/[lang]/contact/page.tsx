'use client';

import { useEffect, useState, use } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = use(params);
    const [dict, setDict] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        import(`../../../dictionaries/${lang === 'pt' ? 'pt' : 'en'}.json`)
            .then(module => setDict(module.default))
            .catch(() => import('../../../dictionaries/en.json').then(module => setDict(module.default)));
    }, [lang]);

    if (!dict) return <div className="min-h-screen" />;

    const { contact } = dict;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simular envio de email/servidor
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Formulário submetido!");
        setSuccess(true);
        setIsSubmitting(false);
    };

    return (
        <div className="pb-32">
            <section className="pt-20 min-h-[80vh]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        
                        {/* Texto e Convite */}
                        <div className="lg:pr-12">
                            <div className="flex items-center gap-4 mb-12 font-mono text-xs text-cyan tracking-widest uppercase">
                                <span className="w-2 h-2 bg-cyan shadow-[0_0_10px_var(--accent-cyan)] block" />
                                {contact.title}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">{contact.invitation.title}</h1>
                            <h2 className="text-2xl font-medium mb-12 text-text-dim">
                                {contact.invitation.subtitle}
                            </h2>
                            <p className="text-xl mb-8 leading-relaxed">{contact.invitation.intro}</p>
                            <ul className="grid gap-6 mb-12">
                                {contact.invitation.points.map((p: string, i: number) => (
                                    <li key={i} className="flex gap-6 items-center text-xl">
                                        <span className="text-cyan font-bold">→</span> {p}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg opacity-60 border-l-2 border-white/20 pl-4 py-2 italic">{contact.invitation.outro}</p>
                        </div>

                        {/* Formulário Glassmorphism */}
                        <div className="glass-panel p-10 md:p-16 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 blur-[80px] rounded-full z-0" />
                            
                            {success ? (
                                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-20 h-20 rounded-full border-2 border-cyan flex items-center justify-center mb-8 bg-cyan/10 text-cyan text-3xl">✓</div>
                                    <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Transmission Received</h3>
                                    <p className="text-text-dim text-lg">We will be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative z-10 grid gap-8">
                                    <div className="grid gap-2 group">
                                        <label className="font-mono text-xs uppercase tracking-widest text-text-dim group-focus-within:text-cyan transition-colors">{contact.form.name}</label>
                                        <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-lg outline-none focus:border-cyan transition-colors" />
                                    </div>
                                    <div className="grid gap-2 group">
                                        <label className="font-mono text-xs uppercase tracking-widest text-text-dim group-focus-within:text-cyan transition-colors">{contact.form.company}</label>
                                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-lg outline-none focus:border-cyan transition-colors" />
                                    </div>
                                    <div className="grid gap-2 group">
                                        <label className="font-mono text-xs uppercase tracking-widest text-text-dim group-focus-within:text-cyan transition-colors">{contact.form.email}</label>
                                        <input required type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-lg outline-none focus:border-cyan transition-colors" />
                                    </div>
                                    <div className="grid gap-2 group">
                                        <label className="font-mono text-xs uppercase tracking-widest text-text-dim group-focus-within:text-cyan transition-colors">{contact.form.message}</label>
                                        <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-lg outline-none focus:border-cyan transition-colors resize-none"></textarea>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="mt-8 px-8 py-5 font-mono text-sm uppercase tracking-widest bg-white text-black font-bold hover:bg-transparent hover:text-white border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Transmitting...' : contact.form.submit}
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
