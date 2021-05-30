import React from 'react'
import styles from './styles'
import Box from './Box'
import { 
  Text, 
  View, 
  StatusBar
} from 'react-native'

const boxes = new Array(10).fill(null).map((v, i) => i + 1)

export default function App() {
  const handlePress = () => console.log('You pressed or clicked on text')
  const handleTap = () => console.log('You have pressed or clicked on an image')

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {boxes.map(i => (
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  )
}
