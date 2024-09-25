import type { Metadata } from 'next';

import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { AppProps } from 'next/app';
import GlobalStyles from './styles/global';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description:
    'Next.js boilerplate with TypeScript, ESLint, Prettier, Vitest, and styled-components'
};

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
