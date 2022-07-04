import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { styles } from '../../Styles.js';

// Externe Components
import { LinearGradient } from 'expo-linear-gradient'

// Components - Call in order
import { DetailsMovie } from './DetailsMovie'
import { Header } from '../SubComponent/Header'

import { MoviesList } from '../SubComponent/MoviesList'
import { Trailer } from '../SubComponent/Trailer'
import { Overlay } from '../SubComponent/Overlay'
import { SlideAndDrag } from '../animation/SlideAndDrag'
import { Poster } from '../SubComponent/Poster'
import { Filter } from './Filter'
import { Profil } from './Profil'

import { ActionBar } from '../SubComponent/ActionBar'

// Modules - API code
import RequestTmdb from '../../modules/requestTmdb.js'
import TmdbMovies from '../../modules/TmdbMovies.js'
import { Storage } from '../../modules/Storage'

const API_KEY = '1bfff1d64c3ccd096a0b6fd35cf0c7cc'
const tmdb = new RequestTmdb(API_KEY);
const tmdbMovies = new TmdbMovies(tmdb);
tmdbMovies.init({ random: true });

//Configuration overlay
async function loadApp() {
  const config = await Storage.getData('config')
  if(!config){
    await Storage.storeData('config', {overlay: false})
  }
}

loadApp()

const storageState = () => {
  
  Storage.multiSet([
    ['preferenceUser', tmdbMovies.preferenceUser],
    ['currentMovie', tmdbMovies.currentMovie],
    ['listMovie', tmdbMovies.listMovie],
    ['pointer', tmdbMovies.pointer],
  ], (e) => console.log(e) )
}

const getStateStorage = async () => {
  try {

    const prefUser = await Storage.getData('preferenceUser')
    const currentMovie = await Storage.getData('currentMovie')
    const listMovie = await Storage.getData('listMovie')
    const pointer = await Storage.getData('pointer')
    const config = await Storage.getData('config')

    const preferenceUser = prefUser ? {
      likeListScore: new Map(prefUser.likeListScore),
      historyLikeListScore: new Map(prefUser.historyLikeListScore),
      movieVotedList: new Map(prefUser.movieVotedList),
    } : null

    const data = {
      preferenceUser,
      currentMovie,
      listMovie,
      pointer,
      config
    }
    
    return data
  } catch (e) { console.log(e) }
}

export function Home() {
  const [currentMovie, setCurrentMovies]          = useState(null)

  const [trailer, setTrailer]                     = useState({ ok:false, uri:null })
  const [filter, setFilter]                       = useState({ ok:false, data:null})
  
  const [overlay, setOverlay]                     = useState(false)
  const [visibleDetail, setVisibleDetail]         = useState(false)
  const [visibleMovieList, setVisibleMovieList]   = useState(false)
  const [visibleProfil, setVisibleProfil]         = useState(false)

  useEffect(() => {
  	// Permet de modifier currentMovie depuis l'extérieur
    tmdbMovies.setCurrentMovie(setCurrentMovies)

    // Syncronise des variables avec les données enregistrées.
    getStateStorage().then(data => {
      if(data.preferenceUser) tmdbMovies.preferenceUser = data.preferenceUser
      if(data.listMovie) tmdbMovies.listMovie = data.listMovie
      if(data.pointer) tmdbMovies.pointer = data.pointer
      if(data.currentMovie) {
        tmdbMovies.currentMovie = data.currentMovie
        setCurrentMovies({...data.currentMovie})
      }

      if(data.config.overlay !== overlay) setOverlay(data.config.overlay)
    })

  }, [])

  let uriImageMovie = null
  let uriTrailer = null
	let imageTest = null

  if(currentMovie) {
			uriImageMovie	= tmdbMovies.getPosterImageUrl()
      tmdbMovies.getMovieUrl().then( (url) => { uriTrailer = url } )

			const imageTest = async() => await Image.prefetch(uriImageMovie, () => {
			})
			imageTest()	
  }
  
  if(filter.data){
    tmdbMovies.preferenceUser.likeListScore = filter.data.tags
  }
  
  // ACTIONS USERS
  const openDetail = () => setVisibleDetail(true);
  const closeDetail = () => setVisibleDetail(false);

  const openTrailer = () => setTrailer({ ok:true, uri:uriTrailer })
  const closeTrailer = () => setTrailer({ ok:false, uri:uriTrailer })

  const openFilter = () => setFilter(prev => ({ok:true, data:prev.data }) )
  const closeFilter = (newData) => {
    // If reset filter, it count the likeScore with the votedMovieList
    if(!newData) tmdbMovies.countScore()
    else tmdbMovies.next()
    setFilter({ok:false, data:newData})
  }

  const openMovieList = () => setVisibleMovieList(true)
  const closeMovieList = () => setVisibleMovieList(false)

  const openProfil = () => setVisibleProfil(true)
  const closeProfil = () => setVisibleProfil(false)

  const openOverlay = () => setOverlay(true)
  const closeOverlay = () => {
    setOverlay(false)
    Storage.storeData('config', {overlay: false})
  }

  const like = () => {
    tmdbMovies.like()
    tmdbMovies.next().then(() => storageState())
  };
  const dontLike = () => {
    tmdbMovies.dontLike()
    tmdbMovies.next().then(() => storageState())
  };
  const reload = () => {
    tmdbMovies.next().then(() => storageState())
  };

  const args = { tmdbMovies, currentMovie, uriImageMovie, 
    like, dontLike, reload, 
    openDetail, closeDetail,
    trailer, closeTrailer, openTrailer,
    openFilter, closeFilter, filter,
    openMovieList, closeMovieList,
    openProfil, closeProfil, 
    openOverlay, closeOverlay
  }

  return (
    <View style={styles.app}>

      {!currentMovie ? (
            <ActivityIndicator size="large"/>
      ) : (
				<Background uri={uriImageMovie}>
        <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)','rgba(0,0,0,0.7)']} style={styles.background}>

          { visibleDetail ? <DetailsMovie args={args} /> : null }
          { filter.ok ? <Filter args={args} /> : null }
          { visibleProfil ? <Profil args={args} /> : null }

        { visibleDetail || filter.ok || visibleProfil ? null :
          <>
          <Header args={args}/>

          { visibleMovieList ? <MoviesList listMovies={tmdbMovies.preferenceUser.movieVotedList}/> :
            <View style={styles.body}>

            { trailer.ok ? <Trailer uriMovie={trailer.uri} /> :
              <SlideAndDrag actionSlide={{ right: like, left: dontLike }} args={args}>
                  {!uriImageMovie ? <Text style={styles.txtNoFound}>No image found</Text> :
                    <Poster url={ uriImageMovie }/>
                  }
                </SlideAndDrag>
            }

            </View>
          }
          
          <ActionBar args={args} />
        </>
        }

        { overlay ? <Overlay args={args} /> : null }
        
        </LinearGradient>
        </Background>
      )}

    </View>
  );
}

function Background({children, uri}){
	return <ImageBackground source={{ uri: uri }} blurRadius={30} fadeDuration={0}
		style={styles.imgBackground} >
				{children}
		</ImageBackground>
}
