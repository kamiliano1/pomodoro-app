import React, { useState } from "react";
import closeIcon from "../../../public/icon-close.svg";
import { breakStates, BreakTypeInterface } from "@/src/atom/breakTypeAtom";
import Image from "next/image";
import ApplyButton from "./ApplyButton";
import SelectionColorButton from "./SelectionColorButton";
import SelectionFontButton from "./SelectionFontButton";
import Underline from "./Underline";
import {
  BreakType,
  FontType,
  ColorType,
  settingsState,
  SettingsStateInterface,
} from "@/src/atom/settingsAtom";
import { useRecoilState } from "recoil";
import Arrows from "./Arrows";
type SettingsModalProps = {};

const SettingsModal: React.FC<SettingsModalProps> = () => {
  const fonts: FontType[] = [
    "font-kumbhSans",
    "font-robotoSlab",
    "font-spaceMono",
  ];
  const colors: ColorType[] = ["red", "cyan", "violet"];
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const [breakState, setBreakState] = useRecoilState(breakStates);
  const [currentSettings, setCurrentSettings] =
    useState<SettingsStateInterface>(settingState);
  const [breakSettings, setBreakSettings] =
    useState<BreakTypeInterface[]>(breakState);

  const updateTime = (arrow: "up" | "down", type: BreakType) => {
    const activeBreak: BreakTypeInterface | undefined = breakSettings.find(
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
        return item.name === type ? { ...item, time: item.time - 5 } : item;
      })
    );
  };
  const applySettings = () => {
    setSettingstate((prev) => ({ ...prev, isOpen: false }));
  };

  const closeModal = () => {
    setSettingstate({ ...currentSettings, isOpen: false });
    setBreakState(breakSettings);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue =
      parseFloat(e.target.value) <= 0
        ? 1
        : parseFloat(e.target.value) > 300
        ? 300
        : parseFloat(e.target.value);
    setSettingstate((prev) => ({
      ...prev,
      [e.target.name]: currentValue,
    }));
  };

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
    <div className="fixed z-50 w-full h-full sm:flex items-center modalBackground">
      <div
        className={`bg-white rounded-[15px] w-[90%] max-w-[540px] z-50 mx-auto relative ${settingState.font}`}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="text-800-mobile sm:text-800-desktop text-161932">
            Settings
          </h2>
          <Image
            src={closeIcon}
            alt=""
            className="inline cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <Underline />
        <div className="p-6">
          <h3 className="sm:text-start pb-4">Time (Minutes)</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-5 gap-y-4">
            <div className="text-1E213F flex sm:flex-col items-center justify-between sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
              <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2">
                pomodoro
              </p>
              <input
                type="number"
                onChange={handleChange}
                name="pomodoro"
                value={
                  breakState.find((item) => item.name === "pomodoro")?.time
                }
                className="font-bold w-[3ch] sm:ml-4"
              />

              <Arrows timeName="pomodoro" updateTime={updateTime} />
            </div>
            <div className="text-1E213F flex sm:flex-col items-center justify-between sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
              <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2 ">
                short break
              </p>
              <input
                type="number"
                onChange={handleChange}
                name="short break"
                value={
                  breakState.find((item) => item.name === "short break")?.time
                }
                className="font-bold w-[3ch] sm:ml-4"
              />
              <Arrows timeName="short break" updateTime={updateTime} />
            </div>
            <div className="text-1E213F flex sm:flex-col items-center justify-between sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
              <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2">
                long break
              </p>
              <input
                type="number"
                onChange={handleChange}
                name="long break"
                value={
                  breakState.find((item) => item.name === "long break")?.time
                }
                className="font-bold w-[3ch] sm:ml-4"
              />
              <Arrows timeName="long break" updateTime={updateTime} />
            </div>
          </div>
          <Underline cssClasses="my-6" />
          <div
            className="grid grid-cols-[repeat(3,min-content)] gap-x-4 items-center justify-center place-items-center
      sm:flex sm:justify-start
      "
          >
            <h3 className="col-span-3 pb-4 sm:mr-auto">Font</h3>
            {selectionFontButtons}
          </div>
          <Underline cssClasses="mt-6 mb-4" />
          <div
            className="grid grid-cols-[repeat(3,min-content)] gap-x-4 items-center justify-center place-items-center
          sm:flex sm:justify-start pb-10"
          >
            <h3 className="col-span-3 pb-4 sm:mr-auto">Color</h3>
            {selectionColorButtons}
          </div>
        </div>
        <ApplyButton applySettings={applySettings} />
      </div>
    </div>
  );
};
export default SettingsModal;
