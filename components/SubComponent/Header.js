import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { styles } from '../../Styles'

import IconFilter from '../../assets/icons/svg/filter'
import IconProfil from '../../assets/icons/svg/profil'

export function Header({ args:{ openFilter, openMovieList, openProfil, filter} }){

  return (
    <View style={styles.header}>
      <Pressable onPress={openFilter} style={style.iconBtn}>
        <IconFilter style={{height:30}} />
        {filter.data ? <View style={style.cercle}></View> : null}
      </Pressable>

      <Pressable onPress={() => {}}>
        <Text style={styles.headerFont}> Selection </Text>
      </Pressable>

    <Pressable onPress={openProfil} style={style.iconBtn}>
      <IconProfil style={{height:30}} />
    </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  iconBtn: {
    width:40,
    height:40,
    marginTop:10,
    justifyContent:'center',
  },
  cercle: {
    width:10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'red',
    
    position: 'absolute',
    bottom: 1,
    right: 1
  }
})