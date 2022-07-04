import React from 'react';
import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const white = '#F3F9FF'
const black = '#1B2026'
const green = '#43FF9C'
const red = '#FF4367'

const {width, height} = Dimensions.get('window')
const pixelFontScale = PixelRatio.getFontScale()
const pixelFont = Math.round(pixelFontScale > 1 ? ((pixelFontScale * 4) ) : 0)

const fontTitle = 30 - pixelFont;
const fontBody = 30 - pixelFont;

const imgWidth = width - 70;
const imgHeight = Math.round( height - ( ((height/100) - 2) * 50 ) )

const calculatedValue = {
  imgWidth: imgWidth,
  imgHeight: imgHeight
}

const colors = {
    white,
    black,
    green,
    red
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'WorkSans',
		backgroundColor: 'black',
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  background: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: white,
  },
  headerFont: {
    fontSize: 20,
    color: white,
    fontWeight: '600',
  },
  body: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    //position:'absolute',
    //backgroundColor: 'red',
  },
  footer: {
    flex: 2,
    //backgroundColor: 'green',
  },
  imgButtonTop: {
    position: 'absolute',
    width: imgWidth,
    height: imgHeight / 2,
    //backgroundColor: 'red',
    borderRadius: 5,
    zIndex: 3,
  },
  imgButtonBottom: {
    position: 'absolute',
    width: imgWidth,
    bottom: 0,
    height: imgHeight / 2,
    //backgroundColor: 'blue',
    borderRadius: 5,
    zIndex: 3,
  },
  titleView: {
    bottom: 0,
    padding: 10,
    width: '100%',
    position: "absolute",
    
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: white,
    width: width - 100,
    textAlign: 'left',
  },
  subtitle: {
    color: '#F3F9FF',
    fontStyle: 'italic',
    opacity: 0.7,
  },
  ligne: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  poster: {
    width: imgWidth,
    height: imgHeight,
    //backgroundColor: 'green',
  },
  posterImg: {
    width: imgWidth,
    height: imgHeight,
    borderRadius: 5,
  },

  btn: {
    marginLeft: 20,
    marginRight: 20,
    //backgroundColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2
      },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  txtNoFound: {
    fontSize: 30,
    fontWeight: "700",
    color: '#fff',
  },
  
  colorError: {
    color: '#FF4367',
  },
  colorValidated: {
    color: '#43FF9C',
  },
});

export { styles, calculatedValue, colors};
