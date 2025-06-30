/* eslint-disable jsx-a11y/alt-text */
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 3
    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    text: {
        fontSize: 12,
        fontWeight: "bold"
    },
    icon: {
        width: 16,
        height: 16
    }
})

const Contact = () => {
    const data = [
        {
            icon: "/phone.png",
            text: "06.18.09.07.33"
        },
        {
            icon: "/mail.png",
            text: "bryan.houblon@icloud.com"
        },
        // {
        //     icon: "",
        //     text: "linkedin"
        // },
        // {
        //     icon: "",
        //     text: "github"
        // },
    ]
  return (
   <View style={styles.container}>
        {data.map((dt, index) => (
            <View key={index} style={styles.contactContainer}>
                <Image src={dt.icon} style={styles.icon}/>
                <Text style={styles.text}>{dt.text}</Text>
            </View>
        ))

        }
   </View>
  )
}

export default Contact