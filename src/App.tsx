import React from 'react'
import styles from './styles/styles'
import Box from './components/Box'
import Header from './components/Header'
import { 
  Text, 
  View, 
  StatusBar
} from 'react-native'

const boxes = new Array(10).fill(null).map((v, i) => i + 1)

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Header />
      {boxes.map(i => (
        <Box key={i} >#{i}</Box>
      ))}
    </View>
  )
}
