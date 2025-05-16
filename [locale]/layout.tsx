import "@/styles/globals.css";
import Footer from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import { khmerSuwan } from "@/utils/fonts";
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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <div
              className={`${khmerSuwan.className} flex flex-col min-h-screen`}
            >
              <NavbarComponent locale={locale} translations={messages} />
              <HeroSection locale={locale} />
              <main className='flex-grow'>{children}</main>
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
