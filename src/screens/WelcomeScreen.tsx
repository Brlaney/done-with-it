import React from 'react'
import {
  StyleSheet, 
  View, 
} from 'react-native'

function WelcomeScreen(props: any) {
  return (
    <View style={styles.background}
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ee0979',
    background: 'linear-gradient(to right, #ff6a00, #ee0979)',
  }
})

export default WelcomeScreen
