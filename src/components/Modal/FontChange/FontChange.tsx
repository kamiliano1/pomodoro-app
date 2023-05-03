import { FontType, settingsState } from "@/src/atom/settingsAtom";
import React from "react";
import { useRecoilState } from "recoil";
import SelectionFontButton from "./SelectionFontButton";

const FontChange: React.FC = () => {
  const fonts: FontType[] = [
    "font-kumbhSans",
    "font-robotoSlab",
    "font-spaceMono",
  ];
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const selectionFontButtons = fonts.map((font) => (
    <SelectionFontButton
      key={font}
      fontName={font}
      activeFont={settingState.font}
      switchFont={(fontName) =>
        setSettingstate((prev) => ({ ...prev, font: fontName }))
      }
    />
  ));
  return (
    <div
      className="grid grid-cols-[repeat(3,min-content)] gap-x-4 items-center justify-center place-items-center
sm:flex sm:justify-start
"
    >
      <h3 className="col-span-3 pb-4 sm:mr-auto">Font</h3>
      {selectionFontButtons}
    </div>
  );
};
export default FontChange;
