import React from "react";
import SelectionColorButton from "./SelectionColorButton";
import { ColorType, settingsState } from "@/src/atom/settingsAtom";
import { useRecoilState } from "recoil";

const ColorChange: React.FC = () => {
  const colors: ColorType[] = ["red", "cyan", "violet"];
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const selectionColorButtons = colors.map((color) => (
    <SelectionColorButton
      key={color}
      color={color}
      activeColor={settingState.color}
      switchColor={(color) =>
        setSettingstate((prev) => ({ ...prev, color: color }))
      }
    />
  ));
  return (
    <div
      className="grid grid-cols-[repeat(3,min-content)] gap-x-4 items-center justify-center place-items-center
sm:flex sm:justify-start pb-10"
    >
      <h3 className="col-span-3 pb-4 sm:mr-auto">Color</h3>
      {selectionColorButtons}
    </div>
  );
};
export default ColorChange;
