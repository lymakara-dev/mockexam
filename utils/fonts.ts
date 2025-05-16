import { Suwannaphum } from "next/font/google";

export const fontMapping: { [key: string]: string } = {
  en: 'EnglishFont',
  kh: 'KhmerFont',
};

export const fontUrls: { [key: string]: string } = {
  EnglishFont: '/fonts/english/english.woff2',
  KhmerFont: '/fonts/khmer/khmer.woff2',
};

export const khmerSuwan = Suwannaphum({
  subsets:['khmer'],
  weight: ['400']
});