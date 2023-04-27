import React from "react";
import Image from "next/image";
import upArrowIcon from "../../../public/icon-arrow-up.svg";
import downArrowIcon from "../../../public/icon-arrow-down.svg";
type ArrowsProps = {
  timeName: "pomodoro" | "shortBreak" | "longBreak";
  updateTime: (
    arrow: "up" | "down",
    type: "pomodoro" | "shortBreak" | "longBreak"
  ) => void;
};

const Arrows: React.FC<ArrowsProps> = ({ timeName, updateTime }) => {
  return (
    <div className="flex flex-col pr-2">
      <Image
        src={upArrowIcon}
        alt=""
        className="pb-2"
        onClick={() => updateTime("up", timeName)}
      />
      <Image
        src={downArrowIcon}
        alt=""
        className=""
        onClick={() => updateTime("down", timeName)}
      />
    </div>
  );
};
export default Arrows;
