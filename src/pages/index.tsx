import Image from "next/image";
import { Inter } from "next/font/google";
import SettingsModal from "../components/Modal/SettingsModal";
import Head from "next/head";
import webLogo from "../../public/logo.svg";
import settingIcon from "../../public/icon-settings.svg";

import { useRecoilState } from "recoil";
import { settingsState, SettingsStateInterface } from "@/src/atom/settingsAtom";
import TypeBreakButton from "../components/Main/TypeBreakButton";
import Clock from "../components/Main/Clock";

import { ArrowIcon } from "@/public/ArrowIcon";
import { SettingIcon } from "@/public/SettingIcon";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [settingState, setSettingstate] = useRecoilState(settingsState);
  const isModalOpen = settingState.isOpen;

  return (
    <>
      <Head>
        <title>Frontend Mentor | Pomodoro app</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <main className={`min-h-[100vh] px-6 py-8 ${inter.className} `}>
        {/* <main
        className={`flex justify-center items-start min-h-[100vh] px-6 py-8  ${inter.className}`}
      > */}
        <Image src={webLogo} alt="web logo" className="mx-auto" />
        {isModalOpen && <SettingsModal />}

        <div className="flex p-2 bg-161932 rounded-[31.5px] my-12">
          <TypeBreakButton name="pomodoro" />
          <TypeBreakButton name="short break" />
          <TypeBreakButton name="long break" />
        </div>
        <Clock />

        <SettingIcon
          onClick={() =>
            setSettingstate((prev) => ({
              ...prev,
              isOpen: true,
              isPaused: true,
            }))
          }
          className="cursor-pointer text-3xl text-D7E0FF opacity-50 hover:opacity-100"
        />
      </main>
    </>
  );
}
