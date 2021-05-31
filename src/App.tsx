import React from 'react'
import styles from './styles/styles'
import Box from './components/Box'
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
      {boxes.map(i => (
        <Box key={i} >#{i}</Box>
      ))}
    </View>
  )
}
