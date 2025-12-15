/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react'
import Stacks from '../sections/Stacks';
import Socials from '../sections/Socials';

const styles = StyleSheet.create({
container: {
  flex: 1,
}
});

const LeftSide = ({lang}: any) => {
  return (
  <View style={styles.container}>
    <Stacks lang={lang}/>
    <Socials lang={lang}/>
  </View>
  )
}

export default LeftSide