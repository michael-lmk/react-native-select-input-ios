import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles.js'
import propTypes from './types.js'

class KeyboardButton extends Component {
  render() {
    const { onPress, text, textAlign, textStyle } = this.props

    return (
      <TouchableOpacity style={{width:"25%"}} onPress={onPress}>
        <Text
          allowFontScaling={false}
          style={[styles.buttontext, textStyle, { textAlign: textAlign,fontWeight:text=='OK'?'600':'normal' ,width:"100%"}]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

KeyboardButton.propTypes = propTypes

export default KeyboardButton
