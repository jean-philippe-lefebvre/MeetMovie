import React, { useState } from 'react'
import { View, StyleSheet, Text, Pressable, Animated } from 'react-native'
import { styles, colors } from '../../Styles'

/**
 * TODO:
 *  - ARROW DON'T WORK (Next and Before)
 */
export function Overlay({ args:{closeOverlay} }){

  const [stepPresentation, setStepPresentation] = useState({step:1, maxSubStep:false})
  const step = stepPresentation.step

  return <View style={style.container}>
    {step === 1 ? <PresentationPoster setPresentationStep={setStepPresentation} close={closeOverlay} maxSubStep={stepPresentation.maxSubStep} /> : null}
    {step === 2 ? <PresentationFooter setPresentationStep={setStepPresentation} close={closeOverlay} maxSubStep={stepPresentation.maxSubStep} /> : null}
    {step === 3 ? <PresentationHeader setPresentationStep={setStepPresentation} close={closeOverlay} maxSubStep={stepPresentation.maxSubStep} /> : null}
    {step === 4 ? <PresentationEnd close={closeOverlay}/> : null}
  </View>
}

function PresentationEnd({ close }){

  return <>
      <Header close={close} visibilityBtnClose={true}/>

      <Animated.View style={[style.poster, style.alignContent]}>
        <AreaText onPress={close} title={'Now, you know use the App !'} subTitle={"(click)"}/>
      </Animated.View>

      <View style={[style.footer]}></View>
  </>
}
function PresentationHeader({ close, setPresentationStep}){
    const [step, setStep] = useState(7)
    const nextStep = () => setStep(prev => {
      if(prev < 9) return prev+1
      setPresentationStep({step:4})
    })
    const lessStep = () => {
      setStep(prev => {
        if(prev > 7) return prev-1
        setPresentationStep({step:2, maxSubStep:true})
      })
    }

  return <>
    <View style={[style.header, style.alignContent, {marginBottom:10}]}>
      {step === 7 ? <Pressable onPress={nextStep} style={[{width:"95%", height:"95%", marginTop:5 }, style.border]}></Pressable>
        : <View onPress={nextStep} style={[{width:"95%", height:"95%", marginTop:5 }, styles.ligne]}>
        
        {step === 8 ? <Pressable onPress={nextStep} style={[{width:"20%", height:"100%", left:5}, style.border]}></Pressable>
          : <View style={[{width:"20%", height:"100%"}]}></View>
        }

        <View style={[{width:"60%", height:"100%"}]}></View>

        {step === 9 ? <Pressable onPress={nextStep} style={[{width:"20%", height:"100%", right:10}, style.border]}></Pressable>
          : <View style={[{width:"20%", height:"100%"}]}></View>
        }
        
        </View>
      }
    </View>

      {!(step === 7) ? null : <AreaText css={{alignSelf:'center'}} title={'Customization'} /> }
      {!(step === 8) ? null : <AreaText css={{alignSelf:'center'}} title={'Search filter'} /> }
      {!(step === 9) ? null : <AreaText css={{alignSelf:'center'}} title={'Your profil'} /> }

      <Animated.View style={[style.poster]}>
        <NavigatorArrow nextStep={nextStep} lessStep={lessStep} step={step}
          css={ {position:'absolute', bottom:10, right:0, margin:10} } />
      </Animated.View>

      <View style={[style.footer, style.alignContent]}>
        <BtnExit close={close} /> 
      </View>
  </>
}
function PresentationFooter({ close, setPresentationStep, maxSubStep=false}){
    const [step, setStep] = useState(maxSubStep ? 6 : 3)
    const nextStep = () => setStep(prev => {
      if(prev < 6) return prev+1
      setPresentationStep({step:3, maxSubStep:false})
    })
    const lessStep = () => {
      setStep(prev => {
        if(prev > 3) return prev-1
        setPresentationStep({step:1, maxSubStep:true})
      })
    }

  return  <>
      <Header nextStep={nextStep}  close={close} visibilityBtnClose={true}/>

      <Animated.View style={[style.poster]}>
        <NavigatorArrow nextStep={nextStep} lessStep={lessStep} step={step}
          css={ {position:'absolute', top:0, right:0, margin:10} } />
      </Animated.View>

      {!(step === 3) ? null : <AreaText css={{alignSelf:'center'}} title={'Action on the movie'} /> }
      {!(step === 4) ? null : <AreaText css={{alignSelf:'center'}} title={"I don't like"} subTitle={"click or drag left the movie"} /> }
      {!(step === 5) ? null : <AreaText css={{alignSelf:'center'}} title={"I like"} subTitle={"click or drag right the movie"} /> }
      {!(step === 6) ? null : <AreaText css={{alignSelf:'center'}} title={"Next movie, no opinion"} /> }
          
      <View style={[style.footer, style.alignContent]}>

        {!(step === 3) ? null : <Pressable onPress={nextStep} style={[{width:'75%', height:75}, styles.ligne, style.border]}></Pressable> }
        {!(step > 3) ? null : 
          <View style={[{width:'75%', height:75}, styles.ligne]}>
            {step === 4 ? <Pressable onPress={nextStep} style={[{width:"30%", height:"100%", left:5}, style.border]}></Pressable>
              : <View style={[{width:"30%", height:"100%"}]}></View>
            }
            {step === 6 ? <Pressable onPress={nextStep} style={[{width:"30%", height:"100%", left:15}, style.border]}></Pressable>
              : <View style={[{width:"30%", height:"100%"}]}></View>
            }
            {step === 5 ? <Pressable onPress={nextStep} style={[{width:"30%", height:"100%", left:22}, style.border]}></Pressable>
              : <View style={[{width:"30%", height:"100%"}]}></View>
            }
          </View>
        }

      </View>
    </>
}
function PresentationPoster({ close, setPresentationStep, maxSubStep}) {
    const [step, setStep] = useState(maxSubStep ? 2 : 1)
    const nextStep = () => setStep(prev => {
      if(prev < 2) return prev+1
      setPresentationStep({step:2, maxSubStep:false})
    })
    const lessStep = () => {
      setStep(1)
    }

  return <>
      <Header nextStep={nextStep}  close={close} visibilityBtnClose={true}/>

      <Animated.View style={[style.poster, style.border, style.alignContent]}>
      
        {step < 2 ? <AreaText title='Recommended movie' text='(click)' onPress={nextStep}/> :
          <>
          <Pressable onPress={nextStep} style={[style.posterBtnTop, style.border, style.alignContent]}>
              <AreaText title='Load trailer' />
          </Pressable>

          <Pressable onPress={nextStep} style={[style.posterBtnTop, style.border, style.alignContent]}>
              <AreaText title='More info of Movie' />
          </Pressable>
          </>
        }
      
      <NavigatorArrow nextStep={nextStep} lessStep={lessStep} step={step}
        css={ {position:'absolute', top:0, right:0, margin:10} } />


      </Animated.View>

      <View style={style.footer}></View>
    </>
}

function Header({ close, visibilityBtnClose }){
  return <View style={[style.header, style.alignContent]}>
        {!visibilityBtnClose ? null : <BtnExit close={close} />}
      </View>
}

function BtnExit({close}){
  return <Pressable onPress={close} style={style.btnClose}>
            <Text style={style.btnCloseText}>X</Text>
            </Pressable> 
}

function NavigatorArrow({lessStep, nextStep, step, css}){
  return <View style={[styles.ligne, style.containerArrow, css]}>
        <Pressable onPress={lessStep}><Text style={[style.text, style.navigatorArrow]}> {"<"} </Text></Pressable>
        <Text style={[style.text, style.navigatorArrow, {width: 25, textAlign:'center'}]}>{step}</Text>
        <Pressable onPress={nextStep}><Text style={[style.text, style.navigatorArrow]}> {">"} </Text></Pressable>
      </View>
}

function AreaText({title, subTitle, text, onPress, css}){
  return <Pressable onPress={onPress} style={[style.containerText, css]}>
        <Text style={[style.text, style.areaMovie]}>{title}</Text>

        {!subTitle ? null :
          <Text style={[style.text, style.areaMovieSub]}>{subTitle}</Text>
        }
        {!text ? null :
          <Text style={[style.text, style.areaMovieSub]}>{text}</Text>
        }
      </Pressable>
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(20,20,20, 0.5)',
    position: 'absolute',
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    flex: 1,
  },
  footer: {
    flex: 2
  },

  alignContent:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 5,
  },
  areaMovie: {
    fontWeight: 'bold',
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },

  poster: {
    flex: 7,
    marginTop: 18,
    marginLeft: 30,
    marginRight: 30,
  },
  posterBtnTop: {
    flex: 1,
    width: '100%',
  },
  posterBtnBottom: {
    flex: 1,
    width: '100%',
  },

  containerArrow: {
    textAlign: 'center',
  },
  navigatorArrow:{
    fontWeight: 'bold',
    padding: 5,
    marginTop: 5,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: '#24242466',
  },
  btnClose: {
    width: 40,
    height: 40,
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  btnCloseText: {
    color: colors.red,
    fontSize: 20,
    fontWeight: 'bold',
    left: 3,
    top: -2,
  },
})
