import type { Metadata } from "next";
import "../globals.css";
import { getDictionary } from "@/lib/dictionary";
import SmoothScroll from "@/components/providers/SmoothScroll";
import DynamicBackground from "@/components/ui/DynamicBackground";
import Link from "next/link";

export const metadata: Metadata = {
  title: "adFutura | Intelligence for the AI Age",
  description: "adFutura is a strategic intelligence firm. Translating advanced analytics and AI into direction, systems, and sustained advantage.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'pt');
  const { nav, footer } = dict;

  return (
    <html lang={lang}>
      <body className="antialiased text-white selection:bg-cyan selection:text-black">
        <DynamicBackground />
        <SmoothScroll>
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full h-[90px] z-[999] glass-nav transition-all duration-300">
            <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">
              
              {/* Logo */}
              <Link href={`/${lang}`} className="flex items-center gap-3">
                <img src="/logo.svg" alt="adFutura" className="h-8 md:h-10 w-auto" />
              </Link>
              
              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link href={`/${lang}/services`} className="uppercase font-mono text-xs tracking-wider hover:text-cyan transition-colors">{nav.services}</Link>
                <Link href={`/${lang}/work`} className="uppercase font-mono text-xs tracking-wider hover:text-cyan transition-colors">{nav.work}</Link>
                <Link href={`/${lang}/insights`} className="uppercase font-mono text-xs tracking-wider hover:text-cyan transition-colors">{nav.insights}</Link>
                <Link href={`/${lang}/contact`} className="uppercase font-mono text-xs tracking-wider hover:text-cyan transition-colors">{nav.contact}</Link>
              </div>
              
              {/* Lang Switcher */}
              <div className="font-mono text-xs tracking-widest flex items-center">
                <Link href="/en" className={`hover:text-cyan transition-opacity ${lang === 'en' ? 'opacity-100 text-white' : 'opacity-40'}`}>EN</Link>
                <span className="mx-2 opacity-20">/</span>
                <Link href="/pt" className={`hover:text-cyan transition-opacity ${lang === 'pt' ? 'opacity-100 text-white' : 'opacity-40'}`}>PT</Link>
              </div>
              
            </div>
          </nav>
          
          <main className="min-h-screen pt-[90px]">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="glass-panel border-x-0 border-b-0 py-20 mt-32">
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <img src="/logo.svg" alt="adFutura" className="h-8 md:h-10 w-auto" />
                  </div>
                  <p className="text-text-dim max-w-sm">Intelligence for the AI Age</p>
                </div>
                
                {/* Navigation */}
                <div>
                  <h4 className="text-cyan text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
                  <div className="grid gap-4 text-sm font-medium">
                    <Link href={`/${lang}/services`} className="hover:text-cyan transition-colors">{nav.services}</Link>
                    <Link href={`/${lang}/work`} className="hover:text-cyan transition-colors">{nav.work}</Link>
                    <Link href={`/${lang}/insights`} className="hover:text-cyan transition-colors">{nav.insights}</Link>
                    <Link href={`/${lang}/contact`} className="hover:text-cyan transition-colors">{nav.contact}</Link>
                  </div>
                </div>
                
                {/* Legal */}
                <div>
                  <h4 className="text-cyan text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
                  <div className="grid gap-4 text-sm font-medium">
                    <Link href="/privacy" className="hover:text-cyan transition-colors">{footer.privacy}</Link>
                    <Link href="/terms" className="hover:text-cyan transition-colors">{footer.terms}</Link>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">{footer.linkedin}</a>
                  </div>
                </div>
                
              </div>
              
              {/* Bottom Signature */}
              <div className="border-t border-white/10 pt-12 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-lg md:text-xl font-medium tracking-tight">
                  <span className="opacity-80">{footer.signature.direction}</span>
                  <span className="opacity-80">{footer.signature.capabilities}</span>
                  <span className="text-cyan">{footer.signature.advantage}</span>
                </div>
                <div className="text-xs text-text-dim font-mono tracking-widest uppercase">
                  © {new Date().getFullYear()} adFutura
                </div>
              </div>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
