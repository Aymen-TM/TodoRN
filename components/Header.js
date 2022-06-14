import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
      height: 50,
      backgroundColor: '#ff7f50',
      boxShadow: '0px 2px 2px #000',
      alignItems: 'center',
      justifyContent: 'center'
  },
  title:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 2
  }
})