import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 63"
          x1={3.078}
          y1={4.243}
          x2={262.046}
          y2={260.889}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.009} stopColor="#f23043" />
          <Stop offset={1} stopColor="#cc2838" />
        </LinearGradient>
      </Defs>
      <Path fill="none" d="M5 5h256v256H5z" />
      <Path
        data-name="Cross - Color"
        d="M173.138 133l79.55-79.55a28.382 28.382 0 00-40.138-40.138L133 92.862l-79.55-79.55A28.382 28.382 0 0013.312 53.45L92.862 133l-79.55 79.55a28.382 28.382 0 0040.138 40.137l79.55-79.55 79.55 79.55a28.382 28.382 0 0040.138-40.137z"
        fill="url(#prefix__a)"
      />
    </Svg>
  )
}

export default SvgComponent