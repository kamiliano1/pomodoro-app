import ProgressCircle from "@/public/ProgressCircle";
import { BreakTypeInterface, breakStates } from "@/src/atom/breakTypeAtom";
import { settingsState } from "@/src/atom/settingsAtom";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useSettings from "../../hooks/useSettings";
import ClockTime from "./ClockTime";
import ToggleButton from "./ToggleButton";

type clockType = {
  minutes: number;
  seconds: number;
};

const Clock: React.FC = () => {
  const { activeSettings } = useSettings();
  const [settingState, setSettingState] = useRecoilState(settingsState);
  const breakState = useRecoilValue(breakStates);
  const [currentActiveBreak, setCurrentActiveBreak] =
    useState<BreakTypeInterface>(breakState[0]);
  const ref = useRef<null | HTMLDivElement>(null);
  const [clockWidth, setClockWidth] = useState(300);
  const [percent, setPercent] = useState(0);
  const [browserWidth, setBrowserWidth] = useState<number>(0);
  const [timeClock, setTimeClock] = useState<clockType>({
    minutes: 25,
    seconds: 0,
  });
  const [initialTime, setInitialTime] = useState<number>(
    timeClock.minutes * 60
  );
  useEffect(() => {
    setCurrentActiveBreak(breakState.filter((item) => item.isActive)[0]);
    setTimeClock({ minutes: currentActiveBreak.time, seconds: 0 });
    setInitialTime(currentActiveBreak.time * 60);
  }, [breakState, currentActiveBreak.time]);
  useEffect(() => {
    function handleWindowResize() {
      setBrowserWidth(window.innerWidth);
    }
    setBrowserWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) setClockWidth(ref.current.offsetWidth);
  }, [browserWidth]);

  const startClock = () => {
    setSettingState((prev) => ({ ...prev, isPaused: !prev.isPaused }));
    if (timeClock.minutes === 0 && timeClock.seconds === 0)
      setTimeClock({ minutes: currentActiveBreak.time, seconds: 0 });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        settingState.isPaused ||
        (timeClock.minutes === 0 && timeClock.seconds === 0)
      ) {
        setSettingState((prev) => ({ ...prev, isPaused: true }));
        return;
      }
      timeClock.seconds === 0
        ? setTimeClock((prev) => ({ minutes: prev.minutes - 1, seconds: 59 }))
        : setTimeClock((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    setSettingState,
    settingState.isPaused,
    timeClock.minutes,
    timeClock.seconds,
  ]);

  useEffect(() => {
    setPercent(
      100 - ((timeClock.minutes * 60 + timeClock.seconds) / initialTime) * 100
    );
  }, [initialTime, timeClock.minutes, timeClock.seconds]);
  return (
    <div
      ref={ref}
      className="clockBackground min-w-[300px] max-w-[410px] mx-auto flex-grow-0 
        aspect-square rounded-full flex flex-col justify-center items-center relative"
    >
      <ProgressCircle progress={percent} width={clockWidth} />
      <ClockTime minutes={timeClock.minutes} seconds={timeClock.seconds} />
      <ToggleButton
        startClock={startClock}
        isPaused={settingState.isPaused}
        color={activeSettings.hover}
      />
    </div>
  );
};
export default Clock;
