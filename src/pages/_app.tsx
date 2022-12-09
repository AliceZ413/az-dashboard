import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import localFont from '@next/font/local';
import { useRouter } from 'next/router';
// import { ConfigProvider, theme } from 'antd';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../styles/globals.css';
import Layout from '@/components/Layout/layout';
import BaseLayout from '@/components/Layout/BaseLayout/BaseLayout';

const Roboto = localFont({
  src: [
    {
      path: '../assets/fonts/Roboto/Roboto-Thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-ThinItalic.ttf',
      style: 'italic',
      weight: '100',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-LightItalic.ttf',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Italic.ttf',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-MediumItalic.ttf',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-BoldItalic.ttf',
      style: 'italic',
      weight: '700',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Black.ttf',
      style: 'normal',
      weight: '900',
    },
    {
      path: '../assets/fonts/Roboto/Roboto-BlackItalic.ttf',
      style: 'italic',
      weight: '900',
    },
  ],
});

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <main className={Roboto.className}>
            {isDashboard ? (
              <BaseLayout>
                <Component {...pageProps} />
              </BaseLayout>
            ) : (
              <Component {...pageProps} />
            )}
          </main>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
