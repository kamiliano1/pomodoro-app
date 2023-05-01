import { useRecoilValue } from "recoil";
import { settingsState } from "../../atom/settingsAtom";
import { useEffect, useState } from "react";

type activeSettingsType = {
  color: "F87070" | "70F3F8" | "D881F8";
  font: "Kumbh Sans" | "Roboto Slab" | "Space Mono";
  hover: "red" | "cyan" | "violet";
};
// F87070 70F3F8 D881F8
const useSettings = () => {
  const settingState = useRecoilValue(settingsState);
  const [activeSettings, setActiveSettings] = useState<activeSettingsType>({
    color: "F87070",
    font: "Kumbh Sans",
    hover: "red",
  });

  useEffect(() => {
    const activeColor =
      settingState.color === "red"
        ? "F87070"
        : settingState.color === "cyan"
        ? "70F3F8"
        : "D881F8";
    setActiveSettings({
      color: activeColor,
      font: settingState.font,
      hover: settingState.color,
    });
  }, [settingState]);

  return { activeSettings };
};
export default useSettings;
