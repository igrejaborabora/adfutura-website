# AGENTS.md — adFutura Website

> Documento de referência para agentes de IA e developers.
> Descreve o estado atual do repo, problemas identificados e o que precisa de ser feito.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16.1.0 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | CSS puro (`globals.css`) + inline styles |
| Animations | Framer Motion + Lenis (smooth scroll) |
| i18n | Dicionários JSON manuais (`dictionaries/en.json`, `dictionaries/pt.json`) |
| Deploy | Vercel (projeto `adfutura-website`, team `team_nQ4T8fC2QzGkUZxSoI4x00bc`) |
| Repo | `igrejaborabora/adfutura-website` (branch `master`) |

---

## Estrutura do Repo

```
app/
  [lang]/
    layout.tsx          # Navbar + Footer + SmoothScroll wrapper
    page.tsx            # Homepage (189 linhas, tudo inline styles)
    services/page.tsx   # Página de serviços
    work/page.tsx       # Placeholder — sem conteúdo real
    insights/page.tsx   # Só 1 link ativo (principles), resto "coming soon"
    insights/principles/page.tsx
    contact/page.tsx    # Formulário sem backend
  globals.css           # CSS base + variáveis
components/
  ui/
    TextReveal.tsx      # Animação de palavras com Framer Motion
    MagneticButton.tsx  # Botão magnético com Framer Motion
  providers/
    SmoothScroll.tsx    # Wrapper Lenis
dictionaries/
  en.json               # Conteúdo EN (227 linhas)
  pt.json               # Conteúdo PT (227 linhas)
lib/
  dictionary.ts         # getDictionary() — server-only
middleware.ts           # Redirect / → /en (deprecated: usa "middleware" em vez de "proxy")
```

---

## Problemas Identificados (por prioridade)

### 🔴 CRÍTICO — Quebra visual

#### 1. CSS Classes em falta
As seguintes classes são usadas no código mas **não existem em `globals.css`**:
- `.animate-in` — usada em todas as pages como wrapper
- `.hero` — usada em `page.tsx` para a secção hero
- `.nav-content` — usada em `layout.tsx`
- `.nav-links` — usada em `layout.tsx`
- `.nav-link` — usada em `layout.tsx`
- `.lang-switcher` — usada em `layout.tsx`

Resultado: navbar sem layout, hero sem padding-top correto, sem animação de entrada.

#### 2. Hero sem espaço para a navbar
A navbar é `position: fixed` com `height: var(--nav-height) = 90px`.
A secção hero não tem `padding-top` para compensar — o conteúdo fica por baixo da navbar.

#### 3. Sem design responsivo
Todos os grids são `gridTemplateColumns: '1fr 1fr'` sem breakpoints.
Em mobile, o layout quebra completamente.

---

### 🟠 GRAVE — Conteúdo / Funcionalidade

#### 4. Página Work — placeholder total
`work/page.tsx` renderiza um array `[1, 2, 3]` com "FLAGSHIP EXAMPLE" hardcoded.
Não há casos de estudo reais nem estrutura para os adicionar.

#### 5. Advisory — lista duplicada na services page
A secção Advisory em `services/page.tsx` renderiza `services.advisory.points` **duas vezes** — na coluna esquerda (lista dimida) e na coluna direita (lista destacada). Eram supostas ser listas diferentes.

#### 6. Formulário de contacto sem backend
`contact/page.tsx` tem um `<form>` sem `action`, sem `onSubmit`, sem API route.
Submeter não faz nada.

#### 7. Texto hardcoded não bilingue
`insights/principles/page.tsx` linha 29:
```tsx
Tudo o que fazemos deriva destes princípios.
```
Está em PT independentemente da língua selecionada.

#### 8. `public/` sem assets da marca
Só tem os SVGs default do Next.js (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).
Não há logótipo, favicon real, nem imagens.

---

### 🟡 MÉDIO — Qualidade / Manutenibilidade

#### 9. Tudo em inline styles
Nenhum componente usa classes CSS ou módulos CSS.
Todo o layout está em `style={{}}` props — difícil de manter, impossível de fazer responsive.

#### 10. Middleware deprecado
`middleware.ts` usa a convenção antiga — Next.js 16 pede `proxy.ts`.
Gera warning no build.

#### 11. Lenis com opções deprecadas
`SmoothScroll.tsx` usa `orientation` e `gestureOrientation` que foram removidas em versões recentes do Lenis.

#### 12. `getDictionary` sem validação de locale
Se `lang` não for `'en'` | `'pt'`, a função faz crash.
O middleware protege, mas não há fallback explícito.

#### 13. Sem favicon real
`app/favicon.ico` existe mas é o default do Next.js.

---

## CSS Variables Disponíveis

```css
--bg-color: #000000
--text-color: #ffffff
--text-dim: #888888
--accent-blue: #0066FF
--accent-blue-dim: rgba(0, 102, 255, 0.1)
--accent-cyan: #00C8FF
--glass-bg: rgba(255, 255, 255, 0.05)
--glass-border: rgba(255, 255, 255, 0.1)
--font-main: 'Inter', sans-serif
--font-mono: 'JetBrains Mono', monospace
--nav-height: 90px
--transition-smooth: all 0.6s cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Plano de Trabalho

### Fase 1 — Corrigir o que está partido
- [ ] Adicionar CSS classes em falta (`.animate-in`, `.hero`, `.nav-content`, `.nav-links`, `.nav-link`, `.lang-switcher`)
- [ ] Corrigir padding-top do hero (compensar navbar)
- [ ] Fixar texto hardcoded em PT na página Principles
- [ ] Corrigir lista duplicada no Advisory (services page)

### Fase 2 — Redesign das páginas
- [ ] **Homepage** — reestruturar com hierarquia visual clara, secções com padding consistente
- [ ] **Services** — layout limpo por serviço, sem duplicação de dados
- [ ] **Work** — estrutura para casos reais ou "em breve" bem apresentado
- [ ] **Contact** — integrar backend (Resend, Formspree ou API route Next.js)
- [ ] **Nav** — mobile menu (hamburger)

### Fase 3 — Qualidade
- [ ] Responsive design (breakpoints em CSS, não inline)
- [ ] Mover inline styles para classes CSS ou CSS Modules
- [ ] Substituir `middleware.ts` por `proxy.ts`
- [ ] Corrigir opções do Lenis
- [ ] Adicionar assets reais (logo, favicon, OG image)

---

## Convenções a Seguir

- **Nunca** adicionar conteúdo hardcoded nas pages — usar sempre os dicionários EN/PT
- **Verificar build local** (`npm run build`) antes de qualquer push
- **Commits semânticos**: `feat:`, `fix:`, `refactor:`, `style:`, `ci:`
- **Branch**: tudo vai para `master` → deploy automático no Vercel
- Qualquer nova chave de dicionário deve ser adicionada **em ambos** `en.json` e `pt.json`

---

## Comandos Úteis

```bash
npm run dev      # desenvolvimento local (http://localhost:3000)
npm run build    # confirmar que o build passa antes de push
git push origin master  # trigger deploy Vercel automático
```

---

*Última revisão: Abril 2026*
