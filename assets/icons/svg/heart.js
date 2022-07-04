import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 36"
          x1={21.467}
          y1={-12.485}
          x2={279.274}
          y2={242.225}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.119} stopColor="#43ff9c" />
          <Stop offset={0.758} stopColor="#36cc7d" />
        </LinearGradient>
      </Defs>
      <Path fill="none" d="M5 5h256v256H5z" />
      <Path
        data-name="Heart - Color"
        d="M260.996 90.69a70.526 70.526 0 00-127.94-40.215A70.529 70.529 0 0010.187 117.59a60.914 60.914 0 004.36 9.912c34.905 64.623 103.088 108.925 116.1 116.977a4.124 4.124 0 004.346 0c13.012-8.052 81.194-52.354 116.1-116.977l.088-.168a70.205 70.205 0 009.815-36.642z"
        fill="url(#prefix__a)"
      />
    </Svg>
  )
}

export default SvgComponent
