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
      backgroundColor: '#2196f3',
      boxShadow: '0px 2px 2px #000',
      alignItems: 'center',
      justifyContent: 'center'
  },
  title:{
      color: 'orange',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 2
  }
})