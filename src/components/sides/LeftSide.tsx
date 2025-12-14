import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react'
import Stacks from '../sections/Stacks';
import Socials from '../sections/Socials';

const styles = StyleSheet.create({
container: {
  flex: 1,
}
});

const LeftSide = () => {
  return (
  <View style={styles.container}>
    <Stacks />
    <Socials />
  </View>
  )
}

export default LeftSide