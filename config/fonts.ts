import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Kantumruy_Pro } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const Kantumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  variable: "--font-kantumruy",
})
