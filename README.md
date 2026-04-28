# P.U. Construtora Website

PT-BR-first corporate website for P.U. Construtora Ltda.

The implementation keeps content, routing, and visual presentation separated so future redesigns can preserve the same structured content layer.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Content

Durable business content lives in `src/content`. UI components render through typed loaders in `src/lib/content`, so project summaries, page copy, people, investor content, navigation, and legal text can migrate to a CMS later without rewriting the site.
