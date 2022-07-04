import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 52"
          x1={8.007}
          y1={1.628}
          x2={264.265}
          y2={257.111}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.005} stopColor="#3e4c59" />
          <Stop offset={1} stopColor="#1b2026" />
        </LinearGradient>
      </Defs>
      <G data-name="Left Arrow">
        <Path fill="none" d="M5 5h256v256H5z" />
        <Path
          data-name="Left Arrow - Light theme"
          d="M244.303 108.658H59.883l46.87-46.87a16.5 16.5 0 000-23.334 16.5 16.5 0 00-23.335 0l-72.424 72.424a20.464 20.464 0 000 28.941l72.436 72.436a16.5 16.5 0 0023.335 0 16.5 16.5 0 000-23.335l-46.869-46.868h184.407A16.697 16.697 0 00261 125.354a16.697 16.697 0 00-16.697-16.697z"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent