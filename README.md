# CV PDF

Générateur de mon CV en PDF (français et anglais) avec Next.js et [`@react-pdf/renderer`](https://react-pdf.org).

## Lancer

```bash
npm install
npm run dev
```

Ouvre <http://localhost:3000>, choisis le CV puis clique sur « Télécharger le PDF » :

- **Dev · FR / Dev · EN** : CV de développeur (`CV-Bryan-Houblon-FR.pdf`, `CV-Bryan-Houblon-EN.pdf`)
- **Polyvalent · FR** : CV pour les postes sans diplôme requis — manutention, vente, accueil,
  support informatique (`CV-Bryan-Houblon-Polyvalent.pdf`)

## Modifier le contenu

- CV de développeur : [`src/content/cv.ts`](src/content/cv.ts) (identité, liens, compétences,
  expériences, projets, formation et langues, en français et en anglais)
- CV polyvalent : [`src/content/cv-polyvalent.ts`](src/content/cv-polyvalent.ts) (français uniquement ;
  pense à adapter l'intitulé du poste à chaque offre)

Les passages entre crochets (`[X] clients`, `[Ville]`…) sont des placeholders : ils s'affichent
en orange dans le PDF. Remplace-les, crochets compris, avant d'envoyer le CV.

Le CV doit tenir sur une page : vérifie l'aperçu après chaque ajout.

## Structure

- `src/components/MyDocument.tsx` : la page A4 et les métadonnées du CV de développeur
- `src/components/PolyvalentDocument.tsx` : la page du CV polyvalent
- `src/components/sections/` : une section du CV par fichier
- `src/components/pdf-ui.tsx` : couleurs, titres de section, puces, mise en évidence des placeholders
- `src/components/icons.ts` : icônes vectorielles des technos ([Simple Icons](https://simpleicons.org), CC0)
- `src/components/fonts.ts` : polices (Helvetica pour le texte, Poppins Bold pour les titres)
