'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import image from '../../../../public/images/up-arrow.svg';

import styles from './styles.module.scss';

const BtnScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const scrollHeight = 400;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    return () => window.removeEventListener('scroll', () => setShowTopBtn(false));
  }, []);

  const goToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.top_to_btm}>
      {showTopBtn && (
        <Image
          width={64}
          height={64}
          priority
          quality={100}
          src={image}
          alt='icon'
          onClick={goToTop}
          draggable={false}
          className={`${styles.icon_position} ${styles.icon_style}`}
        />
      )}
    </div>
  );
};

export default BtnScrollToTop;
