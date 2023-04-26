import React from "react";

type ApplyButtonProps = {};

const ApplyButton: React.FC<ApplyButtonProps> = () => {
  return (
    <div className="w-full flex justify-center">
      <button className=" absolute mx-auto font-bold bg-F87070 rounded-[26.5px] text-white px-12 py-[.9375rem] bottom-[-27px]">
        Apply
      </button>
    </div>
  );
};
export default ApplyButton;
