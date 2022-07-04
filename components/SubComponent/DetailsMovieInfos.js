import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions, FlatList, Image, BackHandler } from 'react-native';
import { styles, colors } from '../../Styles'
import { adaptDate } from '../../modules/utils'
import { ActionBar } from './ActionBar'

// Externe Components
import { LinearGradient } from 'expo-linear-gradient'

import IconTop from '../../assets/icons/arrows/top'
import IconImage from '../../assets/icons/svg/image'

const {width, height} = Dimensions.get('window')

export function DetailsMovieInfos({ args, args: { tmdbMovies, currentMovie, closeDetail } }) {

	useEffect(() => {
		//Android function
	  const backAction = () => {
	  	closeDetail(); 
	  	return true
	  }
	  BackHandler.addEventListener("hardwareBackPress", backAction);
	  return () => BackHandler.removeEventListener("hardwareBackPress", backAction); 
	}, [])

  const genres = tmdbMovies.getGenres()
  const movie = currentMovie.details
  const credit = { casts: tmdbMovies.getCasts(10), crew: tmdbMovies.getCrew(10) }

  const overview = movie.overview
  const date = adaptDate(movie.release_date)
  const runtime = { h: Math.trunc(+movie.runtime / 60), m: (+movie.runtime % 60) }

		//console.log(credit.casts)

  const dataCredit = credit.casts.map( cast => ({
    id : cast.id,
    name: cast.name,
    character: cast.character,
    popularity: cast.popularity,
    profilePath: cast.profile_path,
    job: cast.known_for_department,
  }))

  const renderCast = ({item}) => {
    const icone = !/null/.test(item.profilePath) ?
      <Image source={{uri: item.profilePath}} style={style.castIcon} />
      : <IconImage style={style.castIcon} />
      
    return <View style={style.castContainer}>
      {icone}
      <Text style={style.castsName}>{item.name}</Text>
      <Text style={style.castCharacter}>{item.character}</Text>
    </View>
  }
  
  return (
      <View style={style.modal}>

      <Pressable onPress={closeDetail} style={[style.btnCloseModal, {justifyContent:'center', zIndex:3}]} >

        <LinearGradient colors={['rgba(67,255,156,1)', 'rgba(129,64,255,1)']} 
          style={{flex:1, borderRadius:30, justifyContent:'center', transform:[{ rotate: "-45deg" }]}}>
          <IconTop style={{height:40, transform:[{ rotate: "45deg" }]}}/>
        </LinearGradient>
      </Pressable>

      <View style={{ ...style.separator, padding: 25, paddingBottom: 20 }}>
          <Text style={[styles.title, style.title]}>{movie.title}</Text>
          
          <View>
            {!date ? null : 
              <View style={[ style.group, styles.ligne ]}>
                <Text style={[ style.item ]}>📅</Text>
                <Text style={{ ...style.value, ...style.espace, fontStyle:'italic' }}>{date}</Text>
              </View>
            }
            {!runtime ? null : 
              <View style={[ style.group, styles.ligne ]}>
                <Text style={[ style.item ]}>⏱</Text>
                <Text style={{ ...style.value, ...style.espace, fontStyle:'italic' }}>{runtime.h + 'h ' + runtime.m + ' min'}</Text> 
              </View>
            }
          </View>
          
          {!genres ? null :
            <View style={{ ...styles.group, ...styles.ligne, left: -10 }}>
              {genres.split(',').map((genre,i) => <View key={i} style={style.genre}>
                <Text style={[style.value]}>{genre}</Text>
              </View> )}
            </View>
          }
          </View>
          <View style={{ paddingLeft: 25, paddingRight: 25, paddingTop: 25 }}>

            {!overview ? null :
              <View style={[styles.group, style.overview]}>
                <Text style={[ style.value ]}>{overview}</Text>
              </View>
            }

            <View style={{ marginBottom: 20}}>
                <Text style={{...style.value, fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>Casting</Text>
                <FlatList
                  data={dataCredit}
                  renderItem={renderCast}
                  keyExtractor={item => item.id.toString()}
                  horizontal={true}
                />
            </View>

          </View>

          <ActionBar args={args}/>

      </View>
  );
}

const style = StyleSheet.create({
  modal: {
    backgroundColor: colors.black,
    opacity: 1,
    width: width,
    paddingBottom: 30,
  },
  group: {
    marginBottom: 5,
  }, 
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  item: {
    fontWeight: 'bold',
    color: colors.white,
  },
  espace: {
    marginLeft: 5,
  },
  value: {
    color: colors.white,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    width: width,
  },
  genre: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 12,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  btnCloseModal: {
    position: 'absolute',
    top: -35,
    left: '75%',
    height: 60,
    width: 60,
    },
  overview: {
    marginBottom: 20,
  },
  castContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    margin: 5,
  },
  castIcon: {
    height: 45,
    width: 45,
    borderRadius: 50
  },
  castsName:{
    color: colors.white,
    fontStyle:'italic',
    fontWeight: 'bold',
  },
  castCharacter: {
    color: colors.white,
    fontStyle:'italic',
    fontSize: 12,
  },
})
