import React from "react";

type UnderlineProps = {
  cssClasses?: string;
};

const Underline: React.FC<UnderlineProps> = ({ cssClasses }) => {
  return (
    <span
      className={`w-full h-[1px] block bgs-[#E3E1E1] bg-70F3F8 ${cssClasses}`}
    ></span>
  );
};
export default Underline;
