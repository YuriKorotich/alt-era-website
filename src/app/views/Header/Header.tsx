'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Logo from '../../../../public/logo.svg';

import styles from './styles.module.scss';

import Navigation from './Navigation';

const BackgroundVideo = dynamic(() => import('./BackgroundVideo'), { ssr: false });

const Header = () => {
  const [screenWidth, setScreenWidth] = useState<boolean>(false);
  const [screenWidthMobile, setScreenWidthMobile] = useState<boolean>(false);

  const updateStateScreenWidth = (value: boolean): void => {
    setScreenWidth(value);
  };
  const updateStateScreenWidthMobile = (value: boolean): void => {
    setScreenWidthMobile(value);
  };

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
              height={56}
              quality={100}
              alt='website log'
              className={styles.logo}
              draggable={false}
            />
          </div>
          <Navigation updateStateScreenWidth={updateStateScreenWidth} updateStateScreenWidthMobile={updateStateScreenWidthMobile} />
        </div>
        <div className={styles.block_title}>
          <h1 className={styles.title}>
            Заряджай свою
            <span> незалежність</span>
          </h1>
        </div>
        <div className={styles.block_btn}>
          <button className={styles.btn} type='button'>{screenWidth ? 'Розрахувати вартість' : 'Розрахувати вартість в моєму регіоні'}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
