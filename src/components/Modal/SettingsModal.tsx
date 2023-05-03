import { breakStates, BreakTypeInterface } from "@/src/atom/breakTypeAtom";
import { settingsState, SettingsStateInterface } from "@/src/atom/settingsAtom";

import React, { useState } from "react";
import { useRecoilState } from "recoil";

import ApplyButton from "./ApplyButton";
import ColorChange from "./ColorChange/ColorChange";
import FontChange from "./FontChange/FontChange";
import TimeChange from "./TimeChange/TimeChange";
import Underline from "./Underline";
import { CloseIcon } from "@/public/CloseIcon";
type SettingsModalProps = {};

const SettingsModal: React.FC<SettingsModalProps> = () => {
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const [breakState, setBreakState] = useRecoilState(breakStates);
  const [previousSettings, setPreviousSettings] =
    useState<SettingsStateInterface>(settingState);
  const [breakPreviousSettings, setPreviousBreakSettings] =
    useState<BreakTypeInterface[]>(breakState);

  const applySettings = () => {
    setSettingstate((prev) => ({ ...prev, isOpen: false }));
  };

  const closeModal = () => {
    setSettingstate({ ...previousSettings, isOpen: false });
    setBreakState(breakPreviousSettings);
  };

  return (
    <div className="fixed z-50 w-full h-full sm:flex items-center modalBackground">
      <div
        className={`bg-white rounded-[15px] w-[90%] max-w-[540px] z-50 mx-auto relative ${settingState.font}`}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="text-800-mobile sm:text-800-desktop text-161932">
            Settings
          </h2>
          <CloseIcon
            className="text-2xl text-1E213F opacity-50 hover:opacity-100 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <Underline />
        <div className="p-6">
          <TimeChange />
          <Underline cssClasses="my-6" />
          <FontChange />
          <Underline cssClasses="mt-6 mb-4" />
          <ColorChange />
        </div>
        <ApplyButton applySettings={applySettings} />
      </div>
    </div>
  );
};
export default SettingsModal;
