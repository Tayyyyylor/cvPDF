# CV PDF

Générateur de mon CV en PDF (français et anglais) avec Next.js et [`@react-pdf/renderer`](https://react-pdf.org).

## Lancer

```bash
npm install
npm run dev
```

Ouvre <http://localhost:3000> : choisis la langue (FR / EN) puis clique sur « Télécharger le PDF »
(fichier `CV-Bryan-Houblon-FR.pdf` ou `CV-Bryan-Houblon-EN.pdf`).

## Modifier le contenu

Tout le texte est dans [`src/content/cv.ts`](src/content/cv.ts) : identité, liens, compétences,
expériences, projets, formation et langues, pour les deux langues.

Les passages entre crochets (`[X] clients`, `[Ville]`…) sont des placeholders : ils s'affichent
en orange dans le PDF. Remplace-les, crochets compris, avant d'envoyer le CV.

Le CV doit tenir sur une page : vérifie l'aperçu après chaque ajout.

## Structure

- `src/components/MyDocument.tsx` : la page A4 et les métadonnées du PDF
- `src/components/sections/` : une section du CV par fichier
- `src/components/pdf-ui.tsx` : couleurs, titres de section, puces, mise en évidence des placeholders
- `src/components/icons.ts` : icônes vectorielles des technos ([Simple Icons](https://simpleicons.org), CC0)
- `src/components/fonts.ts` : polices (Helvetica pour le texte, Poppins Bold pour les titres)
