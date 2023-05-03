import React from "react";
import useSettings from "../../hooks/useSettings";

type ClockTimeProps = {
  seconds: number;
  minutes: number;
};
const ClockTime: React.FC<ClockTimeProps> = ({ seconds, minutes }) => {
  const { activeSettings } = useSettings();
  const clockFont =
    activeSettings.font === "font-kumbhSans"
      ? "text-900-mobile-kumbh-sans sm:text-900-desktop-kumbh-sans"
      : activeSettings.font === "font-robotoSlab"
      ? "text-900-mobile-roboto-slab sm:text-900-desktop-roboto-slab"
      : "text-900-mobile-space-mono sm:text-900-desktop-space-mono";
  return (
    <h1 className={`${clockFont} text-D7E0FF z-20`}>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </h1>
  );
};
export default ClockTime;
