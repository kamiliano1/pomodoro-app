import { atom } from "recoil";

export interface SettingsStateInterface {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: "Kumbh Sans" | "Roboto Slab" | "Space Mono";
  color: "red" | "cyan" | "violet";
  isOpen: boolean;
}

const defaultSettingsState: SettingsStateInterface = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  font: "Kumbh Sans",
  color: "red",
  isOpen: false,
};

export const settingsState = atom<SettingsStateInterface>({
  key: "settingsState",
  default: defaultSettingsState,
});
