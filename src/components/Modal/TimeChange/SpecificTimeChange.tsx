import React from "react";
import Arrows from "./Arrows";

import { breakStates, BreakTypeInterface } from "@/src/atom/breakTypeAtom";
import { useRecoilState } from "recoil";
import { BreakType } from "@/src/atom/settingsAtom";
type SpecificTimeChangeProps = { breakName: BreakType };

const SpecificTimeChange: React.FC<SpecificTimeChangeProps> = ({
  breakName,
}) => {
  const [breakState, setBreakState] = useRecoilState(breakStates);
  const updateTime = (arrow: "up" | "down", type: BreakType) => {
    const activeBreak: BreakTypeInterface | undefined = breakState.find(
      (item) => item.name === type
    );
    if (activeBreak) {
      if (activeBreak.time >= 300 && arrow === "up") return;
      if (activeBreak.time <= 1 && arrow === "down") return;
    }
    setBreakState((prev) =>
      prev.map((item) => {
        if (arrow === "up") {
          return item.name === type ? { ...item, time: item.time + 5 } : item;
        }
        if (item.name === type && item.time <= 5) return { ...item, time: 1 };
        return item.name === type ? { ...item, time: item.time - 5 } : item;
      })
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue =
      parseFloat(e.target.value) <= 0 || e.target.value.length === 0
        ? 1
        : parseFloat(e.target.value) > 300
        ? 300
        : parseFloat(e.target.value);
    setBreakState((prev) =>
      prev.map((item) =>
        item.name === e.target.name ? { ...item, time: currentValue } : item
      )
    );
  };
  return (
    <div className="text-1E213F flex sm:flex-col items-center justify-between sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
      <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2 w-[11ch]">
        {breakName}
      </p>
      <input
        onChange={handleChange}
        name={breakName}
        value={breakState.find((item) => item.name === breakName)?.time}
        className="font-bold w-[3ch] sm:ml-4"
      />
      <Arrows timeName={breakName} updateTime={updateTime} />
    </div>
  );
};
export default SpecificTimeChange;
