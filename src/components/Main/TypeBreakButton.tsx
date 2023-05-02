import { breakStates } from "@/src/atom/breakTypeAtom";
import { settingsState } from "@/src/atom/settingsAtom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useSettings from "../hooks/useSettings";
import { BreakType } from "@/src/atom/settingsAtom";
type TypeBreakButtonProps = {
  name: BreakType;
};

const TypeBreakButton: React.FC<TypeBreakButtonProps> = ({ name }) => {
  const [breakState, setBreakState] = useRecoilState(breakStates);
  const [settingState, setSettingState] = useRecoilState(settingsState);
  const [currentActive, setCurrentActive] = useState<BreakType>("pomodoro");
  const { activeSettings } = useSettings();
  useEffect(() => {
    setBreakState((prev) => {
      setCurrentActive(prev.filter((item) => item.isActive)[0].name);
      return prev;
    });
  }, [breakState, setBreakState]);

  const updateBreakType = (name: BreakType) => {
    setBreakState((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
    setSettingState((prev) => ({ ...prev, isPaused: true }));
  };
  const backgroundClasses = `bg-${activeSettings.color} text-1E213F`;
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => updateBreakType(name)}
        className={` mx-auto font-bold rounded-[26.5px] 
        text-500-mobile w-[105px] py-[1.031rem] ${
          currentActive === name
            ? backgroundClasses
            : "bg-none text-D7E0FF opacity-40"
        }`}
      >
        {name}
      </button>
    </div>
  );
};
export default TypeBreakButton;
