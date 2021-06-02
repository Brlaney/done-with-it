import colors from '../../config/colors'
import {
  StyleSheet, 
  View,
  Text,
} from 'react-native'

function Header(props: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Welcome to this really 
        shitty React Native App
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.background
  }
})

export default Header
