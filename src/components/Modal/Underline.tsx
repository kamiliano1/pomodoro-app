import React from "react";

type UnderlineProps = {
  cssClasses?: string;
};

const Underline: React.FC<UnderlineProps> = ({ cssClasses }) => {
  return (
    <span className={`w-full h-[5px] block bg-[#E3E1E1] ${cssClasses}`}></span>
  );
};
export default Underline;
