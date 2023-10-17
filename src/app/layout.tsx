import React from 'react';

import './globals.css';

import localFont from 'next/font/local';

import { Analytics } from '@vercel/analytics/react';

import { AOSInit } from './aos';

import { LoadingProvider } from './components/Loader/LoadingContext';

import Loader from './components/Loader/Loader';

import type { Metadata } from 'next';

const gothamPro = localFont({
  src: [
    {
      path: '../../public/fonts/GothamPro-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamPro-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamPro-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GothamPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gotham-pro',
});

export const metadata: Metadata = {
  title: 'Alt Era',
  description: '«ALT-ERA» — це компанія, що займається відновлюваною енергетикою, яка створює нову альтернативну енергію.',
  metadataBase: new URL('https://alt-era.com'),
  generator: 'Next.js',
  applicationName: 'Alt Era',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Зарядна станція',
    'Акумулятор для інвертора',
    'Сонячні батареї ціна',
    'Кіловат година',
    'Літій-залізофосфатний акумулятор',
    'Інвертор',
    'Графік відключення світла',
    'Зарядная станция',
    'Аккумулятор для инвертора',
    'Солнечные батареи цена',
    'Киловатый час',
    'Литий-железо фосфатный аккумулятор',
    'Инвертор',
    'График отключения света',
  ],
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Alt Era',
    description: 'The React Framework for the Web',
    url: 'https://alt-era.com',
    siteName: 'Alt Era',
    images: [
      {
        url: '../../public/logo.svg',
        width: 280,
        height: 56,
      },
    ],
    locale: 'ua_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <AOSInit />
      <body className={gothamPro.variable} style={{ overflow: 'hidden' }}>
        <LoadingProvider>
          <Loader />
          {children}
          <div id='modal-root' />
          <Analytics />
        </LoadingProvider>
      </body>
    </html>
  );
}
