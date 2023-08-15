import { Poppins } from "next/font/google";
import localFont from 'next/font/local'

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

export const lampung_v2 = localFont({
    src: "../assets/aksara-Lampung-Unila-v2.ttf", variable: "--font-lampung",
});

export const lampung = localFont({
    src: "../assets/aksara-Lampung-Unila.ttf", variable: "--font-lampung",
});