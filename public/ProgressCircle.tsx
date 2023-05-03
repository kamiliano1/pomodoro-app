import React, { CSSProperties, useEffect, useState } from "react";
import useSettings from "../src/components/hooks/useSettings";

type ProgressCircleProps = { progress: number; width: number };

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress, width }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [progressBarHeight, setProgressBarHeight] = useState<"8" | "11">("8");
  const [progressBarPadding, setProgressBarPadding] = useState<14 | 19>(14);
  const circleBoxDimensions = width - 50;
  const circleCenterValue = circleBoxDimensions / 2;
  const circleRadius = circleCenterValue - progressBarPadding;
  const circumference = 2 * Math.PI * circleRadius;
  const { activeSettings } = useSettings();
  const styles: CSSProperties = {
    strokeDasharray: circumference,
    strokeLinecap: "round",
    strokeDashoffset: circumference * (1 - progress / 100),
    stroke: `#${activeSettings.color}`,
    fill: "none",
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
    if (windowWidth > 675) {
      setProgressBarHeight("11");
      setProgressBarPadding(19);
      return;
    }
    setProgressBarHeight("8");
    setProgressBarPadding(14);
    // windowWidth > 675 ? setProgressBarHeight("11") : setProgressBarHeight("8");
  }, [windowWidth]);

  return (
    <div className="aspect-square rounded-full  absolute progress__div bg-161932">
      <svg
        width={circleBoxDimensions}
        height={circleBoxDimensions}
        viewBox={`0 0 ${circleBoxDimensions} ${circleBoxDimensions}`}
      >
        <circle
          style={styles}
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
