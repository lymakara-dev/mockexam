import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans, Kantumruy } from "@/config/fonts";
import SessionWrapper from "@/components/SessionWrapper";

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
            `h-screen font-sans antialiased,
            fontSans.variable ${Kantumruy.className}`
          )}
        >
            <div className={`relative flex flex-col `}>
              {/* <Navbar /> */}
              <div className="bg-background-color" />
              <main className="flex-grow">
              <SessionWrapper>
                {children}
                </SessionWrapper>
              
              </main>
            </div>
          
        </body>
      </html>
  );
}

