# Portafolio · Mia Renee Valenzuela Yescas (Astro)

Sitio estático con **Astro + CSS + TypeScript/JS**, listo para GitHub Pages.

## Usar
```bash
npm install        # crea package-lock.json (súbelo al repo)
npm run dev        # http://localhost:4321
npm run build      # genera /dist
```

## Dónde editar
| Qué | Dónde |
|---|---|
| Textos ES/EN, skills, educación, puestos, links | `src/data/content.ts` |
| Proyectos (repos y blogs) | `src/data/projects.ts` |
| Colores, tipografías, tamaños | `src/styles/global.css` (variables en `:root`) |
| Física del gafete (largo de cuerda, fricción) | `src/scripts/lanyard.ts` (`L`, `K`, `DAMP`) |
| Imágenes | `public/images/` (ver `LEEME.txt`) |
| Tu CV | `public/cv/CV-Mia-Valenzuela.pdf` |

## Publicar en GitHub Pages
1. En `astro.config.mjs` pon tu usuario en `site` y ajusta `base`
   (`'/'` si el repo se llama `usuario.github.io`; `'/nombre-del-repo'` si no).
2. Sube todo a la rama `main`.
3. GitHub → Settings → Pages → **Source: GitHub Actions**.
4. Cada `git push` publica solo (workflow en `.github/workflows/deploy.yml`).
