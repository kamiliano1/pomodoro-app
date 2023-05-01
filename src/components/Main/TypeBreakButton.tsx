import { breakStates } from "@/src/atom/breakTypeAtom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
type TypeBreakButtonProps = {
  name: "pomodoro" | "short break" | "long break";
};

const TypeBreakButton: React.FC<TypeBreakButtonProps> = ({ name }) => {
  const [breakState, setBreakState] = useRecoilState(breakStates);
  const [currentActive, setCurrentActive] = useState<
    "pomodoro" | "short break" | "long break"
  >("pomodoro");
  useEffect(() => {
    setBreakState((prev) => {
      setCurrentActive(prev.filter((item) => item.isActive)[0].name);
      return prev;
    });
  }, [breakState, setBreakState]);

  const updateBreakType = (name: "pomodoro" | "short break" | "long break") => {
    // if (name === currentActive) return;
    setBreakState((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
    // console.log(breakState[0]);
  };
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => updateBreakType(name)}
        className={` mx-auto font-bold rounded-[26.5px] 
        text-500-mobile w-[105px] py-[1.031rem] ${
          currentActive === name
            ? "bg-F87070 text-1E213F"
            : "bg-none text-D7E0FF opacity-40"
        }`}
      >
        {name}
      </button>
    </div>
  );
};
export default TypeBreakButton;
