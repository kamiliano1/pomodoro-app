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
  const ref = useRef<null | HTMLDivElement>(null);
  //   const [width, setWidth] = useState(0);
  const [percent, setPercent] = useState(40);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [progressBarHeight, setProgressBarHeight] = useState<"8" | "11">("8");
  const circleBoxDimensions = width - 50;
  const circleCenterValue = circleBoxDimensions / 2;
  const circleRadius = circleCenterValue - 6;
  const circle = width - 50;
  const circle2 = circle / 2;
  const circle3 = circle2 - 6;
  const circumference = 2 * Math.PI * circle3;
  const styles: CSSProperties = {
    strokeDasharray: circumference,
    strokeLinecap: "round",
    strokeDashoffset: circumference * (1 - progress / 100),
  };
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
  //   useLayoutEffect(() => {
  //     if (ref.current) setWidth(ref.current.offsetWidth);
  //   }, [windowWidth]);
  return (
    <div className="aspect-square rounded-full p-2 -rotate-90 absolute">
      <svg
        className=""
        width={circleBoxDimensions}
        height={circleBoxDimensions}
        viewBox={`0 0 ${circleBoxDimensions} ${circleBoxDimensions}`}
      >
        <circle
          style={styles}
          className={`fill-none stroke-F87070 ${color}`}
          cx={circleCenterValue}
          cy={circleCenterValue}
          r={circleRadius}
          stroke-width={progressBarHeight}
        />
      </svg>
    </div>
  );
};
export default ProgressCircle;
