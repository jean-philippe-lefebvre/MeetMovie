import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, StyleSheet, Pressable, BackHandler } from 'react-native'
import { styles, colors } from '../../Styles'
import json from '../../assets/tagList'

export function Filter({ args:{ closeFilter, tmdbMovies } }){

	useEffect(() => {
		//Android function
	  const backAction = () => {
	  	closeFilter(null); 
	  	return true
	  }
	  BackHandler.addEventListener("hardwareBackPress", backAction);
	  return () => BackHandler.removeEventListener("hardwareBackPress", backAction); 
	}, [])

  const configTmdb = tmdbMovies.config
  const genreLiked = tmdbMovies.preferenceUser.likeListScore

  const handlePress = (tag) => {
    const valueTag = data.tags.get(tag)
    const newValueTag = valueTag >= configTmdb.limitPositifPoint ? configTmdb.limitNegatifPoint - 5
      : valueTag <= configTmdb.limitNegatifPoint ? 0
      : configTmdb.limitPositifPoint + 5

    setData(prev => {
      let tags = prev.tags
      tags.set(tag, newValueTag)
      return {...prev, tags}
    })
  }

  const tags = new Map()
  json.tags.forEach(tag => {
    const pointTag = genreLiked.get(tag.id) || 0
    tags.set(tag.id, pointTag) 
  })

  const [data, setData] = useState({tags})

  const listTags = json.tags.map((tag,i) => {
    const selectedP = data.tags.get(tag.id) >= configTmdb.limitPositifPoint ? style.genreLike : null
    const selectedN = data.tags.get(tag.id) <= configTmdb.limitNegatifPoint ? style.genreDontLike : null

    return <Pressable key={i} onPress={() => handlePress(tag.id)} style={[style.genre, selectedP, selectedN]}>
      <MyText>{tag.name}</MyText>
    </Pressable>
  })

  return <View style={style.container}>
				<View style={{ ...styles.ligne, ...style.paddingSide, justifyContent: 'space-between', marginBottom: 30}}>
					<MyText css={{fontSize: 25, fontWeight: 'bold'}} >Filter</MyText>
					<Pressable onPress={() => closeFilter(null)}><MyText css={{ color: colors.red, fontWeight: 'bold' }}>Reset</MyText></Pressable>
					<Pressable onPress={() => closeFilter(data)}><MyText css={{ color: colors.green, fontWeight: 'bold' }}>Submit</MyText></Pressable>
				</View>

				<View style={{ ...style.border, marginBottom: 10}}>
					<View style={{...style.paddingSide}}>
						<MyText css={style.title}>Type of content</MyText>
						<View style={{...styles.ligne, justifyContent: 'space-around' }}>
							<View style={style.btnTypeOfContent}><MyText>Movie</MyText></View>
						</View>
						</View>
				</View>

				<View style={style.paddingSide}>
					<MyText css={style.title}>Genre</MyText>
					<View style={{ ...styles.ligne }}>
						{listTags}
					</View>
				</View>

			</View>
}

function MyText({ children, css }){
  return <Text style={[style.text, css ]}>{children}</Text>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.10)',
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
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  border: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  },
  btnTypeOfContent: {
    padding: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white
  },
  genre: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 12,
    margin: 5,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  genreLike: {
    backgroundColor: colors.green + '25',
  },
  genreDontLike: {
    backgroundColor: colors.red + '25',
  },
})
