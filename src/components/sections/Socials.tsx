/* eslint-disable @typescript-eslint/no-explicit-any */
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
    },
    contact: {
        fontSize: 11,
        color: "#02326e",
    },
    contactContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        marginBottom: 15
    }
    });

      const translations: any = {
  fr: {
    phone: "Tél",
    github: "Lien Github",
    linkedIn: "Lien LinkedIn",
    portfolio: "Lien Portfolio"
  },
  en: {
    phone: "Phone",
      github: "Github link",
    linkedIn: "LinkedIn link",
    portfolio: "Portfolio link"
  },
};

const Socials = ({lang}: any) => {

      const t = translations[lang] ?? translations.fr;
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Socials</Text>
        <View style={styles.contactContainer}>
            <Text style={styles.contact}>{t.phone}: 06.18.09.07.33</Text>
            <Link href="mailto:bryan.houblon@icloud.com">
            <Text style={styles.contact}>bryan.houblon@icloud.com</Text>
            </Link>
        </View>
    <View style={styles.linkContainer}>
        <View style={styles.cont}>
  <Link src="https://github.com/Tayyyyylor">
  <Text style={styles.link}>{t.github}</Text>
</Link>
       <Image src="/qrgithub.png" style={styles.image}/>
        </View>
        <View style={styles.cont}>
              <Link src="https://www.linkedin.com/in/bryan-houblon-172121211/">
  <Text style={styles.link}>{t.linkedIn}</Text>
</Link>
       <Image src="/qrlinkedin.png" style={styles.image}/>
        </View>
    </View>
    <View style={styles.portfolioContainer}> 
        <Link src="https://www.bryanhoublon.com">
  <Text style={styles.link}>{t.portfolio}</Text>
</Link>
        <Image src="/qrportfolio.png" style={styles.image}/>
       </View>
    </View>
  )
}

export default Socials