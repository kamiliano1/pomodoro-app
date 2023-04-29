import ProgressCircle from "@/public/ProgressCircle";
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type ClockProps = {};

const Clock: React.FC<ClockProps> = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [percent, setPercent] = useState(40);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [progressBarHeight, setProgressBarHeight] = useState<"8" | "11">("8");
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

  useLayoutEffect(() => {
    if (ref.current) setWidth(ref.current.offsetWidth);
  }, [windowWidth]);
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
    strokeDashoffset: circumference * (1 - percent / 100),
  };

  const handleProcent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercent(e.target.value);
  };
  return (
    <div>
      <div
        ref={ref}
        className="clockBackground  min-w-[300px] max-w-[410px] mx-auto flex-grow-0 aspect-square rounded-full flex flex-col justify-center items-center relative"
      >
        <ProgressCircle color="red" progress={percent} width={width} />
        <h1 className="text-900-mobile sm:text-900-desktop text-D7E0FF">
          00:00
        </h1>
        <button className="text-700-mobile uppercase sm:text-700-desktop text-D7E0FF">
          Restart
        </button>
      </div>
      <p className="text-F87070">{width}</p>
      <input type="range" value={percent} onChange={handleProcent} />
    </div>
  );
};
export default Clock;

// .progress {
//     transform: rotate(-90deg);
//   }

//   .progress__meter,
//   .progress__value {
//     fill: none;
//   }

//   .progress__value {
//     stroke: red;
//     stroke-linecap: round;
//     stroke-dasharray: 247.68316480901927;
//   }
