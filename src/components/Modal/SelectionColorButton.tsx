import { CheckIcon } from "@/public/CheckIcon";
import React, { useEffect, useState } from "react";
import { ColorType } from "@/src/atom/settingsAtom";
type SelectionColorButtonProps = {
  color: ColorType;
  activeColor: ColorType;
  switchColor: (color: ColorType) => void;
};

const SelectionColorButton: React.FC<SelectionColorButtonProps> = ({
  color,
  activeColor,
  switchColor,
}) => {
  const [isActiveColor, setIsActiveColor] = useState<boolean>(false);
  useEffect(() => {
    activeColor === color ? setIsActiveColor(true) : setIsActiveColor(false);
  }, [activeColor, color]);
  const background =
    color === "red"
      ? "bg-F87070"
      : color === "cyan"
      ? "bg-70F3F8"
      : "bg-D881F8";
  return (
    <button
      onClick={() => switchColor(color)}
      className={`w-[40px] aspect-square ${
        isActiveColor ? "text-white opacity-100" : "opacity-[0.73]"
      } 
    rounded-full flex font-bold justify-center items-center ${background}`}
    >
      {isActiveColor && <CheckIcon className="text-3xl text-161932" />}
    </button>
  );
};
export default SelectionColorButton;
