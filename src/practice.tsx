import React from 'react'
import colors from '../config/colors'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableHighlight
} from 'react-native'

export default function App() {
  const handlePress = () => console.log('You pressed or clicked on text')
  const handleTap = () => console.log('You have pressed or clicked on an image')

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        Welcome to my React Native App
      </Text>
      <TouchableHighlight onPress={handleTap}>
        <Image
          source={{
            width: 300,
            height: 300,
            uri: 'https://picsum.photos/id/1043/300/300',
          }}
        />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    margin: 20,
    textAlign: 'center',
    color: colors.colorText,
    fontSize: 22,
    fontWeight: 'bold'
  },
})
