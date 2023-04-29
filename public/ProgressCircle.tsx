import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type ProgressCircleProps = { color: string; progress: number; width: number };

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  color,
  progress,
  width,
}) => {
  // const ref = useRef<null | HTMLDivElement>(null);
  //   const [width, setWidth] = useState(0);
  // const [percent, setPercent] = useState(40);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [progressBarHeight, setProgressBarHeight] = useState<"8" | "11">("8");
  const circleBoxDimensions = width - 50;
  const circleCenterValue = circleBoxDimensions / 2;
  const circleRadius = circleCenterValue - 6;
  const circumference = 2 * Math.PI * circleRadius;
  const styles: CSSProperties = {
    strokeDasharray: circumference,
    strokeLinecap: "round",
    strokeDashoffset: circumference * (1 - progress / 100),
  };
  console.log(progress, width);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    windowWidth > 675 ? setProgressBarHeight("11") : setProgressBarHeight("8");
  }, [windowWidth]);
  // useLayoutEffect(() => {
  //   if (ref.current) setWidth(ref.current.offsetWidth);
  // }, [windowWidth]);
  return (
    <div className="aspect-square rounded-full p-2 -rotate-90 absolute progress__div bg-161932">
      <svg
        className=""
        width={circleBoxDimensions}
        height={circleBoxDimensions}
        viewBox={`0 0 ${circleBoxDimensions} ${circleBoxDimensions}`}
      >
        <circle
          style={styles}
          className={`fill-none progress__value ${color}`}
          cx={circleCenterValue}
          cy={circleCenterValue}
          r={circleRadius}
          strokeWidth={progressBarHeight}
        />
      </svg>
    </div>
  );
};
export default ProgressCircle;
{
  /* <svg class="progress" width="120" height="120" viewBox="0 0 120 120">
<circle
  class="progress__value"
  cx="60"
  cy="60"
  r="54"
  stroke-width="12"
  stroke="url(#gradient)"
/>
</svg> */
}

// .progress {
//   transform: rotate(-90deg);
// }

// .progress__meter,
// .progress__value {
//   fill: none;
// }

// .progress__meter {
//   stroke: grey;
// }

// .progress__value {
//   stroke: blue;
//   stroke-linecap: round;
// }
