import { atom } from "recoil";

export interface SettingsState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: "Kumbh Sans" | "Roboto Slab" | "Space Mono";
  color: "red" | "cyan" | "violet";
  isOpen: boolean;
}

const defaultSettingsState: SettingsState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  font: "Kumbh Sans",
  color: "red",
  isOpen: false,
};

export const settingsState = atom<SettingsState>({
  key: "settingsState",
  default: defaultSettingsState,
});
