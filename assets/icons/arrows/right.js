import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 52"
          x1={10.096}
          y1={0.928}
          x2={264.032}
          y2={256.412}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.005} stopColor="#3e4c59" />
          <Stop offset={1} stopColor="#1b2026" />
        </LinearGradient>
      </Defs>
      <G data-name="Right Arrow">
        <Path fill="none" d="M5 5h256v256H5z" />
        <Path
          data-name="Right Arrow - Light theme"
          d="M21.697 142.051h184.42l-46.87 46.87a16.5 16.5 0 000 23.334 16.5 16.5 0 0023.335 0l72.424-72.424a20.464 20.464 0 000-28.94L182.57 38.453a16.5 16.5 0 00-23.335 0 16.5 16.5 0 000 23.335l46.869 46.869H21.697A16.697 16.697 0 005 125.355a16.697 16.697 0 0016.697 16.696z"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent