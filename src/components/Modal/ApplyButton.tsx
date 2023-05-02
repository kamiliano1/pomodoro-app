import React from "react";

import useSettings from "../hooks/useSettings";
type ApplyButtonProps = { applySettings: () => void };

const ApplyButton: React.FC<ApplyButtonProps> = ({ applySettings }) => {
  const { activeSettings } = useSettings();
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={applySettings}
        className={`absolute mx-auto font-bold bg-${
          activeSettings.color
        } rounded-[26.5px]
       ${
         activeSettings.color === "70F3F8" ? "text-161932" : "text-white"
       }  px-12 py-[.9375rem] bottom-[-27px] `}
      >
        Apply
      </button>
    </div>
  );
};
export default ApplyButton;
