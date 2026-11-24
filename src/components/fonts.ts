import { Font } from "@react-pdf/renderer";

// Le texte courant utilise Helvetica (police standard du PDF : rien à embarquer).
// Seuls les titres de section utilisent Poppins.
Font.register({ family: "Title", src: "/fonts/Poppins-Bold.ttf" });

// Pas de césure automatique : react-pdf applique les règles anglaises,
// ce qui coupe mal les mots français.
Font.registerHyphenationCallback((word) => [word]);
