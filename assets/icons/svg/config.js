import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 34"
          x1={4.741}
          y1={5.405}
          x2={261.77}
          y2={260.886}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.132} stopColor="#3e4c59" />
          <Stop offset={0.86} stopColor="#1b2026" />
        </LinearGradient>
      </Defs>
      <Path fill="none" d="M5.109 5h256v256h-256z" />
      <Path
        data-name="Settings - Light theme"
        d="M253.109 109.057h-21.69a8 8 0 01-7.39-4.937l-6.21-14.984a8 8 0 011.733-8.72l15.34-15.339a8 8 0 000-11.313l-22.547-22.547a8 8 0 00-11.313 0l-15.34 15.34a8 8 0 01-8.72 1.734l-15.004-6.218a8 8 0 01-4.938-7.39V13a8 8 0 00-8-8h-31.885a8 8 0 00-8 8v21.696a8 8 0 01-4.935 7.39L89.25 48.29a8 8 0 01-8.723-1.732l-15.34-15.342a8 8 0 00-11.315 0L31.326 53.764a8 8 0 000 11.313L46.7 80.45a8 8 0 011.728 8.735l-6.231 14.95a8 8 0 01-7.385 4.922H13.11a8 8 0 00-8 8v31.886a8 8 0 008 8H34.79a8 8 0 017.395 4.949l6.192 15.01a8 8 0 01-1.738 8.707l-15.314 15.314a8 8 0 000 11.313l22.546 22.547a8 8 0 0011.314 0l15.336-15.336a8 8 0 018.722-1.733l14.966 6.208a8 8 0 014.935 7.39V253a8 8 0 008 8h31.885a8 8 0 008-8v-21.685a8 8 0 014.939-7.392l15.004-6.214a8 8 0 018.719 1.734l15.34 15.34a8 8 0 0011.313 0l22.546-22.546a8 8 0 000-11.314l-15.339-15.34a8 8 0 01-1.733-8.719l6.21-14.984a8 8 0 017.39-4.937h21.69a8 8 0 008-8v-31.886a8 8 0 00-8-8zm-117.501 71.895a48.017 48.017 0 1145.453-45.453 48.02 48.02 0 01-45.453 45.453z"
        fill="url(#prefix__a)"
      />
    </Svg>
  )
}

export default SvgComponent
