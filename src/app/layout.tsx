import type { Metadata } from 'next';
import localFont from 'next/font/local';
import StyledComponentsRegistry from '@/app/lib/registry';

import GlobalStyles from '@/app/styles/global';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description:
    'Next.js boilerplate with TypeScript, ESLint, Prettier, Vitest, and styled-components'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
      <GlobalStyles />
    </>
  );
}
