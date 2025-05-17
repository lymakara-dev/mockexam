import { getTranslations } from 'next-intl/server';
import React from 'react';
import KhmerWebsitePage from "@/components/KhmerWebsitePage";
import HeroSection from '@/components/HeroSection';
export const runtime = 'edge';
export default async function HomePage() {
  const t = await getTranslations("Footer");
  return (
    <div className='text-xl'>
        <HeroSection/>
        <KhmerWebsitePage />
    </div>
  );
}
