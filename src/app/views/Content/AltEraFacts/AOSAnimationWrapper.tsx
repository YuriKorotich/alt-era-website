'use client';

import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';

type AnimationType = 'fade-right' | 'zoom-in';

type AOSAnimationProps = {
  delay?: number;
  children: React.ReactNode;
};

const AOSAnimationWrapper = ({ delay = 0, children }: AOSAnimationProps) => {
  const [animation, setAnimation] = useState<AnimationType>('fade-right');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 880px)');

    function handleMediaChange(e: MediaQueryListEvent) {
      if (e.matches) {
        setAnimation('zoom-in');
      } else {
        setAnimation('fade-right');
      }
    }

    mediaQuery.addEventListener('change', handleMediaChange);
    handleMediaChange({ matches: mediaQuery.matches } as MediaQueryListEvent);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <div className={styles.content} data-aos={animation} data-aos-delay={delay.toString()}>
      {children}
    </div>
  );
};

export default AOSAnimationWrapper;
