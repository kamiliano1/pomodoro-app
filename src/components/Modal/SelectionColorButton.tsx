import { CheckIcon } from "@/public/CheckIcon";
import React from "react";
type SelectionColorButtonProps = {
  isActive: boolean;
  color: "red" | "cyan" | "violet";
};

// export type colorInterface =
//   | { red: "#F87070" }
//   | { cyan: "#70F3F8" }
//   | { violet: "#D881F8" };
// F87070: "hsl(0, 91%, 71%)",
// "70F3F8": "hsl(182, 91%, 71%)",
// D881F8: "hsl(284, 89%, 74%)",
// D7E0FF: "hsl(227, 100%, 92%)",
// "1E213F": "hsl(235, 35%, 18%)",
// FFFFFF: "hsl(0, 0%, 100%)",
// EFF1FA: "hsl(229, 52%, 96%)",
// 161932: "hsl(234, 39%, 14%)",
// white: "hsl(0, 100%, 100%)",

const SelectionColorButton: React.FC<SelectionColorButtonProps> = ({
  isActive,
  color,
}) => {
  const background =
    color === "red"
      ? "bg-F87070"
      : color === "cyan"
      ? "bg-70F3F8"
      : "bg-D881F8";
  return (
    <div
      className={`w-[40px] aspect-square  ${
        isActive ? "text-white opacity-100" : "opacity-[0.73]"
      } 
    rounded-full flex font-bold justify-center items-center ${background}`}
    >
      {isActive && <CheckIcon className="text-3xl text-161932" />}
    </div>
  );
};
export default SelectionColorButton;
