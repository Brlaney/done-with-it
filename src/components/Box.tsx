import * as React from 'react'
import * as PropTypes from 'prop-types'
import colors from '../../config/colors'
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

interface IProps {
  // Define any incoming component props
  children: React.ReactNode;
}

export default function Box({ children, ...props }: IProps) {
  let [fontsLoaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold
  })

  return (
    <View style={styles.box}>
      <Text style={styles.boxText} {...props}>{children}</Text>
    </View>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired
}

const styles = StyleSheet.create({
  box: {
    elevation: 6,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
    margin: 10
  },
  boxText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold'
  }
})
