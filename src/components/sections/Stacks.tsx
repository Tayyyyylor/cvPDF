/* eslint-disable jsx-a11y/alt-text */
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'


const styles = StyleSheet.create({
    section: {
        gap: 4,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "center",
    },
    stackContainer: {
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "30%", 
    }, 
    icon: {
        width: 16,
        height: 16,
        marginBottom: 2,
    },
    text: {
        fontSize: 11,
        textAlign: "center"
    },
    title: {
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10,
            fontFamily: "Title",
            textTransform: "uppercase",
    },
    subtitle: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: "bold"
    }
})

const Stacks = () => {
    const mainStack = [
        {
            name: "Typescript",
            icon: "/typescript.png"
        },
        {
            name: "React",
            icon: "/react.png"
        },
        {
            name: "Next.js",
            icon: "/nextdotjs.png"
        },
        {
            name: "Expo",
            icon: "/expo.png"
        },
        {
            name: "TailwindCSS",
            icon: "/tailwindcss.png"
        },
        {
            name: "Nodejs",
            icon: "/nodejs.png"
        },
        {
            name: "Python",
            icon: "/python.png"
        },
        {
            name: "Mariadb",
            icon: "/mariadb.png"
        },
        {
            name: "Postgresql",
            icon: "/postgresql.png"
        },
    ]
    
    const toolsData = [
        {
            name: "Docker",
            icon: "/docker.png"
        },
        {
            name: "Supabase",
            icon: "/supabase.png"
        },
        {
            name: "Strapi",
            icon: "/strapi.png"
        },
        {
            name: "Contentful",
            icon: "/contentful.png"
        },
        {
            name: "Storyblok"
        },
        {
            name: "Storybook"
        },
        {
            name: "Jest",
            icon: "/jest.png"
        },
    ]
  return (
        <View>
            <Text style={styles.title}>Compétences</Text>
      <View>
        <Text style={styles.subtitle}>Stack principale</Text>
        <View style={styles.section}>
        {mainStack.map((stack, index) => (
            <View key={index} style={styles.stackContainer}>
            <Image src={stack.icon} style={styles.icon}/>
            <Text style={styles.text}>{stack.name}</Text>
            </View>
        ))
    }
    </View>
    </View>
    <View>
        <Text style={styles.subtitle}>Outils & Écosystème</Text>
        <View style={styles.section}>
        {toolsData.map((stack, index) => (
            <View key={index} style={styles.stackContainer}>
            <Image src={stack.icon} style={styles.icon}/>
            <Text style={styles.text}>{stack.name}</Text>
            </View>
        ))
    }
    </View>
    </View>
    </View>
  )
}

export default Stacks