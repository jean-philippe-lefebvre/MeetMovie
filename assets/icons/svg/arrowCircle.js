import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 87"
          x1={5.001}
          y1={4.624}
          x2={259.968}
          y2={260.108}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.105} stopColor="#ff9240" />
          <Stop offset={0.807} stopColor="#cc7533" />
        </LinearGradient>
      </Defs>
      <Path fill="none" d="M5.109 5h256v256h-256z" />
      <Path
        data-name="Reload - Color"
        d="M21.891 51.358l9.703 52.315a17.924 17.924 0 0020.893 14.356l52.315-9.703a16.5 16.5 0 0013.215-19.232 16.5 16.5 0 00-19.233-13.215l-16.05 2.976a73.986 73.986 0 11-9.842 97.092 16.492 16.492 0 00-20.38-5.35 16.504 16.504 0 00-6.427 24.579 107.801 107.801 0 0050.448 38.361 106.807 106.807 0 00133.369-145.69 106.38 106.38 0 00-141.945-51.64 107.807 107.807 0 00-31.239 21.966l-2.38-12.833a16.5 16.5 0 00-19.232-13.214 16.5 16.5 0 00-13.215 19.232z"
        fill="url(#prefix__a)"
      />
    </Svg>
  )
}

export default SvgComponent