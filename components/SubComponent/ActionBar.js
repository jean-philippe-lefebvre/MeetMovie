import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { styles, colors } from '../../Styles.js';

import IconCross from '../../assets/icons/svg/cross'
import IconArrowCircle from '../../assets/icons/svg/arrowCircle'
import IconHeart from '../../assets/icons/svg/heart'

// Externe Components
import { LinearGradient } from 'expo-linear-gradient';

export function ActionBar({ args:{ trailer, closeTrailer, dontLike, reload, like } }){
  
  return <LinearGradient colors={['rgba(60,67,78,0)', 'rgba(27,32,38,0.7)']} style={{...styles.background, ...styles.footer, justifyContent: 'center'}}>
          <View style={{...styles.ligne, justifyContent: 'center', marginBottom:10}}>
  
          {trailer.ok ? <Pressable onPress={closeTrailer} style={style.iconBtn}>
                <IconCross style={[style.icon]}/>
              </Pressable> :
            <>
              <Pressable onPress={dontLike} style={style.iconBtn}>
                <IconCross style={[style.icon]}/>
              </Pressable>

              <Pressable onPress={reload} style={[style.iconBtn, {height:40, width:40, marginTop:10}]}>
                <IconArrowCircle style={[style.icon, {height:25}]}/>
              </Pressable>

              <Pressable onPress={like} style={style.iconBtn}>
                <IconHeart style={[style.icon, {height:35}]} />
              </Pressable>
            </>
          }

          </View>
          </LinearGradient>
}

const style = StyleSheet.create({
  icon: {
    height: 30
  },
  iconBtn: {
    height: 60,
    width: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: colors.black,
  }
})
