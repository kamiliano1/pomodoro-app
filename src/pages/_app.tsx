import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google";
import { settingsState, SettingsStateInterface } from "@/src/atom/settingsAtom";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-kumbh-sans",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto-slab",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div
        className={`${kumbhSans.variable} ${robotoSlab.variable} ${spaceMono.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
