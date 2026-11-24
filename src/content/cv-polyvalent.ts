import type { CvContent, Education, Experience } from "./cv";

/**
 * CV « polyvalent » (français uniquement) pour les postes sans diplôme requis :
 * manutention, vente en grande distribution, accueil, support informatique.
 *
 * Comme pour le CV de développeur, les passages entre crochets sont des
 * placeholders affichés en orange : remplace-les (crochets compris).
 * Astuce : adapte `job` à chaque offre (ex. « Employé libre-service », « Agent d'accueil »).
 */

export type PolyvalentCvContent = {
  documentTitle: string;
  job: string;
  domains: string;
  summary: string;
  labels: {
    contact: string;
    availability: string;
    strengths: string;
    languages: string;
    experience: string;
    education: string;
    stack: string;
  };
  location: string;
  phone: string;
  availability: string[];
  strengths: string[];
  languages: CvContent["languages"];
  experiences: Experience[];
  education: Education[];
};

export const polyvalentCv: PolyvalentCvContent = {
  documentTitle: "CV Bryan Houblon – Employé polyvalent",
  job: "Employé polyvalent",
  domains: "Manutention · Vente · Accueil · Support informatique",
  summary:
    "Disponible immédiatement, sans contrainte d’horaires (soirs, week-ends, nuit). Expérience en intérim sur des salons professionnels et en préfecture, puis 3 ans dans l’informatique. Sérieux, ponctuel et habitué au travail en équipe.",
  labels: {
    contact: "Contact",
    availability: "Disponibilités",
    strengths: "Points forts",
    languages: "Langues",
    experience: "Expériences",
    education: "Formation",
    stack: "Outils : ",
  },
  location: "Paris · Mobile dans toute l’Île-de-France en transports en commun",
  phone: "06 71 18 09 29",
  availability: [
    "Disponible immédiatement",
    "Temps plein ou temps partiel",
    "Semaine, week-ends, horaires décalés et nuit",
    "Intérim, CDD ou CDI",
    "Permis B",
  ],
  strengths: [
    "Habitué à l’intérim : adaptation rapide à un nouveau poste",
    "Ponctuel, fiable et autonome",
    "Travail en équipe",
    "À l’aise avec l’informatique : installation de postes, Wi-Fi, logiciels, dépannage",
    "Relation client : 6 clients suivis en freelance",
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Courant (oral et technique)" },
  ],
  experiences: [
    {
      date: "Janvier 2023 – Aujourd’hui",
      title: "Développeur web",
      company: "Razorfish (Publicis Groupe), puis freelance",
      bullets: [
        "Création et mise à jour de sites internet pour de grandes marques (Nissan), puis pour 6 clients en freelance",
        "Travail en équipe, respect des délais, échanges réguliers avec les clients",
      ],
    },
    {
      date: "Septembre 2021",
      title: "Assistant technicien informatique",
      company: "Salon Maison & Objet, Villepinte",
      bullets: [
        "Installation et gestion des points Wi-Fi du salon",
        "Assistance informatique sur place",
        "Montage et démontage du matériel informatique",
      ],
    },
    {
      date: "[Années]",
      title: "Intérimaire sur salons professionnels",
      company: "Maison & Objet, [autres salons], [lieux]",
      bullets: ["[Missions : montage et démontage de stands, manutention, accueil des visiteurs…]"],
    },
    {
      date: "[Années]",
      title: "[Poste : agent d’accueil, agent administratif…]",
      company: "Préfecture de la Seine-Saint-Denis (Bobigny) et sous-préfecture du Raincy",
      context: "[Intérim, CDD, vacations…]",
      bullets: ["[Missions : accueil et orientation du public, gestion des files d’attente, traitement des dossiers…]"],
    },
  ],
  education: [
    {
      date: "2022 – 2025",
      diploma: "Formation de développeur web et d’applications",
      school: "Simplon (Aulnay-sous-Bois), puis ETNA (Ivry-sur-Seine)",
    },
    {
      date: "[Année]",
      diploma: "[Diplôme scolaire : Bac, CAP, BEP… – à supprimer si aucun]",
      school: "[Établissement, ville]",
    },
  ],
};
