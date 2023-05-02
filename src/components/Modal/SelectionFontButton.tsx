import React, { useEffect, useState } from "react";

type SelectionFontButtonProps = {
  fontName: "font-kumbhSans" | "font-robotoSlab" | "font-spaceMono";
  activeFont: "font-kumbhSans" | "font-robotoSlab" | "font-spaceMono";
  switchFont: (
    fontName: "font-kumbhSans" | "font-robotoSlab" | "font-spaceMono"
  ) => void;
};

const SelectionFontButton: React.FC<SelectionFontButtonProps> = ({
  fontName,
  activeFont,
  switchFont,
}) => {
  const [isActiveFont, setIsActiveFont] = useState<boolean>(false);
  useEffect(() => {
    activeFont === fontName ? setIsActiveFont(true) : setIsActiveFont(false);
  }, [activeFont, fontName]);
  return (
    <button
      onClick={() => switchFont(fontName)}
      className={`w-[40px] aspect-square ${
        isActiveFont
          ? "bg-161932 text-white opacity-100 font-bold"
          : "opacity-[0.73]"
      } 
      rounded-full flex  justify-center items-center `}
    >
      Aa
    </button>
  );
};
export default SelectionFontButton;
