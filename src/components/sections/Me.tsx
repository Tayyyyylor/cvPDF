import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#B1DAFF",
        gap: 5
    },
    name: {
      fontSize: 28,
      fontWeight: "bold"
    },
   
  });

const Me = () => {
    
  return (
    <div style={styles.mainContainer}>
    <View style={styles.container}>
    <Text style={styles.name}>Bryan HOUBLON</Text>

  </View>
    </div>
  )
}

export default Me