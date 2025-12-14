/* eslint-disable jsx-a11y/alt-text */
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    mainContainer: {
      padding: 30,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5
    },
    name: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#02326e"
    },
    job: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#02326e"
    },
    image: {
      width: 100,
      height: 100
    }
   
  });

const Me = () => {
    
  return (
    <div style={styles.mainContainer}>
    <View style={styles.container}>
    <Text style={styles.name}>Bryan</Text>
    <Text style={styles.name}>Houblon</Text>
    <Text style={styles.job}>Développeur Full-stack</Text>
  </View>
      <View>
         <Image src="/sass.png" style={styles.image}/>
      </View>
    </div>
  )
}

export default Me