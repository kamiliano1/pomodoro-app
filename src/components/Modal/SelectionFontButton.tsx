import React, { useEffect, useState } from "react";

type SelectionFontButtonProps = {
  fontName: "Kumbh Sans" | "Roboto Slab" | "Space Mono";
  activeFont: "Kumbh Sans" | "Roboto Slab" | "Space Mono";
  switchFont: (fontName: "Kumbh Sans" | "Roboto Slab" | "Space Mono") => void;
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
        isActiveFont ? "bg-161932 text-white opacity-100" : "opacity-[0.73]"
      } 
      rounded-full flex font-bold justify-center items-center `}
    >
      Aa
    </button>
  );
};
export default SelectionFontButton;
