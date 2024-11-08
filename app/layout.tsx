import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, Kantumruy } from "@/config/fonts";
import MyNavBar from "@/components/MyNavBar";
import Sidebars from "@/components/sidebar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/Entrance.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          `bg-background-color h-screen font-sans antialiased ${Kantumruy.className}`,
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className={`relative flex flex-col`}>
            {/* <Navbar /> */}
            <div className="bg-background" />
            <main className="flex-grow">
              <div className="flex">
                <Sidebars />
                <div className="flex flex-col flex-grow">
                  <MyNavBar />
                  <div className="p-5 flex flex-col gap-4 font-bold">
                    {/* <h1 className="text-red-600 font-bold">System is under maintenance!!!</h1>
          <p>ជម្រាបសួរ និង សួស្តីអ្នកទាំងអស់គ្នា ដើម្បីឲប្រព័ន្ធរបស់យើងកាន់តែងាយស្រួលក្នុងការប្រើប្រាស់។ ពួកយើងសូមធ្វើការបិទប្រព័ន្ធជាបណ្តោះអាសន្នសិន ដើម្បីធ្វើការអភិវឌ្ឍន៍បន្ថែមទៅលើផ្នែកមួយចំនួន។</p>
          <p>⚠️បញ្ជាក់: ប្រព័ន្ធរបស់យើងនឹងបើកដំណើរការវិញ នៅ ថ្ងៃស្អែក ម៉ោង ១ រសៀល។</p>
          <p>8/11/2024 - 1:00PM</p>
          <p>សូមអធ្យាស្រ័យ និង សូមអរគុណ។</p>
          <span>-Mockexam Dev Team</span> */}
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
