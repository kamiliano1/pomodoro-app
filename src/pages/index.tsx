import Head from "next/head";
import Image from "next/image";
import webLogo from "../../public/logo.svg";
import SettingsModal from "../components/Modal/SettingsModal";
import { settingsState } from "@/src/atom/settingsAtom";
import { useRecoilState } from "recoil";
import Clock from "../components/Main/Clock/Clock";
import TypeBreakButton from "../components/Main/TypeBreakButton";

import { SettingIcon } from "@/public/SettingIcon";
import TypeBreak from "../components/Main/TypeBreak";

export default function Home() {
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const isModalOpen = settingState.isOpen;
  return (
    <>
      <Head>
        <title>Frontend Mentor | Pomodoro app</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <main
        className={`min-h-[100vh] ${settingState.font} flex flex-col items-center`}
      >
        <Image
          loading="eager"
          src={webLogo}
          alt="web logo"
          className="mx-auto pt-8 pb-11 sm:pt-20 sm:pb-14 lg:pt-[3.25rem["
        />
        {isModalOpen && <SettingsModal />}
        <TypeBreak />
        <div className="self-stretch px-9">
          <Clock />
        </div>
        {!settingState.isOpen && (
          <SettingIcon
            onClick={() =>
              setSettingstate((prev) => ({
                ...prev,
                isOpen: true,
                isPaused: true,
              }))
            }
            className="cursor-pointer text-3xl text-D7E0FF opacity-50 hover:opacity-100 mt-20 sm:mt-36 lg:mt-[3.9375rem]"
          />
        )}
      </main>
    </>
  );
}
