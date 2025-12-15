/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'



const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 15
    },
    title: {
      fontFamily: "Title",
      textTransform: "uppercase",
    },
    jobContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 4

    },
    date: {
      fontSize: 10,
      fontWeight: "bold"
    },
    boldText: {
      fontSize: 12,
      fontWeight: "bold",
       color: "#02326e"
    },
    entreprise: {
      fontSize: 10,
      fontWeight: "bold"
    },
    desc: {
      fontSize: 10,
     fontStyle: "italic"
    }
  });


        const translations: any = {
  fr: {
    title: "Expériences Profesionnelles",
    jobs: [
      {
        date: "Janvier 2024 - Aujourd'hui",
        poste: "Développeur FullStack",
        entreprise: "Freelance ( en parrallèle de l'alternance )",
        desc: ` - Conception et développement de sites vitrines et applications SaaS
- Stack : Next.js, TypeScript, Tailwind, Supabase
- Gestion de projet de A à Z (besoin client, dev, mise en production)`
    },
        {
            date: "Juillet 2025 - Décembre 2025",
            poste: "Développeur Frontend Junior",
            entreprise: "Razorfish ( Publicis Groupe )",
            desc: ` - Développement de fonctionnalités React et Next pour des sites de grands comptes (Nissan)
            - Intégration UI/UX à partir de maquettes Figma
            - Travail en équipe ( JIRA, Agile, cérémonies... )
            - Tracking (Google Tag Manager et implémentations)
            `
        },
        {
            date: "Janvier 2023 - Juin 2025",
            poste: "Développeur Frontend Junior ( Alternance )",
            entreprise: "Razorfish ( Publicis Groupe )",
            desc: ` - Développement de fonctionnalités React et Next pour des sites de grands comptes (Nissan)
            - Intégration UI/UX à partir de maquettes Figma
            - Travail en équipe ( JIRA, Agile, cérémonies... )
            - Tracking (Google Tag Manager et implémentations)
            `
        },
        {
            date: "Septembre 2021",
            poste: "Assistant technicien informatique",
            entreprise: "Maison & Objet, Villepinte",
            desc: "Gestion points WIFI, service informatique, montage et démontage des outils informatique et logiciels"
        }
    ]
  },
  en: {
    title: "Professional Experience",
    jobs: [
      {
        date: "January 2024 - Today",
        poste: "FullStack Developer",
        entreprise: "Freelancing (in parallel with the apprenticeship)",
        desc: ` - Design and development of showcase websites and SaaS applications
- Stack : Next.js, TypeScript, Tailwind, Supabase
- End-to-end project management (client needs assessment, development, production deployment)`
    },
        {
            date: "July 2025 - December 2025",
            poste: "Junior Frontend Developer",
            entreprise: "Razorfish ( Publicis Groupe )",
            desc: ` - Developing React and Next features for major client websites (Nissan)
            - UI/UX integration from Figma mockups
            - Teamwork (JIRA, Agile, ceremonies...)
            - Tracking (Google Tag Manager and implementations)
            `
        },
        {
            date: "January 2023 - June 2025",
            poste: "Junior Frontend Developer ( Apprenticeship )",
            entreprise: "Razorfish ( Publicis Groupe )",
            desc: ` - Developing React and Next features for major client websites (Nissan)
            - UI/UX integration from Figma mockups
            - Teamwork (JIRA, Agile, ceremonies...)
            - Tracking (Google Tag Manager and implementations)
            `
        },
        {
            date: "September 2021",
            poste: "IT technician assistant",
            entreprise: "Maison & Objet, Villepinte",
            desc: "Management of Wi-Fi access points, IT services, assembly and disassembly of computer equipment and software"
        }
    ]
  },
};

const Professional = ({lang}: any) => {

     const t = translations[lang] ?? translations.fr;
   
  return (
    <div>
        <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
            {t.jobs.map((dt: any, index: number) => (
                <View key={index} style={styles.jobContainer}>
                    <Text style={styles.date}>{dt.date}</Text>
                    <Text style={styles.boldText}>{dt.poste}</Text>
                    <Text style={styles.entreprise}>{dt.entreprise}</Text>
                    <Text style={styles.desc}>{dt.desc}</Text>
                </View>
            ))
            }
        </View>
    </div>
  )
}

export default Professional