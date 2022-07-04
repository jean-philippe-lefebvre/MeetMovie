import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, ActivityIndicator, Alert, BackHandler } from 'react-native'
import { styles, colors } from '../../Styles'

import { Storage } from '../../modules/Storage'
import IconTmdb from '../../assets/icons/svg/tmdb_logo'

export function Profil({ args:{ closeProfil, tmdbMovies, openOverlay } }){

	useEffect(() => {
		//Android function
	  const backAction = () => {
	  	closeProfil(); 
	  	return true
	  }
	  BackHandler.addEventListener("hardwareBackPress", backAction);
	  return () => BackHandler.removeEventListener("hardwareBackPress", backAction); 
	}, [])

  const [loading, setLoading] = useState(false)
  const openLoading = () => setLoading(true)
  const closeLoading = () => setLoading(false)

  const overlay = () => {
    closeProfil()
    openOverlay()
  }

  const notif = async () => {
    //Reset Data
    tmdbMovies.reset()
    await Storage.clear()

    tmdbMovies.init()

    //Stop Loading
    closeLoading()
    Alert.alert(
      "Action finish",
      "Data deleted",
    );
  }

  if(loading) setTimeout(notif, 500)

  return <View style={style.container}>
  
    <View style={{ ...styles.ligne, ...style.paddingSide, justifyContent: 'space-between', marginBottom: 30}}>
      <MyText css={{fontSize: 25, fontWeight: 'bold'}} >Parameter</MyText>
      <Pressable onPress={closeProfil}><MyText css={{ color: colors.red, fontWeight: 'bold' }}>Quit</MyText></Pressable>
    </View>

    <View style={{...styles.ligne, justifyContent: 'space-around' }}>
      <View style={style.btnTypeOfContent}>{loading ? <ActivityIndicator /> : <Btn onPress={openLoading} >Reset Data</Btn>}</View>
    </View>

     <View style={{...styles.ligne, justifyContent: 'space-around', marginTop: 15} }>
      <View style={style.btnTypeOfContent}><Btn onPress={overlay} >Overlay</Btn></View>
    </View>

    <View style={[style.paddingSide, {marginTop: 20}]}>
      <Text style={[style.text, {fontSize: 25, fontWeight: 'bold'}]}>Credits</Text>
      <View style={[styles.ligne, {alignContent:'space-between'}, {marginTop: 10}]}>
        <IconTmdb style={{height: 60, width:60, marginRight:10}} />
        <Text style={{...style.text, width:'70%', textAlign: 'justify'}}>This product uses the TMDb API but is not endorsed or certified by TMDb.</Text>
      </View>
			<View style={{margin: 20}}>
			<Text style={style.text}>Designer : Ludovic Dubost</Text>
			<Text style={style.text}>Developer : Jean-philippe Lefèbvre</Text>
			</View>
    </View>

  </View>
}

function MyText({ children, css }){
  return <Text style={[style.text, css ]}>{children}</Text>
}

function Btn({ children, css, onPress }){
  return <Pressable onPress={onPress}>
    <MyText css={css}>{children}</MyText>
  </Pressable>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0005',
    paddingTop: 30,
    paddingBottom: 30,
  },
  paddingSide: {
    paddingLeft: 30,
    paddingRight: 30
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },
   btnTypeOfContent: {
    padding: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white
  },
})
