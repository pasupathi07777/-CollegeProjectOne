import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import ResetPassword from './src/screens/auth/ResetPassword'

const App = () => {
  return (
    <View style={styles.container}>
    {/* <Login/> */}
    {/* <Signup/> */}
    <ResetPassword/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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