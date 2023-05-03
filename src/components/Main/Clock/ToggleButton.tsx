import { ColorType } from "@/src/atom/settingsAtom";
import React from "react";

type ToggleButtonProps = {
  startClock: () => void;
  isPaused: boolean;
  color: ColorType;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  startClock,
  isPaused,
  color,
}) => {
  return (
    <button
      className={`ml-3 text-700-mobile uppercase sm:text-700-desktop text-D7E0FF z-20 ${color}Hover
       `}
      onClick={startClock}
    >
      {isPaused ? "Start" : "Pause"}
    </button>
  );
};
export default ToggleButton;
