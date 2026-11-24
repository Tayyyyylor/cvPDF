import type { IconName } from "@/components/icons";

/**
 * Tout le texte du CV est ici, en français et en anglais.
 *
 * Les passages entre crochets, ex. "[X] clients", sont des placeholders :
 * ils s'affichent en orange dans le PDF pour ne pas en oublier un.
 * Remplace-les (crochets compris) avant d'envoyer le CV.
 */

export type Lang = "fr" | "en";

export type Experience = {
  date: string;
  title: string;
  company: string;
  context?: string;
  bullets: string[];
  stack?: string;
};

export type Project = {
  name: string;
  link?: { label: string; href: string };
  description: string;
  stack: string;
};

export type Education = {
  date: string;
  diploma: string;
  level: string;
  school: string;
};

export type Skill = { name: string; icon?: IconName };

export type CvContent = {
  documentTitle: string;
  job: string;
  summary: string;
  labels: {
    contact: string;
    skills: string;
    mainStack: string;
    tools: string;
    languages: string;
    experience: string;
    projects: string;
    education: string;
    stack: string;
    qrCaption: string;
  };
  phone: string;
  location: string;
  languages: { name: string; level: string }[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
};

export const identity = {
  firstName: "Bryan",
  lastName: "Houblon",
  phoneHref: "tel:+33671180929",
  email: { label: "bryan.houblon@proton.me", href: "mailto:bryan.houblon@proton.me" },
  links: [
    { label: "bryanhoublon.com", href: "https://www.bryanhoublon.com" },
    { label: "github.com/Tayyyyylor", href: "https://github.com/Tayyyyylor" },
    {
      label: "linkedin.com/in/bryan-houblon-172121211",
      href: "https://www.linkedin.com/in/bryan-houblon-172121211/",
    },
  ],
  qrCode: "/qrportfolio.png",
};

export const skills: { main: Skill[]; tools: Skill[] } = {
  main: [
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React Native", icon: "react" },
    { name: "Expo", icon: "expo" },
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nestjs" },
    { name: "Python", icon: "python" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Sass", icon: "sass" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Prisma", icon: "prisma" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "Turborepo", icon: "turborepo" },
    { name: "Supabase", icon: "supabase" },
    { name: "Strapi", icon: "strapi" },
    { name: "Contentful", icon: "contentful" },
    { name: "Storyblok", icon: "storyblok" },
    { name: "Storybook", icon: "storybook" },
    { name: "Jest", icon: "jest" },
    { name: "Vitest", icon: "vitest" },
    { name: "Figma", icon: "figma" },
    { name: "Jira", icon: "jira" },
    // Nom long : affiché sur toute la largeur, à garder en fin de liste.
    { name: "Google Tag Manager", icon: "googletagmanager" },
  ],
};

export const content: Record<Lang, CvContent> = {
  fr: {
    documentTitle: "CV Bryan Houblon – Développeur Front-end, Full-stack & Mobile",
    job: "Développeur Front-end, Full-stack & Mobile",
    summary:
      "Développeur TypeScript : 3 ans chez Razorfish (Publicis Groupe) sur les sites Nissan en Europe et au Moyen-Orient, freelance depuis 2024 pour 6 clients, et deux applications React Native publiées sur l’App Store et Google Play. Ouvert à un poste front-end, full-stack ou mobile, tout type de contrat.",
    labels: {
      contact: "Contact",
      skills: "Compétences",
      mainStack: "Stack principale",
      tools: "Outils & écosystème",
      languages: "Langues",
      experience: "Expériences professionnelles",
      projects: "Projets personnels",
      education: "Formation",
      stack: "Stack : ",
      qrCaption: "Scanner pour voir mon portfolio",
    },
    phone: "06 71 18 09 29",
    location: "Paris · Ouvert à toute l’Europe : remote, hybride ou sur site",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "Courant (oral et technique)" },
    ],
    experiences: [
      {
        date: "Janvier 2024 – Aujourd’hui",
        title: "Développeur Full-stack",
        company: "Freelance",
        bullets: [
          "Conception et développement de sites vitrines et d’applications SaaS pour 6 clients, du recueil du besoin à la mise en production",
          "Projet phare : dependant.tv, site bilingue d’une société de production (Next.js, vidéo en streaming avec Mux, animations GSAP) et CMS Strapi qui rend l’équipe autonome",
        ],
        stack: "Next.js, TypeScript, Sass, Tailwind CSS, Strapi, Contentful, Supabase",
      },
      {
        date: "Janvier 2023 – Décembre 2025",
        title: "Développeur Front-end Junior",
        company: "Razorfish (Publicis Groupe)",
        context: "Alternance de janvier 2023 à juin 2025, puis CDD de 6 mois jusqu’en décembre 2025",
        bullets: [
          "Développement de nouvelles fonctionnalités et de composants React / Next.js pour les sites Nissan en Europe (une quinzaine de pays) et au Moyen-Orient",
          "Intégration UI/UX à partir de maquettes Figma",
          "Tracking : implémentation du plan de marquage avec Google Tag Manager",
          "Travail en équipe en méthode Agile (Jira, cérémonies)",
        ],
        stack: "React, Next.js, Figma, Google Tag Manager, Jira",
      },
    ],
    projects: [
      {
        name: "MyShelf",
        link: { label: "myshelfapp.app", href: "https://myshelfapp.app" },
        description:
          "Application de suivi de lecture sur iOS, Android et le web : scan de livres, étagères personnalisables, notes et avis, profil partageable. Monorepo avec l’app Expo, le site Next.js et l’API NestJS.",
        stack: "Expo, React Native, Next.js, NestJS, PostgreSQL, Prisma, Redis, Turborepo",
      },
      {
        name: "Noomi",
        link: { label: "noomiapp.com", href: "https://noomiapp.com" },
        description:
          "Application iOS et Android : un test de personnalité (Big Five) fait naître un compagnon unique qui suit l’humeur et les habitudes. Moteur partagé entre l’app, le site et l’API, couvert par 624 tests de rendu.",
        stack: "Expo, React Native, Next.js, NestJS, PostgreSQL, Prisma, Turborepo, Vitest",
      },
    ],
    education: [
      {
        date: "2024 – 2025",
        diploma: "Concepteur Développeur d’Applications",
        level: "Titre RNCP niveau 6 (Bac+3/4)",
        school: "ETNA, Ivry-sur-Seine",
      },
      {
        date: "2022 – 2024",
        diploma: "Développeur Web et Web Mobile",
        level: "Titre RNCP niveau 5 (Bac+2)",
        school: "Simplon Île-de-France, Aulnay-sous-Bois",
      },
    ],
  },
  en: {
    documentTitle: "Resume Bryan Houblon – Front-end, Full-stack & Mobile Developer",
    job: "Front-end, Full-stack & Mobile Developer",
    summary:
      "TypeScript developer: 3 years at Razorfish (Publicis Groupe) on Nissan websites across Europe and the Middle East, freelancing since 2024 for 6 clients, and two React Native apps published on the App Store and Google Play. Open to front-end, full-stack or mobile roles, any type of contract.",
    labels: {
      contact: "Contact",
      skills: "Skills",
      mainStack: "Main stack",
      tools: "Tools & ecosystem",
      languages: "Languages",
      experience: "Professional experience",
      projects: "Personal projects",
      education: "Education",
      stack: "Stack: ",
      qrCaption: "Scan to view my portfolio",
    },
    phone: "+33 6 71 18 09 29",
    location: "Paris · Open to roles across Europe: remote, hybrid or on-site",
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Fluent (everyday and technical)" },
    ],
    experiences: [
      {
        date: "January 2024 – Present",
        title: "Full-stack Developer",
        company: "Freelance",
        bullets: [
          "Designed and built showcase websites and SaaS applications for 6 clients, from requirements gathering to production deployment",
          "Flagship project: dependant.tv, the bilingual website of a film production company (Next.js, video streaming with Mux, GSAP animations), with a Strapi CMS that lets the team publish on their own",
        ],
        stack: "Next.js, TypeScript, Sass, Tailwind CSS, Strapi, Contentful, Supabase",
      },
      {
        date: "January 2023 – December 2025",
        title: "Junior Front-end Developer",
        company: "Razorfish (Publicis Groupe)",
        context: "Apprenticeship from January 2023 to June 2025, then a 6-month fixed-term contract until December 2025",
        bullets: [
          "Built new features and components in React / Next.js for Nissan websites across Europe (around 15 countries) and the Middle East",
          "UI/UX integration from Figma mockups",
          "Tracking: implemented the tagging plan with Google Tag Manager",
          "Agile teamwork (Jira, ceremonies)",
        ],
        stack: "React, Next.js, Figma, Google Tag Manager, Jira",
      },
    ],
    projects: [
      {
        name: "MyShelf",
        link: { label: "myshelfapp.app", href: "https://myshelfapp.app" },
        description:
          "Reading tracker app on iOS, Android and the web: book scanning, custom shelves, ratings and reviews, shareable profile. Monorepo with the Expo app, the Next.js website and the NestJS API.",
        stack: "Expo, React Native, Next.js, NestJS, PostgreSQL, Prisma, Redis, Turborepo",
      },
      {
        name: "Noomi",
        link: { label: "noomiapp.com", href: "https://noomiapp.com" },
        description:
          "iOS and Android app: a personality test (Big Five) gives birth to a unique companion that tracks mood and habits. Engine shared by the app, the website and the API, covered by 624 rendering tests.",
        stack: "Expo, React Native, Next.js, NestJS, PostgreSQL, Prisma, Turborepo, Vitest",
      },
    ],
    education: [
      {
        date: "2024 – 2025",
        diploma: "Application Designer and Developer",
        level: "French RNCP level 6 certification (Bachelor’s level)",
        school: "ETNA, Ivry-sur-Seine, France",
      },
      {
        date: "2022 – 2024",
        diploma: "Web and Mobile Web Developer",
        level: "French RNCP level 5 certification (2 years of higher education)",
        school: "Simplon Île-de-France, Aulnay-sous-Bois, France",
      },
    ],
  },
};
