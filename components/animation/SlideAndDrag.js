import React, { useRef } from 'react'
import { Animated, PanResponder } from 'react-native'
import { styles } from '../../Styles.js';

import { ButtonPan } from '../SubComponent/ButtonPan'
import { Title } from '../SubComponent/Title'

export function SlideAndDrag({ children, style, actionSlide, args:{ currentMovie, openDetail, openTrailer } }) {

  const pan = useRef(new Animated.ValueXY({x:0,y:0})).current
  const opacityGreen = pan.x.interpolate({
    inputRange: [0, 20, 50, 100],
    outputRange: [0, 0, 0.5, 0.5]
  })
  const opacityRed = pan.x.interpolate({
    inputRange: [-100, -50, -20, 0],
    outputRange: [0.5, 0.5, 0, 0]
  })
  const rotation = pan.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-10deg', '0deg', '10deg']
  })
 
  const colorGreen = "rgb(67,255,156)"
  const colorRed = "rgb(255,67,103)"

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => true,
    // Mouvement du doigt
    onPanResponderMove: Animated.event([
            null,
            { dx: pan.x,
              dy: pan.y,
            }
          ],
          { useNativeDriver: false, }
        ),
    // Relacher le doigt 
    onPanResponderRelease: (e, gestureState) => {
      Animated.spring(pan, { 
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();

        const dx = gestureState.dx
        if(dx >= 50 || dx <= -50){
          if(dx >= 50) actionSlide.right()
          if(dx <= 50) actionSlide.left()
        }
      },
  })
  
  return <Animated.View 
            {...panResponder.panHandlers} 
            style={{ ...style, transform: [{ translateX: pan.x, }, { translateY: Animated.multiply(pan.y, new Animated.Value(0.2))}, { rotate: rotation }] }}
          >

        <ButtonPan style={[styles.imgButtonTop]} callback={openTrailer}></ButtonPan>
        <ButtonPan style={[styles.imgButtonBottom]} callback={openDetail}>
          <Title data={currentMovie}/>
        </ButtonPan>

        <Animated.View style={[styles.posterImg, {
          backgroundColor: colorGreen,
          position: 'absolute',
          zIndex: 2,
          opacity: opacityGreen,
          }] }></Animated.View> 
          
          <Animated.View style={[styles.posterImg, {
          backgroundColor: colorRed,
          position: 'absolute',
          zIndex: 2,
          opacity: opacityRed,
          }] }></Animated.View>

    { children }
  </Animated.View>
}