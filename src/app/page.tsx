import React from 'react';

import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Content from './views/Content/Content';

import { LoadingProvider } from './components/Loader/LoadingProvider';

export default function Home() {
  return (
    <LoadingProvider>
      <Header />
      <Content />
      <Footer />
    </LoadingProvider>
  );
}
