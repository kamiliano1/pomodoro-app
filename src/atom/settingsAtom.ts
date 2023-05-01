import { atom } from "recoil";

export interface SettingsStateInterface {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  currentTypeActive: "pomodoro" | "short break" | "long break";
  font: "Kumbh Sans" | "Roboto Slab" | "Space Mono";
  color: "red" | "cyan" | "violet";
  isOpen: boolean;
  isPaused: boolean;
  break: [
    {
      name: "pomodoro";
      isActive: boolean;
      time: number;
    },
    {
      name: "short break";
      isActive: boolean;
      time: number;
    },
    {
      name: "long break";
      isActive: boolean;
      time: number;
    }
  ];
}

const defaultSettingsState: SettingsStateInterface = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  currentTypeActive: "pomodoro",
  font: "Kumbh Sans",
  color: "red",
  isOpen: false,
  isPaused: true,
  break: [
    {
      name: "pomodoro",
      isActive: true,
      time: 25,
    },
    {
      name: "short break",
      isActive: false,
      time: 5,
    },
    {
      name: "long break",
      isActive: false,
      time: 15,
    },
  ],
};

export const settingsState = atom<SettingsStateInterface>({
  key: "settingsState",
  default: defaultSettingsState,
});
