import { getTranslations } from 'next-intl/server';
import React from 'react';
import KhmerWebsitePage from "@/components/KhmerWebsitePage";
export const runtime = 'edge';
export default async function HomePage() {
  const t = await getTranslations("Footer");
  return (
    <div className='text-xl'>
      <main>
        <KhmerWebsitePage />
      </main>
    </div>
  );
}
