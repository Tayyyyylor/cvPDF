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
    const frontData = [
        {
            name: "HTML",
            icon: "/html.png"
        },
        {
            name: "CSS",
            icon: "/css.png"
        },
        {
            name: "Sass",
            icon: "/sass.png"
        },
        {
            name: "TailwindCSS",
            icon: "/tailwindcss.png"
        },
        {
            name: "JS",
            icon: "/javascript.png"
        },
        {
            name: "TS",
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
        
    ]

    const backData = [
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
        {
            name: "Mysql",
            icon: "/mysql.png"
        },
        
    ]

    const opsData = [
        {
            name: "Docker",
            icon: "/docker.png"
        },
        {
            name: "Supabase",
            icon: "/supabase.png"
        },
        
    ]

    const toolsData = [
        {
            name: "Strapi",
            icon: "/strapi.png"
        },
        {
            name: "Contentful",
            icon: "/contentful.png"
        },
        {
            name: "Cloudinary",
            icon: "/cloudinary.png"
        },
        {
            name: "Jest",
            icon: "/jest.png"
        },
        {
            name: "Figma",
            icon: "/figma.png"
        },
        
    ]
  return (
        <View>
            <Text style={styles.title}>Compétences</Text>
      <View>
        <Text style={styles.subtitle}>Front</Text>
        <View style={styles.section}>
        {frontData.map((stack, index) => (
            <View key={index} style={styles.stackContainer}>
            <Image src={stack.icon} style={styles.icon}/>
            <Text style={styles.text}>{stack.name}</Text>
            </View>
        ))
    }
    </View>
    </View>
    <View>
        <Text style={styles.subtitle}>Back</Text>
        <View style={styles.section}>
        {backData.map((stack, index) => (
            <View key={index} style={styles.stackContainer}>
            <Image src={stack.icon} style={styles.icon}/>
            <Text style={styles.text}>{stack.name}</Text>
            </View>
        ))
    }
    </View>
    </View>
    <View>
        <Text style={styles.subtitle}>Ops</Text>
        <View style={styles.section}>
        {opsData.map((stack, index) => (
            <View key={index} style={styles.stackContainer}>
            <Image src={stack.icon} style={styles.icon}/>
            <Text style={styles.text}>{stack.name}</Text>
            </View>
        ))
    }
    </View>
    </View>
    <View>
        <Text style={styles.subtitle}>Tools</Text>
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