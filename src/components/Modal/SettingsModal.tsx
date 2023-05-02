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
import { breakStates, BreakTypeInterface } from "@/src/atom/breakTypeAtom";

import { useRecoilState } from "recoil";
import { settingsState, SettingsStateInterface } from "@/src/atom/settingsAtom";
import Arrows from "./Arrows";
type SettingsModalProps = {};

const SettingsModal: React.FC<SettingsModalProps> = () => {
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const [breakState, setBreakState] = useRecoilState(breakStates);
  const [currentSettings, setCurrentSettings] =
    useState<SettingsStateInterface>(settingState);
  const [breakSettings, setBreakSettings] =
    useState<BreakTypeInterface[]>(breakState);

  const updateTime = (
    arrow: "up" | "down",
    type: "pomodoro" | "short break" | "long break"
  ) => {
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
          return item.name === type ? { ...item, time: item.time + 1 } : item;
        }
        return item.name === type ? { ...item, time: item.time - 1 } : item;
      })
    );
    // setBreakSettings((prev) =>
    //   prev.map((item) => {
    //     if (arrow === "up") {
    //       return item.name === type ? { ...item, time: item.time + 1 } : item;
    //     }
    //     return item.name === type ? { ...item, time: item.time - 1 } : item;
    //   })
    // );
  };
  const applySettings = () => {
    setSettingstate((prev) => ({ ...prev, isOpen: false }));
    // setBreakState(breakSettings);
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
    // setCurrentSettings((prev) => ({
    //   ...prev,
    //   [e.target.name]: currentValue,
    // }));
  };
  return (
    <div
      className={`bg-white rounded-[15px] min-w-[250px] w-[90%] max-w-[540px] fixed z-50 mx-auto ${currentSettings.font}`}
    >
      <div className="flex items-center justify-between p-6 sm:px-10 py-8">
        <h2 className="text-800-mobile sm:text-800-desktop text-161932">
          Settings
        </h2>
        <Image
          src={closeIcon}
          alt=""
          className="inline cursor-pointer"
          // onClick={() =>
          //   setSettingstate((prev) => ({ ...prev, isOpen: false }))
          // }
          onClick={closeModal}
        />
      </div>
      <Underline />
      <div className="p-6 sm:px-10 py-8">
        <h3 className="sm:text-start ">Time (Minutes)</h3>
        <div className="sm:flex sm:justify-between  sm:gap-x-5 ">
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
            <p className="text-500-mobile sm:text-500-desktop opacity-40 sm:col-span-2">
              pomodoro
            </p>
            <input
              type="number"
              onChange={handleChange}
              name="pomodoro"
              value={breakState.find((item) => item.name === "pomodoro")?.time}
              className="font-bold w-[3ch] sm:ml-4"
            />

            <Arrows timeName="pomodoro" updateTime={updateTime} />
          </div>
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
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
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 w-full">
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
          className=" grid grid-cols-[repeat(3,min-content)] gap-x-4 grid-rows-2 items-center justify-center place-items-center
      sm:flex sm:justify-start
      "
        >
          <h3 className="col-span-3 sm:mr-auto">Font</h3>
          <SelectionFontButton
            fontName="font-kumbhSans"
            activeFont={settingState.font}
            switchFont={(fontName) =>
              setSettingstate((prev) => ({ ...prev, font: fontName }))
            }
          />
          <SelectionFontButton
            fontName="font-robotoSlab"
            activeFont={settingState.font}
            switchFont={(fontName) =>
              setSettingstate((prev) => ({ ...prev, font: fontName }))
            }
          />
          <SelectionFontButton
            fontName="font-spaceMono"
            activeFont={settingState.font}
            switchFont={(fontName) =>
              setSettingstate((prev) => ({ ...prev, font: fontName }))
            }
          />
        </div>
        <Underline cssClasses="mt-6 mb-4" />
        <div
          className="  pb-9 grid grid-cols-[repeat(3,min-content)] gap-x-4 grid-rows-2 items-center justify-center place-items-center
      sm:flex sm:justify-start"
        >
          <h3 className="col-span-3 sm:mr-auto">Color</h3>
          <SelectionColorButton
            color={"red"}
            activeColor={settingState.color}
            switchColor={(color) =>
              setSettingstate((prev) => ({ ...prev, color: color }))
            }
          />
          <SelectionColorButton
            color={"cyan"}
            activeColor={settingState.color}
            switchColor={(color) =>
              setSettingstate((prev) => ({ ...prev, color: color }))
            }
          />
          <SelectionColorButton
            color={"violet"}
            activeColor={settingState.color}
            switchColor={(color) =>
              setSettingstate((prev) => ({ ...prev, color: color }))
            }
          />
        </div>
      </div>

      <ApplyButton applySettings={applySettings} />
    </div>
  );
};
export default SettingsModal;
