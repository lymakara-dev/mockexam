import "@/styles/globals.css";
import Footer from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import { kantumruyPro } from "@/utils/fonts";
import { notFound } from "next/navigation";
import { getMessages } from "@/utils/messages";
import { NextIntlClientProvider } from "next-intl";
import HeroSection from "@/components/HeroSection";

const routing = {
  locales: ["en", "kh"],
};

function hasLocale(locales: string[], locale: string): boolean {
  return locales.includes(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </head>
      <body className={kantumruyPro.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div
            className={`${kantumruyPro.className} flex flex-col min-h-screen bg-[#F1F5F9]`}
          >
            <NavbarComponent locale={locale} translations={messages} />
            <main className='flex-grow'>{children}</main>
            {/* <main className='flex-grow md:mx-16 mx-2'>{children}</main> */}

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
