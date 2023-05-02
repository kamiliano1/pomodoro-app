import ProgressCircle from "@/public/ProgressCircle";
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { settingsState } from "@/src/atom/settingsAtom";
import { BreakTypeInterface, breakStates } from "@/src/atom/breakTypeAtom";
import useSettings from "../hooks/useSettings";

type ClockProps = {};

type clockType = {
  minutes: number;
  seconds: number;
};

const Clock: React.FC<ClockProps> = () => {
  const { activeSettings } = useSettings();
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const breakState = useRecoilValue(breakStates);
  const [currentActiveBreak, setCurrentActiveBreak] =
    useState<BreakTypeInterface>(breakState[0]);
  const ref = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState(300);
  const [percent, setPercent] = useState(40);
  const [windowWidth, setWindowWidth] = useState<number>(0);
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
      setWindowWidth(window.innerWidth);
    }
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) setWidth(ref.current.offsetWidth);
  }, [windowWidth]);

  const startClock = () => {
    setSettingstate((prev) => ({ ...prev, isPaused: !prev.isPaused }));
    if (timeClock.minutes === 0 && timeClock.seconds === 0)
      setTimeClock({ minutes: currentActiveBreak.time, seconds: 0 });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        settingState.isPaused ||
        (timeClock.minutes === 0 && timeClock.seconds === 0)
      ) {
        setSettingstate((prev) => ({ ...prev, isPaused: true }));
        return;
      }
      timeClock.seconds === 0
        ? setTimeClock((prev) => ({ minutes: prev.minutes - 1, seconds: 59 }))
        : setTimeClock((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
    }, 1);

    return () => clearTimeout(timer);
  }, [
    setSettingstate,
    settingState.isPaused,
    timeClock.minutes,
    timeClock.seconds,
  ]);

  useEffect(() => {
    setPercent(100 - ((timeClock.minutes * 60) / initialTime) * 100);
  }, [initialTime, timeClock.minutes]);
  return (
    <div>
      <div
        ref={ref}
        className="clockBackground min-w-[300px] max-w-[410px] mx-auto flex-grow-0 
        aspect-square rounded-full flex flex-col justify-center items-center relative"
      >
        <ProgressCircle color="red" progress={percent} width={width} />

        <h1 className="text-900-mobile sm:text-900-desktop text-D7E0FF z-20">
          {timeClock.minutes < 10 ? `0${timeClock.minutes}` : timeClock.minutes}
          :{" "}
          {timeClock.seconds < 10 ? `0${timeClock.seconds}` : timeClock.seconds}
        </h1>

        <button
          className={`text-700-mobile uppercase sm:text-700-desktop  text-D7E0FF z-20 ${activeSettings.hover}Hover
           `}
          onClick={startClock}
        >
          {settingState.isPaused ? "Start" : "Pause"}
        </button>
      </div>
    </div>
  );
};
export default Clock;
