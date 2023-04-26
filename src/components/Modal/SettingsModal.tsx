import React from "react";
import closeIcon from "../../../public/icon-close.svg";
import upArrowIcon from "../../../public/icon-arrow-up.svg";
import downArrowIcon from "../../../public/icon-arrow-down.svg";

import Image from "next/image";
import Underline from "./Underline";
import SelectionButton from "./SelectionFontButton";
import SelectionFontButton from "./SelectionFontButton";
import SelectionColorButton from "./SelectionColorButton";
import ApplyButton from "./ApplyButton";
type SettingsModalProps = {};

const SettingsModal: React.FC<SettingsModalProps> = () => {
  return (
    <div className="bg-white rounded-[15px] relative">
      <div className="p-6 sm:p-10 flex items-center justify-between w-[327px] sm:w-[540px]">
        <h2 className="text-800-mobile sm:text-800-desktop text-161932">
          Settings
        </h2>
        <Image src={closeIcon} alt="" className="inline" />
      </div>
      <Underline />
      <div className="px-6 py-3">
        <h3 className="sm:text-start">Time (Minutes)</h3>
        <div className="sm:flex sm:justify-between">
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5">
            <p className="text-500-mobile sm:text-500-desktop opacity-40">
              pomodoro
            </p>
            <p className="font-bold">25</p>
            <div className="flex flex-col">
              <Image src={upArrowIcon} alt="" className="pb-2" />
              <Image src={downArrowIcon} alt="" className="" />
            </div>
          </div>
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5">
            <p className="text-500-mobile sm:text-500-desktop opacity-40">
              short break
            </p>
            <p className="font-bold">5</p>
            <div className="flex flex-col">
              <Image src={upArrowIcon} alt="" className="pb-2" />
              <Image src={downArrowIcon} alt="" className="" />
            </div>
          </div>
          <div className="text-1E213F flex sm:flex-col items-center justify-between pb-5">
            <p className="text-500-mobile sm:text-500-desktop opacity-40">
              long break
            </p>
            <p className="font-bold">15</p>
            <div className="flex flex-col">
              <Image src={upArrowIcon} alt="" className="pb-2" />
              <Image src={downArrowIcon} alt="" className="" />
            </div>
          </div>
        </div>
        <Underline />
      </div>
      <div
        className="px-6 py-3 grid grid-cols-[repeat(3,min-content)] gap-x-4 grid-rows-2 items-center justify-center place-items-center
      sm:flex sm:justify-start
      "
      >
        <h3 className="col-span-3 sm:mr-auto">Font</h3>
        <SelectionFontButton isActive={true} />
        <SelectionFontButton isActive={false} />
        <SelectionFontButton isActive={false} />
      </div>
      <Underline cssClasses="px-6" />
      <div
        className="px-6 pt-3 pb-14 grid grid-cols-[repeat(3,min-content)] gap-x-4 grid-rows-2 items-center justify-center place-items-center
      sm:flex sm:justify-start"
      >
        <h3 className="col-span-3 sm:mr-auto">Color</h3>
        <SelectionColorButton color={"red"} isActive={true} />
        <SelectionColorButton color={"cyan"} isActive={false} />
        <SelectionColorButton color={"violet"} isActive={false} />
      </div>

      <ApplyButton />
    </div>
  );
};
export default SettingsModal;
