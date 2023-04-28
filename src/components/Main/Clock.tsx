import React, { CSSProperties } from "react";

type ClockProps = {};

const Clock: React.FC<ClockProps> = () => {
  const styles: CSSProperties = {
    strokeDasharray: 300,
    strokeLinecap: "round",
    // transform: "rotate(-90deg)",
  };
  return (
    <div className="clockBackground w-[300px] aspect-square rounded-full flex justify-center items-center relative">
      <svg className="" width="300" height="300" viewBox="0 0 300 300">
        <circle
          style={styles}
          className="fill-none stroke-F87070"
          cx="150"
          cy="150"
          r="120"
          stroke-width="8"
        />
      </svg>
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
