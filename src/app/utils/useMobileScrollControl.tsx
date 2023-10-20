'use client';

import { useEffect, RefObject } from 'react';

const useMobileScrollControl = (elementRef: RefObject<HTMLElement>, shouldBlockScroll: boolean): void => {
  useEffect(() => {
    const allowScrollWithinElement = (e: TouchEvent): void => {
      const target = e.target as Node;

      const { current: element } = elementRef;
      if (element && target && element.contains(target)) {
        e.stopPropagation();
      } else {
        e.preventDefault();
      }
    };

    if (shouldBlockScroll) {
      document.addEventListener('touchmove', allowScrollWithinElement, { passive: false });
    }

    return () => {
      if (shouldBlockScroll) {
        document.removeEventListener('touchmove', allowScrollWithinElement);
      }
    };
  }, [elementRef, shouldBlockScroll]);
};

export default useMobileScrollControl;
