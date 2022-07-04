import React from 'react'
import { View, Image, Text, ScrollView, FlatList, StyleSheet } from 'react-native'

/**
 * Display a list of Movies
 * @param {Map} listMovies, List of Movies
 */
export function MoviesList({ listMovies }){

  const listMovie = new Array()
  listMovies.forEach( (key,value) => {
    listMovie.push({
      id: key,
      value: value
    })
  })

  const renderItem = (item) => {
    const movie= item.value
    return <View style={style.movie}>
      <Image source={{uri: movie.uriPoster }} style={style.img}/>
      <Text style={style.title}>{movie.title}</Text>
    </View>
  }

  return <ScrollView style={style.container}> 
    <FlatList
      data={listMovie}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </ScrollView>
}

const style = StyleSheet.create({
  container: {
    flex: 8,
    flexWrap: 'wrap',
  },
  movie: {
  },
  img: {
    height: 100,
    width: 50,
  },
  title: {
    fontSize: 15,
  }
})