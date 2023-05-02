import React from "react";

type UnderlineProps = {
  cssClasses?: string;
};

const Underline: React.FC<UnderlineProps> = ({ cssClasses }) => {
  return (
    <span
      className={`w-full h-[1px] block bgs-[#E3E1E1] bg-[#E3E1E1] ${cssClasses}`}
    ></span>
  );
};
export default Underline;
