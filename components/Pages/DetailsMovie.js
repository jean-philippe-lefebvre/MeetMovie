import React, { useRef } from 'react'
import { View, ScrollView, Animated, Dimensions, Text, StyleSheet } from 'react-native'
import { styles } from '../../Styles.js';

import { DetailsMovieInfos } from '../SubComponent/DetailsMovieInfos';

const {width, height} = Dimensions.get('window')

export function DetailsMovie({ args, args:{ uriImageMovie } }) {

  const fadeAnim = useRef(new Animated.Value(0.5)).current
  const scaleImg = useRef(new Animated.Value(1)).current

  Animated.sequence([

    Animated.timing(fadeAnim,{
     duration: 1000,
      toValue: 1,
      useNativeDriver: true,
    }).start(),
    Animated.timing(scaleImg,{
      duration: 1500,
      toValue: 1.25,
      useNativeDriver: true,
    }).start(),

  ])

  return <ScrollView style={style.scrollView}>

    <View style={style.container}>
      <Animated.Image source={{ uri: uriImageMovie }}
        style={{...styles.posterImg, ...style.img,
          //opacity: fadeAnim,
          //transform: [{ scale: scaleImg }],
          }}
      />
    </View>

      <View style={{flex: 1}}>
          <DetailsMovieInfos args={args}/>
      </View>

  </ScrollView>
}

const style = StyleSheet.create({
  scrollView: {
    width: width,
    height: height,
  },
  container: {        
    flex: 1, 
    //backgroundColor: 'red',
    height: height / 1.5,
    alignItems: 'center',
  },
  img: {
    borderRadius: 0,
    transform: [{ scale: 1.35 }],
  }
})