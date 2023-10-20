'use client';

import { useRef } from 'react';

const useScrollBlock = () => {
  const scroll = useRef(false);
  const touchMoveListener = useRef(null);

  const preventTouchMove = (e: Event) => {
    e.preventDefault();
  };

  const blockScroll = () => {
    if (typeof document === 'undefined' || scroll.current) return;

    const html = document.documentElement;
    const { body } = document;

    if (!body || !body.style) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    // eslint-disable-next-line radix
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;

    html.style.position = 'fixed';
    body.style.position = 'fixed';
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    document.addEventListener('touchmove', preventTouchMove, { passive: false });

    scroll.current = true;
  };

  const allowScroll = () => {
    if (typeof document === 'undefined' || !scroll.current) return;

    const html = document.documentElement;
    const { body } = document;

    if (!body || !body.style) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    if (touchMoveListener.current) {
      document.removeEventListener('touchmove', touchMoveListener.current);
      touchMoveListener.current = null;
    }

    scroll.current = false;
  };

  return [blockScroll, allowScroll];
};

export { useScrollBlock };
