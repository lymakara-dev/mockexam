"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLang = segments[1] === "en" ? "en" : "kh";
  const newLang = currentLang === "en" ? "kh" : "en";

  const toggleLanguage = () => {
    segments[1] = newLang;
    router.push(segments.join("/"));
  };

  return (
    <button onClick={toggleLanguage} className="p-2 rounded ">
      <Image src={`/language_image/${currentLang}.png`} width={30} height={20} alt="Flag"/>
    </button>
  );
};

export default LanguageSwitcher;

