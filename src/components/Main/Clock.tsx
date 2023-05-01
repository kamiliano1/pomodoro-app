import ProgressCircle from "@/public/ProgressCircle";
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import { settingsState } from "@/src/atom/settingsAtom";
import { BreakTypeInterface, breakStates } from "@/src/atom/breakTypeAtom";
type ClockProps = {};

type clockType = {
  minutes: number;
  seconds: number;
};

const Clock: React.FC<ClockProps> = () => {
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const [breakState, setBreakState] = useRecoilState(breakStates);
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
    // console.log(currentActiveBreak, "akt");
    setTimeClock({ minutes: currentActiveBreak.time, seconds: 0 });
    setInitialTime(currentActiveBreak.time * 60);
    // console.log(currentActiveBreak.time, "czas");
  }, [breakState]);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        settingState.isPaused ||
        (timeClock.minutes === 0 && timeClock.seconds === 0)
      )
        return;
      timeClock.seconds === 0
        ? setTimeClock((prev) => ({ minutes: prev.minutes - 1, seconds: 59 }))
        : setTimeClock((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
    }, 1);

    return () => clearTimeout(timer);
  }, [settingState.isPaused, timeClock.minutes, timeClock.seconds]);

  useEffect(() => {
    setPercent(100 - ((timeClock.minutes * 60) / initialTime) * 100);
  }, [initialTime, timeClock.minutes]);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setGameStates((prev) => ({
  //       ...prev,
  //       yellowPlayerRemainingTime: prev.yellowPlayerRemainingTime - 1,
  //     }));
  //   }, 1000);
  //   if (gameStates.yellowPlayerRemainingTime <= 0 || gameStates.isPaused)
  //     clearTimeout(timer);
  //   if (gameStates.yellowPlayerRemainingTime === 0)
  //     return () => clearTimeout(timer);
  // }, []);

  // const handleProcent = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPercent(e.target.value);
  // };
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
          className="text-700-mobile uppercase sm:text-700-desktop text-D7E0FF z-20"
          onClick={() =>
            setSettingstate((prev) => ({ ...prev, isPaused: !prev.isPaused }))
          }
        >
          {settingState.isPaused ? "Start" : "Pause"}
        </button>

        {/* <button
            className="text-700-mobile uppercase sm:text-700-desktop text-D7E0FF z-20"
            onClick={() =>
              setSettingstate((prev) => ({ ...prev, isPaused: true }))
            }
          >
            Pause
          </button> */}
      </div>
      <p className="text-F87070">{width}</p>
      {/* <input type="range" value={percent} onChange={handleProcent} /> */}
    </div>
  );
};
export default Clock;

// .progress {
//     transform: rotate(-90deg);
//   }

//   .progress__meter,
//   .progress__value {
//     fill: none;
//   }

//   .progress__value {
//     stroke: red;
//     stroke-linecap: round;
//     stroke-dasharray: 247.68316480901927;
//   }
