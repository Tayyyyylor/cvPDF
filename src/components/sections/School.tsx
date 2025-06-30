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
    fontWeight: "bold"
  },
  desc: {
    fontSize: 11,
   fontStyle: "italic"
  }
});


const School = () => {
  const data = [
    {
      date: "2024 - 2025",
      diploma: "Concepteur, développeur d'applications",
      school: " Etna 94200 Ivry sur Seine"
    },
    {
      date: "2022 - 2024",
      diploma: "Développeur Web et Web mobile",
      school: " Simplon Ile de France 93600 Aulnay sous Bois"
    },
    {
      date: "2017 - 2020",
      diploma: "Licence De Philosophie Et Sociologie",
      school: "Université Paris 1 Panthéon Sorbonne 75005 Paris"
    },
    {
      date: "2016",
      diploma: "Baccalauréat De Sciences Et Technologies De L’Industrie Et Du Développement Durable",
      school: "Lycée Gustave Eiffel 93330 Gagny"
    },
  ]
  return (
    <div>
        <View style={styles.container}>
      <Text style={styles.title}>Formations</Text>
            {data.map((dt, index) => (
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