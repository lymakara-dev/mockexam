import { Kantumruy_Pro } from "next/font/google";

export const fontMapping: { [key: string]: string } = {
  en: 'EnglishFont',
  kh: 'KhmerFont',
};

export const fontUrls: { [key: string]: string } = {
  EnglishFont: '/fonts/english/english.woff2',
  KhmerFont: '/fonts/khmer/khmer.woff2',
};

export const kantumruyPro = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-kantumruy-pro',
});