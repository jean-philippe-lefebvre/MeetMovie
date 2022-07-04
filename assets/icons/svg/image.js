import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 266 266"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="Nouvelle nuance de d\xE9grad\xE9\xA01 2"
          x1={4.842}
          y1={6.029}
          x2={261.229}
          y2={262.158}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#43ff9c" />
          <Stop offset={1} stopColor="#8140ff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          x1={-13.501}
          y1={24.39}
          x2={242.887}
          y2={280.519}
          xlinkHref="#prefix__a"
        />
      </Defs>
      <G data-name="Quality V2">
        <Path fill="none" d="M5 6.057h256v256H5z" />
        <Path
          d="M239.86 262.057H26.14A21.163 21.163 0 015 240.918V27.197a21.163 21.163 0 0121.14-21.14h213.72A21.163 21.163 0 01261 27.198v213.721a21.163 21.163 0 01-21.14 21.139zM26.14 25.752a1.447 1.447 0 00-1.446 1.445v213.721a1.447 1.447 0 001.446 1.445h213.72a1.447 1.447 0 001.446-1.445V27.197a1.447 1.447 0 00-1.446-1.445z"
          fill="url(#prefix__a)"
        />
        <Path
          d="M209.843 213.288H63.502a13.152 13.152 0 01-11.424-19.668l36.218-63.49a13.153 13.153 0 0121.631-1.775l16.1 19.814 27.901-50.225a13.152 13.152 0 0123.428.853l44.42 95.807a13.152 13.152 0 01-11.933 18.684zm-140.658-9.91l.008-.016-.008.016zm5.58-9.784H199.6l-34.7-74.845-26.354 47.438a13.153 13.153 0 01-21.705 1.907l-16.173-19.905z"
          fill="url(#prefix__b)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
