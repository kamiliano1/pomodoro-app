import React from "react";
import TypeBreakButton from "./TypeBreakButton";
import { BreakType } from "@/src/atom/settingsAtom";

const TypeBreak: React.FC = () => {
  const breakNames: BreakType[] = ["pomodoro", "short break", "long break"];

  const breakButtons = breakNames.map((item) => (
    <TypeBreakButton key={item} name={item} />
  ));
  return (
    <div className="flex p-2 bg-161932 rounded-[31.5px] mb-12 sm:mb-[6.8125rem] lg:mb-11">
      {breakButtons}
    </div>
  );
};
export default TypeBreak;
