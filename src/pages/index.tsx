import Image from "next/image";
import { Inter } from "next/font/google";
import SettingsModal from "../components/Modal/SettingsModal";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Pomodoro app</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <SettingsModal />
      </main>
    </>
  );
}
