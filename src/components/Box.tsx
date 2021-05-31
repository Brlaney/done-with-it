import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from '../styles/styles'

interface IProps {
  // Define any incoming component props
  children: React.ReactNode;
}

export default function Box({ children, ...props }: IProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText} {...props}>{children}</Text>
    </View>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired
}
