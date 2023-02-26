import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableHighlight } from 'react-native'
import { useTheme } from '@/Hooks'

const AnswerCandidate = ({ img, selected, onSelected }) => {
  const { Layout, Images } = useTheme()
  
  return (
    <TouchableHighlight onPress={ onSelected }>
      <View style={{ borderWidth:selected?1:0 }}>
        <Image source={img} style={{ width:100, height:100}}/>
      </View>
    </TouchableHighlight>
  )
}

AnswerCandidate.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

AnswerCandidate.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default AnswerCandidate
