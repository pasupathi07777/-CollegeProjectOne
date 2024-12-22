import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/auth/Login'

const App = () => {
  return (
    <View style={styles.container}>
    <Login/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
    width:"100%",
  },
})