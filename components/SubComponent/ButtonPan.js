import React from 'react'
import { View, PanResponder } from 'react-native'

export function ButtonPan({ children, style, callback, capture = false }){

  const pan = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => true,
    onMoveShouldSetPanResponder: (e, gestureState) => false,
    onPanResponderRelease: (e, gestureState) => callback(),
    onStartShouldSetPanResponderCapture: (e) => capture,
  })

  return <View {...pan.panHandlers} style={style}>
    { children }
  </View>
}