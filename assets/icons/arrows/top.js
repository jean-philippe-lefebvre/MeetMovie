import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 52"
          x1={4.857}
          y1={4.465}
          x2={261.115}
          y2={259.949}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.005} stopColor="#3e4c59" />
          <Stop offset={1} stopColor="#1b2026" />
        </LinearGradient>
      </Defs>
      <G data-name="Top Arrow">
        <Path fill="none" d="M5 5h256v256H5z" />
        <Path
          data-name="Top Arrow - Light theme"
          d="M149.697 244.303V59.883l46.87 46.87a16.5 16.5 0 0023.333 0 16.5 16.5 0 000-23.335l-72.424-72.424a20.464 20.464 0 00-28.94 0L46.1 83.43a16.5 16.5 0 000 23.335 16.5 16.5 0 0023.334 0l46.869-46.869v184.407A16.697 16.697 0 00133 261a16.697 16.697 0 0016.697-16.697z"
          fill="url(#prefix__a)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent