import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Rect,
} from "react-native-svg"

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
          x1={4.484}
          y1={45.794}
          x2={261.033}
          y2={45.794}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#43ff9c" />
          <Stop offset={1} stopColor="#8140ff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          x1={4.484}
          y1={133}
          x2={261.033}
          y2={133}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#43ff9c" />
          <Stop offset={1} stopColor="#8140ff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__c"
          x1={4.484}
          y1={220.207}
          x2={261.033}
          y2={220.207}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#43ff9c" />
          <Stop offset={1} stopColor="#8140ff" />
        </LinearGradient>
      </Defs>
      <Path fill="none" d="M5 5h256v256H5z" />
      <G data-name="Filters - Color">
        <Rect
          x={6.21}
          y={29.097}
          width={254.79}
          height={33.393}
          rx={16.697}
          fill="#1b2026"
        />
        <Rect
          x={6.21}
          y={116.303}
          width={254.79}
          height={33.393}
          rx={16.697}
          fill="#1b2026"
        />
        <Rect
          x={6.21}
          y={203.51}
          width={254.79}
          height={33.393}
          rx={16.697}
          fill="#1b2026"
        />
        <Rect
          x={5}
          y={27.957}
          width={66.628}
          height={35.673}
          rx={17.836}
          fill="url(#prefix__a)"
        />
        <Rect
          x={5}
          y={115.164}
          width={190.6}
          height={35.673}
          rx={17.836}
          fill="url(#prefix__b)"
        />
        <Rect
          x={5}
          y={202.37}
          width={113.27}
          height={35.673}
          rx={17.836}
          fill="url(#prefix__c)"
        />
        <Rect
          x={53.791}
          y={15.81}
          width={35.673}
          height={59.979}
          rx={17.836}
          fill="#f3f9ff"
        />
        <Rect
          x={177.763}
          y={103.011}
          width={35.673}
          height={59.979}
          rx={17.836}
          fill="#f3f9ff"
        />
        <Rect
          x={100.434}
          y={190.211}
          width={35.673}
          height={59.979}
          rx={17.836}
          fill="#f3f9ff"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
