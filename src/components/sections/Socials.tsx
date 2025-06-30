/* eslint-disable jsx-a11y/alt-text */
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    title: {
        fontFamily: "Title",
        textTransform: "uppercase",
        textAlign: "center"
    },
    linkContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "80px",
        height: "80px"
    }
    });

const Socials = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Socials</Text>
    <View style={styles.linkContainer}>
       <Image src="/qrgithub.png" style={styles.image}/>
       <Image src="/qrlinkedin.png" style={styles.image}/>
    </View>
    </View>
  )
}

export default Socials