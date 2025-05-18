"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./glowingEffect";
export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="រំលឹកមេរៀន"
        description="ការរំលឹកគឺជាបេះដូងនៃការសរសេរ គ្រប់ទំព័រខ្ញុំបានសរសេរមិនតិចជាង៧ឬ៨ដងនោះទេ - Patricia Reilly Giff"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="តេស្តសមត្ថភាព"
        description="កុំខ្លាចនឹងការសាកបរាជ័យ គួរតែខ្លាចដែលមិនបានសាកល្បង - Micheal Jordan"
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="ស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ"
        description="បច្ចេកវិទ្យាថ្មីៗ តែងតែមានការប្រែប្រួល និងអភិវឌ្ឍន៍យ៉ាងលឿនជាបន្តបន្ទាប់។"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="អ្នកប្រើប្រាស់ 400+"
        description="តាំងពីការចាប់ផ្តើមរហូតដល់បច្ចុប្បន្ននេះ យើងមានអ្នកប្រើប្រាស់ជាច្រើនលើសពីការរំពឹងទុក។"
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="គ្រប់មុខវិជ្ជា គ្រប់សកលវិទ្យាល័យ"
        description="មានគ្រប់មុខវិជ្ជា និងសកលវិទ្យាល័យជាច្រើនតាមបំណងរប់សិស្ស។"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          className=" relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6
               bg-[url('/hero_images/LongMod.png')] bg-cover bg-center"
        >
          {/* translucent overlay so text pops */}
          <div className="absolute bg-black/30 backdrop-blur-sm" />

          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>

            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-black dark:text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black dark:text-neutral-300 md:text-base/[1.375rem]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
