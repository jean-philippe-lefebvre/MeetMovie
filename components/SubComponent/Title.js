import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../Styles.js';


import { adaptDate } from '../../modules/utils';

export function Title({ data }){
  const title = verifData(data)

  return <LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)','rgba(0,0,0,0.8)']} style={styles.titleView}>
    <Text style={styles.title} >{title}</Text>
    {!data.details.release_date ? null :
    <Text style={styles.subtitle}>
      {adaptDate(data.details.release_date)}
    </Text>
      }
      </LinearGradient>
}

function verifData(data){
  let title = data.movie.title
  if(title.length && title.length > 20) title = title.substring(0,18) + '...'
  return title
}