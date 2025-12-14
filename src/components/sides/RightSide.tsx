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

const RightSide = () => {
  return (
    <View style={styles.container}>
    <Professional />
    <School />
  </View>
  )
}

export default RightSide