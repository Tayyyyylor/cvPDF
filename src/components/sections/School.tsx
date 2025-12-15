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
  schoolContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
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
  desc: {
    fontSize: 10,
   fontStyle: "italic"
  }
});

    const translations: any = {
  fr: {
    title: "Formations",
    schools: [
    {
      date: "2024 - 2025",
      diploma: "Concepteur, développeur d'applications",
      school: " Etna 94200 Ivry sur Seine"
    },
    {
      date: "2022 - 2024",
      diploma: "Développeur Web et Web mobile",
      school: " Simplon Ile de France 93600 Aulnay sous Bois"
    }
  ]
  },
  en: {
    title: "Training",
    schools: [
    {
      date: "2024 - 2025",
      diploma: "Application designer and developer",
      school: " Etna 94200 Ivry sur Seine, France"
    },
    {
      date: "2022 - 2024",
      diploma: "Web and Mobile Web Developer",
      school: " Simplon Ile de France 93600 Aulnay sous Bois, France"
    }
  ]
  },
};


const School = ({lang}: any) => {

  const t = translations[lang] ?? translations.fr;


  return (
    <div>
        <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
            {t.schools.map((dt: any, index: number) => (
              <View key={index} style={styles.schoolContainer}>
                <Text style={styles.date}>{dt.date}</Text>
                <Text style={styles.boldText}>{dt.diploma}</Text>
                <Text style={styles.desc}>{dt.school}</Text>
                </View>
            ))

            }
        </View>
    </div>
  )
}

export default School