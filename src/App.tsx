import React from 'react'
import Box from './components/Box'
import {
  StyleSheet,
  Text, 
  View, 
  StatusBar,
  Platform,
} from 'react-native'
import colors from '../config/colors'

const boxes = new Array(18).fill(null).map((v, i) => i + 1)

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {boxes.map(i => (
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  }
})
