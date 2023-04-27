import React from "react";

type ApplyButtonProps = { applySettings: () => void };

const ApplyButton: React.FC<ApplyButtonProps> = ({ applySettings }) => {
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={applySettings}
        className="absolute mx-auto font-bold bg-F87070 rounded-[26.5px] text-white px-12 py-[.9375rem] bottom-[-27px]"
      >
        Apply
      </button>
    </div>
  );
};
export default ApplyButton;
