# Studio Pixel — Wesley Oliveira

Portfólio de estudo (SENAC Salto) reconstruído em Next.js, aplicando a identidade visual
**Studio Pixel** (wordmark em pixel art, paleta extraída da arte da marca, mascote e
aplicações reais em produto) e um background WebGL animado (ColorBends, do React Bits).

## Stack

- **Next.js 15** (App Router) + React 18
- **Three.js** — shader WebGL do background animado da hero (`ColorBends`)
- CSS puro (sem Tailwind), com variáveis de tema baseadas na paleta Studio Pixel
- Deploy na Vercel (build automático via `npm run build`)

## Estrutura

```
studio-pixel/
  app/
    layout.js       — layout raiz + metadata
    page.js          — monta todas as seções
    globals.css       — design system completo (cores, tipografia, componentes)
  components/
    ColorBends.jsx/.css  — background WebGL (adaptado do React Bits, MIT + Commons Clause)
    PixelMark.jsx         — wordmark "studio PIXEL" reutilizável
    Nav.jsx, Hero.jsx, About.jsx, Projects.jsx, BrandApplications.jsx,
    UIStudies.jsx, Stack.jsx, Contact.jsx, Footer.jsx, ScrollReveal.jsx
  public/img/       — fotos, mockups da marca e capas de projeto
```

## Rodar localmente

Requer Node.js 18+.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Deploy na Vercel

1. Suba este repositório no GitHub.
2. Importe o repositório em [vercel.com/new](https://vercel.com/new).
3. **Framework Preset:** Next.js (detectado automaticamente).
4. **Root Directory:** raiz do repositório (não use subpasta `src`, diferente da versão
   estática anterior).
5. Não é necessário configurar Build/Output Command — a Vercel já sabe rodar `next build`.
6. Deploy. A Vercel instala as dependências e builda o projeto nos servidores dela — nada
   disso roda na sua máquina.

## Créditos

O componente `ColorBends` é adaptado do [React Bits](https://reactbits.dev) (David Haz),
licenciado sob MIT + Commons Clause — uso permitido dentro de um site/produto, mas não pode
ser redistribuído como biblioteca separada.
