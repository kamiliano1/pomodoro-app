import { atom } from "recoil";

export type BreakTypeInterface = {
  name: "pomodoro" | "short break" | "long break";
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
