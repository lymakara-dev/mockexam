"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image"; // Import Image from next/image

import "@/styles/globals.css";
import { fontMapping, fontUrls } from "../utils/fonts";
import { useTranslations } from "next-intl";

const LanguageSwitch = ({ locale }: { locale: string }) => {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fontFamily = fontMapping[locale];
    const fontUrl = fontUrls[fontFamily];

    // Load the font dynamically
    const fontFace = new FontFace(fontFamily, `url(${fontUrl})`);

    fontFace.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      document.body.style.fontFamily = fontFamily;
    });
  }, [locale]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");

    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex flex-row text-xl items-center">
        <Image
          alt="Avatar"
          className="w-4 h-4 rounded-full object-cover mr-"
          height={16}
          src={`/language_image/${locale}.png`}
          width={16}
        />
        <select value={locale} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="kh">KH</option>
        </select>
      </div>
    </div>
  );
};
export default LanguageSwitch;