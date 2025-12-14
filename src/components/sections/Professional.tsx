import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'



const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    },
    title: {
      fontFamily: "Title",
      textTransform: "uppercase",
    },
    jobContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 4,

    },
    date: {
      fontSize: 10,
      fontWeight: "bold"
    },
    boldText: {
      fontSize: 14,
      fontWeight: "bold",
       color: "#02326e"
    },
    entreprise: {
      fontSize: 10,
      fontWeight: "bold"
    },
    desc: {
      fontSize: 11,
     fontStyle: "italic"
    }
  });

const Professional = () => {
    const data = [
      {
        date: "Janvier 2024 - Aujourd'hui",
        poste: "Développeur FullStack",
        entreprise: "Freelance",
        desc: "Création de sites vitrines clés en main, Saas "
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
            desc: "JIRA, réalisation de fonctionnalités, tracking"
        },
        {
            date: "Septembre 2021",
            poste: "Assistant technicien informatique",
            entreprise: "Maison & Objet, Villepinte",
            desc: "Gestion points WIFI, service informatique, montage et démontage des outils informatique et logiciels"
        }
    ]
  return (
    <div>
        <View style={styles.container}>
      <Text style={styles.title}>Expériences Profesionnelles</Text>
            {data.map((dt, index) => (
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