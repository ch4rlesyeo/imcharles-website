import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { cookies, headers } from 'next/headers';

import Header from '@/components/header';
import { DeviceProvider } from '@/providers/device-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { ECookieNames } from '@/types/common/cookie';
import { detectDevice } from '@/utils/browser';
import { getDefaultTheme } from '@/utils/theme';
import './globals.css';

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-robotomono'
});

export const metadata: Metadata = {
  title: 'Charles Yeo',
  description: 'My personal website'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultTheme = getDefaultTheme(
    cookieStore.get(ECookieNames.USER_THEME)?.value
  );

  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const { isMobile } = detectDevice(userAgent);

  return (
    <html lang="en" className={defaultTheme}>
      <body
        className={`${robotoMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider serverProps={{ defaultTheme }}>
          <DeviceProvider serverProps={{ isMobile }}>
            <div className="max-w-[600px] m-auto">
              <Header />
              {children}
            </div>
          </DeviceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
