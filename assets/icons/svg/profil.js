import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Circle,
} from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 266" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          data-name="D\xE9grad\xE9 sans nom 37"
          x1={4.048}
          y1={4.631}
          x2={260.693}
          y2={260.115}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.131} stopColor="#43ff9c" />
          <Stop offset={0.872} stopColor="#8140ff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          data-name="D\xE9grad\xE9 sans nom 33"
          x1={-42.619}
          y1={52.07}
          x2={212.865}
          y2={307.554}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.495} stopColor="#3e4c59" />
          <Stop offset={0.861} stopColor="#1b2026" />
        </LinearGradient>
        <LinearGradient
          id="prefix__c"
          data-name="D\xE9grad\xE9 sans nom 45"
          x1={16.774}
          y1={-7.323}
          x2={272.258}
          y2={248.161}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.318} stopColor="#3e4c59" />
          <Stop offset={0.595} stopColor="#1b2026" />
        </LinearGradient>
      </Defs>
      <Path fill="none" d="M5 5h256v256H5z" />
      <G data-name="Account - Color">
        <Circle cx={133} cy={133} r={128} fill="url(#prefix__a)" />
        <Path
          d="M133 261a127.484 127.484 0 0082.978-30.547 94.355 94.355 0 00-165.956 0A127.484 127.484 0 00133 261z"
          fill="url(#prefix__b)"
        />
        <Circle cx={133} cy={108.903} r={49.935} fill="url(#prefix__c)" />
      </G>
    </Svg>
  )
}

export default SvgComponent
