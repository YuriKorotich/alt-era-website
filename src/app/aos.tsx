'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      delay: 50,
      once: true,
      anchorPlacement: 'top-bottom',
    });
    window.addEventListener('touchmove', () => AOS.refresh(), false);

    return () => window.removeEventListener('touchmove', () => AOS.refresh());
  }, []);

  return null;
};
