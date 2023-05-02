import { atom } from "recoil";
import { BreakType } from "./settingsAtom";
export type BreakTypeInterface = {
  name: BreakType;
  isActive: boolean;
  time: number;
};

const defaultBreakTypeState: BreakTypeInterface[] = [
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
];

export const breakStates = atom<BreakTypeInterface[]>({
  key: "breakStates",
  default: defaultBreakTypeState,
});
