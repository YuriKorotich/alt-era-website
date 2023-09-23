import React from 'react';
import Head from 'next/head';

import './globals.css';
import localFont from 'next/font/local';

import type { Metadata } from 'next';

const gothamPro = localFont({
  src: [
    {
      path: './assets/fonts/GothamPro-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/fonts/GothamPro-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/GothamPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gotham-pro',
});

export const metadata: Metadata = {
  title: 'Alt Era',
  description: 'ALT-ERA is a company that deals with innovative energy, creating new alternative energy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='../../public/favicon.ico' />
      </Head>
      <body className={gothamPro.variable}>{children}</body>
    </html>
  );
}
