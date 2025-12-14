/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const splitInTwoColumns = (items: any) => {
  const middle = Math.ceil(items.length / 2);
  return [items.slice(0, middle), items.slice(middle)];
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 20
    },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    width: "48%",
  },
  stackItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  text: {
    fontSize: 10,
  },
  title: {
  marginTop: 10,
    fontFamily: "Title",
    textTransform: "uppercase",
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#02326e"
  },
});

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
            name: "Nodejs",
            icon: "/nodedotjs.png"
        },
        {
            name: "Nestjs",
            icon: "/nestjs.png"
        },
        {
            name: "Python",
            icon: "/python.png"
        },
        {
            name: "TailwindCSS",
            icon: "/tailwindcss.png"
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
            name: "Storyblok",
            icon: "/storyblok.png"
        },
        {
            name: "Storybook",
            icon: "/storybook.png"
        },
        {
            name: "Jest",
            icon: "/jest.png"
        },
    ]

    const [leftMain, rightMain] = splitInTwoColumns(mainStack);
    const [leftTools, rightTools] = splitInTwoColumns(toolsData);
  return (
        <View>
            <Text style={styles.title}>Compétences</Text>
      <View style={styles.mainContainer}>
  <Text style={styles.subtitle}>Stack principale</Text>

  <View style={styles.section}>
    <View style={styles.column}>
      {leftMain.map((stack: any, index: number) => (
        <View key={index} style={styles.stackItem}>
          <Image src={stack.icon} style={styles.icon} />
          <Text style={styles.text}>{stack.name}</Text>
        </View>
      ))}
    </View>

    <View style={styles.column}>
      {rightMain.map((stack: any, index: number) => (
        <View key={index} style={styles.stackItem}>
          <Image src={stack.icon} style={styles.icon} />
          <Text style={styles.text}>{stack.name}</Text>
        </View>
      ))}
    </View>
  </View>
</View>
   <View>
  <Text style={styles.subtitle}>Outils & Écosystème</Text>

  <View style={styles.section}>
    <View style={styles.column}>
      {leftTools.map((stack: any, index: number) => (
        <View key={index} style={styles.stackItem}>
          <Image src={stack.icon} style={styles.icon} />
          <Text style={styles.text}>{stack.name}</Text>
        </View>
      ))}
    </View>

    <View style={styles.column}>
      {rightTools.map((stack: any, index: number) => (
        <View key={index} style={styles.stackItem}>
          <Image src={stack.icon} style={styles.icon} />
          <Text style={styles.text}>{stack.name}</Text>
        </View>
      ))}
    </View>
  </View>
</View>
    </View>
  )
}

export default Stacks