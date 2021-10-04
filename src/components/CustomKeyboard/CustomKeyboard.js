import React, { Component } from 'react'
import { Dimensions, Modal, TouchableWithoutFeedback, View,Text ,useWindowDimensions} from 'react-native'

import KeyboardButton from '../KeyboardButton'

import propTypes from './types.js'
import styles from './styles.js'

class CustomKeyboard extends Component {
  
  state = {
    width: Dimensions.get('window').width,
  
  }
  

  updateDimensions = () => {
    this.setState({
      width: Dimensions.get('window').width
    })
  }

  onCancelPress = () => {
    const { onCancelPress } = this.props
    onCancelPress()
  }

  onSubmitPress = () => {
    const { onSubmitPress } = this.props
    onSubmitPress()
  }

  render() {
    const { width } = this.state
    const {
      buttonsTextStyle,
      buttonsViewStyle,
      visible,
      cancelKeyText,
      submitKeyText,
      children,
      titleModal
    } = this.props

    return (
    
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
        onOrientationChange={this.updateDimensions}
        supportedOrientations={[
          'portrait',
          'landscape',
          'landscape-left',
          'landscape-right'
        ]}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={[styles.modal,{width:width>600?500:"95%"}]}>
              <View style={[styles.buttonview, buttonsViewStyle]}>
                <KeyboardButton
                  onPress={this.onCancelPress}
                  text={cancelKeyText}
                  textAlign={'left'}
                  textStyle={buttonsTextStyle}
                />
              <Text style={{alignSelf:"center",fontSize:18,fontWeight:'600'}}>{titleModal}</Text>
                <KeyboardButton
                  onPress={this.onSubmitPress}
                  text={submitKeyText}
                  textAlign={'right'}
                  textStyle={buttonsTextStyle}
                />
              </View>

              <View>{children}</View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    
    )
  }
}

CustomKeyboard.propTypes = propTypes

export default CustomKeyboard
