import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 52"
          x1={4.77}
          y1={5.001}
          x2={259.479}
          y2={261.259}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.005} stopColor="#3e4c59" />
          <Stop offset={1} stopColor="#1b2026" />
        </LinearGradient>
      </Defs>
      <G data-name="Bottom Arrow">
        <Path fill="none" d="M5 5h256v256H5z" />
        <Path
          data-name="Bottom Arrow - Light theme"
          d="M116.303 21.697v184.42l-46.87-46.87a16.5 16.5 0 00-23.333 0 16.5 16.5 0 000 23.335l72.424 72.424a20.464 20.464 0 0028.94 0L219.9 182.57a16.5 16.5 0 000-23.335 16.5 16.5 0 00-23.334 0l-46.869 46.869V21.697A16.697 16.697 0 00133 5a16.697 16.697 0 00-16.697 16.697z"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent