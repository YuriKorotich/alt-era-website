'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import Logo from '../../../../public/logo.svg';

import styles from './styles.module.scss';

import Navigation from './Navigation';

import BackgroundVideo from './BackgroundVideo';

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [screenWidthMobile, setScreenWidthMobile] = useState<boolean>(false);

  const maxWidthScreen = 880;
  const maxWidthScreenMobile = 380;

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidthScreen}px)`);
    const mobileQuery = window.matchMedia(`(max-width: ${maxWidthScreenMobile}px)`);

    const handleScreenWidthChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    const handleScreenWidthMobileChange = (event: MediaQueryListEvent) => {
      setScreenWidthMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    setScreenWidthMobile(mobileQuery.matches);

    mediaQuery.addEventListener('change', handleScreenWidthChange);
    mobileQuery.addEventListener('change', handleScreenWidthMobileChange);

    return () => {
      mediaQuery.removeEventListener('change', handleScreenWidthChange);
      mobileQuery.removeEventListener('change', handleScreenWidthMobileChange);
    };
  }, []);

  return (
    <header>
      <BackgroundVideo screenWidthMobile={screenWidthMobile} />
      <div className={styles.conten_wrapper}>
        <div className={styles.head_line}>
          <div className={styles.image_wrap}>
            <Image
              priority
              src={Logo}
              width={280}
              quality={100}
              alt='website log'
              className={styles.logo}
              draggable={false}
            />
          </div>
          <Navigation isMobile={isMobile} />
        </div>
        <div className={styles.block_title}>
          <h1 className={`title_h1 ${styles.title}`}>
            Заряджай свою
            <br />
            <span> незалежність</span>
          </h1>
        </div>
        <div className={styles.block_btn}>
          <button className={styles.btn} type='button'>{isMobile ? 'Розрахувати вартість' : 'Розрахувати вартість в моєму регіоні'}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
