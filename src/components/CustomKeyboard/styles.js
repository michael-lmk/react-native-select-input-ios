import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(52, 52, 52, 0.8)'
    
    // backgroundColor:'red',
    // marginHorizontal:50
  },
  modal: {
    borderRadius:15,
    padding: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    // width:300
    // marginHorizontal:50
  },
  buttonview: {
    padding: 0,
    // borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#CCCFD6',
    borderColor: '#CCCFD6',
    // borderTopColor: 'lightgrey',
  }
})

export default styles
