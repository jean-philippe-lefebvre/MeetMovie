import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { Home } from './components/Pages/Home';

export default function App() {
  return (
			<Container>
				<View style={styles.container}>
					<Home />
				</View>
			</Container>
  );
}

function Container({children}){
	return Platform.OS === 'ios' ? <SafeAreaView style={styles.container}>{children}</SafeAreaView>
		: <View style={{flex:1}}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
