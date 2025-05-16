import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "kh"],

  // Used when no locale matches
  defaultLocale: "kh",

  // switch rout
  // pathnames: {
  //   "/contect":{
  //   en: "/contect",
  //   kh: "/ខ្មុលមក",
  //   },
  // },
});
