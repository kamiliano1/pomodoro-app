import React from "react";
import { BreakType } from "@/src/atom/settingsAtom";
import SpecificTimeChange from "./SpecificTimeChange";
type TimeChangeProps = {};
const TimeChange: React.FC<TimeChangeProps> = () => {
  const breakNames: BreakType[] = ["pomodoro", "short break", "long break"];

  const breakTimeUpdate = breakNames.map((names) => (
    <SpecificTimeChange key={names} breakName={names} />
  ));
  return (
    <>
      <h3 className="sm:text-start pb-4">Time (Minutes)</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-5 gap-y-4">
        {breakTimeUpdate}
      </div>
    </>
  );
};
export default TimeChange;
