import React, { useState } from "react";
import closeIcon from "../../../public/icon-close.svg";
import upArrowIcon from "../../../public/icon-arrow-up.svg";
import downArrowIcon from "../../../public/icon-arrow-down.svg";

import Image from "next/image";
import Underline from "./Underline";
import SelectionButton from "./SelectionFontButton";
import SelectionFontButton from "./SelectionFontButton";
import SelectionColorButton from "./SelectionColorButton";
import ApplyButton from "./ApplyButton";

import { useRecoilState } from "recoil";
import { settingsState, SettingsStateInterface } from "@/src/atom/settingsAtom";
import Arrows from "./Arrows";
type SettingsModalProps = {};

const SettingsModal: React.FC<SettingsModalProps> = () => {
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const [currentSettings, setCurrentSettings] =
    useState<SettingsStateInterface>(settingState);
  // (arrow:"up" | "down", type: "pomodoro" | "short break" | "long break")
  const updateTime = (
    arrow: "up" | "down",
    type: "pomodoro" | "shortBreak" | "longBreak"
  ) => {
    // console.log(currentSettings);
    // console.log(arrow, type);
    setCurrentSettings((prev) => {
      return {
        ...prev,
        [type]:
          arrow === "up"
            ? currentSettings[type] + 1
            : currentSettings[type] - 1,
      };
    });
  };
  return (
    <div className="bg-white rounded-[15px]  min-w-[250px] w-[90%] max-w-[540px] fixed">
      <div className="p-6 sm:p-10 flex items-center justify-between ">
        <h2 className="text-800-mobile sm:text-800-desktop text-161932">
          Settings
        </h2>
        <Image
          src={closeIcon}
          alt=""
          className="inline"
          onClick={() =>
            setSettingstate((prev) => ({ ...prev, isOpen: false }))
          }
        />
      </div>
      <Underline />
      <div className="p-6">
        <h3 className="sm:text-start">Time (Minutes)</h3>
        <div className="sm:flex sm:justify-between">
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
            <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2">
              pomodoro
            </p>
            <p className="font-bold w-[3ch]">{currentSettings.pomodoro}</p>
            <Arrows timeName="pomodoro" updateTime={updateTime} />
          </div>
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
            <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2">
              short break
            </p>
            <p className="font-bold w-[3ch]">{currentSettings.shortBreak}</p>
            <Arrows timeName="shortBreak" updateTime={updateTime} />
          </div>
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
            <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2">
              long break
            </p>
            <p className="font-bold w-[3ch]">{currentSettings.longBreak}</p>
            <Arrows timeName="longBreak" updateTime={updateTime} />
          </div>
        </div>
        <Underline />
        <div
          className="px-6 py-3 grid grid-cols-[repeat(3,min-content)] gap-x-4 grid-rows-2 items-center justify-center place-items-center
      sm:flex sm:justify-start
      "
        >
          <h3 className="col-span-3 sm:mr-auto">Font</h3>
          <SelectionFontButton
            fontName="Kumbh Sans"
            activeFont={currentSettings.font}
            switchFont={(fontName) =>
              setCurrentSettings((prev) => ({ ...prev, font: fontName }))
            }
          />
          <SelectionFontButton
            fontName="Roboto Slab"
            activeFont={currentSettings.font}
            switchFont={(fontName) =>
              setCurrentSettings((prev) => ({ ...prev, font: fontName }))
            }
          />
          <SelectionFontButton
            fontName="Space Mono"
            activeFont={currentSettings.font}
            switchFont={(fontName) =>
              setCurrentSettings((prev) => ({ ...prev, font: fontName }))
            }
          />
        </div>
        <Underline cssClasses="px-6" />
        <div
          className="px-6 pt-3 pb-9 grid grid-cols-[repeat(3,min-content)] gap-x-4 grid-rows-2 items-center justify-center place-items-center
      sm:flex sm:justify-start"
        >
          <h3 className="col-span-3 sm:mr-auto">Color</h3>
          <SelectionColorButton
            color={"red"}
            activeColor={currentSettings.color}
            switchColor={(color) =>
              setCurrentSettings((prev) => ({ ...prev, color: color }))
            }
          />
          <SelectionColorButton
            color={"cyan"}
            activeColor={currentSettings.color}
            switchColor={(color) =>
              setCurrentSettings((prev) => ({ ...prev, color: color }))
            }
          />
          <SelectionColorButton
            color={"violet"}
            activeColor={currentSettings.color}
            switchColor={(color) =>
              setCurrentSettings((prev) => ({ ...prev, color: color }))
            }
          />
          {/* <SelectionColorButton color={"red"} activeColor={currentSettings.color} switchColor={() =>
              setCurrentSettings((prev) => ({ ...prev, color: "red" }))
            } isActive={true} /> */}
          {/* <SelectionColorButton color={"cyan"} activeColor={currentSettings.color} switchColor={() =>
              setCurrentSettings((prev) => ({ ...prev, color: "cyan" }))
            } isActive={false} />
          <SelectionColorButton color={"violet"} activeColor={currentSettings.color} switchColor={() =>
              setCurrentSettings((prev) => ({ ...prev, color: "violet" }))
            } isActive={false} /> */}
        </div>
      </div>

      <ApplyButton applySettings={() => setSettingstate(currentSettings)} />
    </div>
  );
};
export default SettingsModal;
