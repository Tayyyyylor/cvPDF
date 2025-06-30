import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react'
import Contact from '../sections/Contact';
import Stacks from '../sections/Stacks';
import Socials from '../sections/Socials';

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 10
}
});

const LeftSide = () => {
  return (
  <View style={styles.container}>
    <Contact />
    <Stacks />
    <Socials />
  </View>
  )
}

export default LeftSide