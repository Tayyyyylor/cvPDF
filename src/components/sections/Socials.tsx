/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    title: {
        fontFamily: "Title",
        textTransform: "uppercase",
        marginBottom: 15

    },
    subtitle : {
        color: "#02326e",
        fontWeight: "bold",
        fontSize: 16,
    },
    linkContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
    },
    image: {
        width: 80,
        height: 80
    },
    link: {
        fontSize: 11,
         color: "#02326e",
    },
    portfolioContainer: {
        display: "flex",
        flexDirection: "column"
    },
    cont: {
        display: "flex",
        flexDirection: "column"
    }
    });

const Socials = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Socials</Text>
    <View style={styles.linkContainer}>
        <View style={styles.cont}>
  <Link src="https://github.com/Tayyyyylor">
  <Text style={styles.link}>Lien Github</Text>
</Link>
       <Image src="/qrgithub.png" style={styles.image}/>
        </View>
        <View style={styles.cont}>
              <Link src="https://www.linkedin.com/in/bryan-houblon-172121211/">
  <Text style={styles.link}>Lien LinkedIn</Text>
</Link>
       <Image src="/qrlinkedin.png" style={styles.image}/>
        </View>
    </View>
    <View style={styles.portfolioContainer}> 
        <Link src="https://www.bryanhoublon.com">
  <Text style={styles.link}>Lien Portfolio</Text>
</Link>
        <Image src="/qrportfolio.png" style={styles.image}/>
       </View>
    </View>
  )
}

export default Socials