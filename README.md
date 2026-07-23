# Landing – Wesley Oliveira / The Magistro

Landing page estática para concentrar projetos de estudo (SENAC Salto), portfólio Behance e demos de UI/animação.

## Stack

- HTML + CSS + JavaScript (sem build).
- Visual inspirado em React Bits, Animata e KokonutUI.
- Deploy estático na Vercel.

## Estrutura

- `src/index.html` – página principal.
- `src/css/style.css` – estilos.
- `src/js/main.js` – scripts leves.
- `src/img/` – imagens usadas pela página (thumbs, avatar, favicon).
- `public/img/` – cópia de referência das imagens originais (fora do Root Directory usado na Vercel).

> **Nota:** o projeto na Vercel está configurado com **Root Directory = `src`**. Por isso, toda imagem referenciada em `index.html` precisa estar dentro de `src/img/`, não em `public/img/`.

## Como rodar localmente

Abra `src/index.html` direto no navegador ou sirva com qualquer servidor estático.

## Deploy na Vercel

1. Crie um repositório no GitHub com esta estrutura.
2. Conecte o repositório na Vercel.
3. Configure a Vercel para servir `src/index.html` como página principal.
