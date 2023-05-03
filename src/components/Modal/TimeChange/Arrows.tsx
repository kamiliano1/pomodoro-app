import { ArrowIcon } from "@/public/ArrowIcon";
import { BreakType } from "@/src/atom/settingsAtom";
import React from "react";
type ArrowsProps = {
  timeName: BreakType;
  updateTime: (arrow: "up" | "down", type: BreakType) => void;
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
