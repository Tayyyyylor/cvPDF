/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react'
import Professional from '../sections/Professional';
import School from '../sections/School';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 10,
        gap: 20
      }
  });

const RightSide = ({lang}: any) => {
  return (
    <View style={styles.container}>
    <Professional lang={lang}/>
    <School lang={lang}/>
  </View>
  )
}

export default RightSide