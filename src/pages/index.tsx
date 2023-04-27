import Image from "next/image";
import { Inter } from "next/font/google";
import SettingsModal from "../components/Modal/SettingsModal";
import Head from "next/head";

import { useRecoilState } from "recoil";
import { settingsState, SettingsStateInterface } from "@/src/atom/settingsAtom";
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
      <main
        className={`flex justify-center items-center min-h-[100vh] px-6  ${inter.className}`}
      >
        {isModalOpen && <SettingsModal />}
        <button
          onClick={() => setSettingstate((prev) => ({ ...prev, isOpen: true }))}
        >
          OPEN!!
        </button>
      </main>
    </>
  );
}
