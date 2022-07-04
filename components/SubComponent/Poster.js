import React from 'react';
import { View, Image, Platform } from 'react-native';
import { styles } from '../../Styles.js';

export function Poster({ url }) {
  return (
    <View style={styles.poster}>
			<Image source={{ uri: url }} style={styles.posterImg} resizeMode='cover' fadeDuration={0} /> 
    </View>
  );
}
