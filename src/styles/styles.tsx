import {
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f06449',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },
  box: {
    elevation: 6,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#f1f0ea',
    margin: 10
  },
  boxText: {
    fontSize: 18,
    color: 'darkslategray',
    fontWeight: 'bold'
  }
})
