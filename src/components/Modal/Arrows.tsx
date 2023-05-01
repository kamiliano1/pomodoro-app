import React, { SVGProps } from "react";
import Image from "next/image";
import upArrowIcon from "../../../public/icon-arrow-up.svg";
import downArrowIcon from "../../../public/icon-arrow-down.svg";
import { ArrowIcon } from "@/public/ArrowIcon";
type ArrowsProps = {
  timeName: "pomodoro" | "short break" | "long break";
  updateTime: (
    arrow: "up" | "down",
    type: "pomodoro" | "short break" | "long break"
  ) => void;
};

const Arrows: React.FC<ArrowsProps> = ({ timeName, updateTime }) => {
  return (
    <div className="flex flex-col pr-2 items-end">
      <ArrowIcon
        className="rotate-90 text-[#1E213F] opacity-25 hover:opacity-100 cursor-pointer "
        onClick={() => updateTime("up", timeName)}
      />
      <ArrowIcon
        className="rotate-[270deg] text-[#1E213F] opacity-25 hover:opacity-100 cursor-pointer "
        onClick={() => updateTime("down", timeName)}
      />
    </div>
  );
};
export default Arrows;
