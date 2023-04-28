import React from "react";

type TypeBreakButtonProps = {
  applySettings?: () => void;
  name: "pomodoro" | "short break" | "long break";
};

const TypeBreakButton: React.FC<TypeBreakButtonProps> = ({
  applySettings,
  name,
}) => {
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={applySettings}
        className="text-1E213F mx-auto font-bold bg-F87070 rounded-[26.5px] text-500-mobile  w-[105px] py-[1.031rem]"
      >
        {name}
      </button>
    </div>
  );
};
export default TypeBreakButton;
