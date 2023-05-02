import { atom } from "recoil";

export type BreakType = "pomodoro" | "short break" | "long break";
export type FontType = "font-kumbhSans" | "font-robotoSlab" | "font-spaceMono";
export type ColorType = "red" | "cyan" | "violet";
export interface SettingsStateInterface {
  currentTypeActive: BreakType;
  font: FontType;
  color: ColorType;
  isOpen: boolean;
  isPaused: boolean;
}

const defaultSettingsState: SettingsStateInterface = {
  currentTypeActive: "pomodoro",
  font: "font-kumbhSans",
  color: "red",
  isOpen: false,
  isPaused: true,
};

export const settingsState = atom<SettingsStateInterface>({
  key: "settingsState",
  default: defaultSettingsState,
});
