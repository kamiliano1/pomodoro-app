import React from "react";

type SelectionFontButtonProps = { isActive: boolean };

const SelectionFontButton: React.FC<SelectionFontButtonProps> = ({
  isActive,
}) => {
  return (
    <div
      className={`w-[40px] aspect-square   ${
        isActive ? "bg-161932 text-white opacity-100" : "opacity-[0.73]"
      } 
      rounded-full flex font-bold justify-center items-center `}
    >
      Aa
    </div>
  );
};
export default SelectionFontButton;
