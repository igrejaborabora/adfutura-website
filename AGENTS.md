# AGENTS.md — adFutura Website

> Documento de referência para agentes de IA e developers.
> Descreve o estado atual do repo, problemas identificados e o que precisa de ser feito.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16.1.0 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v3.4.17 + `globals.css` (utilities layer) |
| Design | Glassmorphism (backdrop-blur, translucent panels, dynamic orbs) |
| Animations | Framer Motion + Lenis (smooth scroll) |
| i18n | Dicionários JSON manuais (`dictionaries/en.json`, `dictionaries/pt.json`) |
| Deploy | Vercel (projeto `adfutura-website`, team `team_nQ4T8fC2QzGkUZxSoI4x00bc`) |
| Repo | `igrejaborabora/adfutura-website` (branch `master`) |
| URL | https://adfutura-website.vercel.app |

---

## Estrutura do Repo

```
app/
  [lang]/
    layout.tsx              # Navbar (glass-nav) + Footer (glass-panel) + SmoothScroll + DynamicBackground
    page.tsx                # Homepage — Tailwind, PageTransition, glassmorphism sections
    services/page.tsx       # Serviços — Advisory, Platforms, Innovation, Transformation
    work/page.tsx           # Work — "Under NDA" placeholders estilizados
    insights/page.tsx       # Insights — 1 link ativo (Principles), resto "Locked"
    insights/principles/page.tsx  # Princípios — bilingue via dicionário
    contact/page.tsx        # Contacto — client component com form funcional (simulado)
  globals.css               # Tailwind directives + CSS variables + glass utilities
components/
  ui/
    TextReveal.tsx          # Animação de palavras com Framer Motion
    MagneticButton.tsx      # Botão magnético com Framer Motion
    DynamicBackground.tsx   # Fundo dinâmico com orbs blur (glassmorphism)
    PageTransition.tsx      # Wrapper Framer Motion para animação de entrada de página
  providers/
    SmoothScroll.tsx        # Wrapper Lenis (opções deprecadas removidas)
dictionaries/
  en.json                   # Conteúdo EN (~228 linhas)
  pt.json                   # Conteúdo PT (~228 linhas)
lib/
  dictionary.ts             # getDictionary() — server-only
proxy.ts                    # Redirect / → /en (substitui middleware.ts deprecated)
tailwind.config.ts          # Configuração Tailwind com cores brand e glass utilities
postcss.config.js           # PostCSS com Tailwind + Autoprefixer
AGENTS.md                   # Este ficheiro
```

---

## Estado Atual — Redesign Glassmorphism (Abril 2026)

### ✅ CONCLUÍDO

#### Fase 1 — Correções Críticas
- [x] CSS classes em falta → substituídas por Tailwind classes
- [x] Hero padding-top → `main` tem `pt-[90px]` para compensar navbar fixa
- [x] Texto hardcoded PT na página Principles → usa `principles.footer` do dicionário
- [x] Lista duplicada Advisory → corrigida para exibir `points` uma única vez
- [x] Middleware deprecado → renomeado para `proxy.ts` com export `proxy`
- [x] Lenis opções deprecadas → `orientation` e `gestureOrientation` removidas
- [x] `--accent-cyan` em falta → adicionada ao `globals.css`

#### Fase 2 — Redesign Completo
- [x] **Homepage** — secções com hierarquia visual, glass-panel, TextReveal, MagneticButton
- [x] **Services** — layout por serviço com glass-panel, sem duplicação
- [x] **Work** — placeholders "Under NDA" estilizados com glass-panel
- [x] **Insights** — link ativo para Principles, resto "Locked"
- [x] **Principles** — totalmente bilingue
- [x] **Contact** — form client-side com estado, validação e feedback visual
- [x] **Layout** — navbar glass-nav responsiva, footer glass-panel com grid
- [x] **DynamicBackground** — orbs com blur e mix-blend-screen
- [x] **PageTransition** — fade-in/slide-up com Framer Motion

#### Migração Técnica
- [x] Inline styles → Tailwind CSS classes
- [x] Responsive design → breakpoints Tailwind (`sm:`, `md:`, `lg:`)
- [x] `package.json` → `"type": "module"` adicionado
- [x] PostCSS configurado com Tailwind + Autoprefixer

---

## Problemas Pendentes

### 🟠 GRAVE

#### 1. Formulário de contacto sem backend real
O form em `contact/page.tsx` simula submissão (setTimeout + console.log).
Precisa de backend real: Resend, Formspree, ou API route Next.js.

#### 2. `public/` sem assets da marca
Só tem os SVGs default do Next.js. Não há logótipo, favicon real, nem imagens.

#### 3. Página Work sem conteúdo real
Os case studies são placeholders "Under NDA". Precisam de conteúdo real ou estrutura CMS.

#### 4. Nav sem mobile menu (hamburger)
A navbar esconde links em `hidden md:flex`. Em mobile não há menu alternativo.

### 🟡 MÉDIO

#### 5. `getDictionary` sem validação de locale
Se `lang` não for `'en'` | `'pt'`, a função faz crash. O proxy protege, mas não há fallback.

#### 6. Sem favicon real
`app/favicon.ico` é o default do Next.js.

#### 7. Sem OG image / meta tags dinâmicas
O metadata em `layout.tsx` é estático. Falta OG image e meta tags por página.

---

## Tailwind — Cores e Utilities

### Cores (definidas em `tailwind.config.ts`)
```
midnight:    #0A1428     (fundo base do DynamicBackground)
blue:        #1E6FD9     (accent principal)
deep-navy:   #12203A     (orb terciário)
ice:         #E1EDFB     (highlight claro)
cyan:        #00C8FF     (accent secundário, CTAs, labels)
text-dim:    var(--text-dim) = #888888
```

### CSS Variables (definidas em `globals.css`)
```css
--bg-color: #050505
--text-color: #ffffff
--text-dim: #888888
--font-main: 'Inter', sans-serif
--font-mono: 'JetBrains Mono', monospace
--nav-height: 90px
```

### Utilities personalizadas
- `.glass-panel` → `bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass`
- `.glass-nav` → `bg-black/50 backdrop-blur-2xl border-b border-white/5`

---

## Plano de Trabalho — Próximos Passos

### Fase 3 — Funcionalidade
- [ ] **Contact backend** — integrar Resend ou API route para envio real de emails
- [ ] **Mobile nav** — hamburger menu com animação
- [ ] **Work page** — CMS ou estrutura para case studies reais

### Fase 4 — Polish
- [ ] Assets reais (logo SVG, favicon, OG image)
- [ ] Meta tags dinâmicas por página (SEO)
- [ ] Validação de locale com fallback em `getDictionary`
- [ ] Performance audit (Lighthouse)
- [ ] Animações de scroll (intersection observer ou Framer Motion scroll triggers)

---

## Convenções a Seguir

- **Nunca** adicionar conteúdo hardcoded nas pages — usar sempre os dicionários EN/PT
- **Verificar build local** (`npm run build`) antes de qualquer push
- **Commits semânticos**: `feat:`, `fix:`, `refactor:`, `style:`, `ci:`
- **Branch**: tudo vai para `master` → deploy automático no Vercel
- Qualquer nova chave de dicionário deve ser adicionada **em ambos** `en.json` e `pt.json`
- **Styling**: usar Tailwind classes, nunca inline styles
- **Componentes reutilizáveis**: glass-panel, glass-nav como utilities no CSS

---

## Deploy e Git

### MCP GitHub (Windsurf)
- **Leitura**: funcional (conta `igrejaborabora`)
- **Escrita**: bloqueada (token sem permissão `contents:write`)
- **Workaround**: usar Git local para commit/push

### Comandos Úteis

```bash
npm run dev          # desenvolvimento local (http://localhost:3000)
npm run build        # confirmar que o build passa antes de push
git add -A && git commit -m "feat: description" && git push origin master
```

### Deploy Vercel
- Push para `master` → deploy automático
- Projeto: `adfutura-website`
- URL: https://adfutura-website.vercel.app

---

*Última revisão: 13 Abril 2026*
