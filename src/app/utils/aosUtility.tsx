'use client';

import { useState, useEffect } from 'react';

type AnimationType = 'fade-right' | 'zoom-in';

export function useAOSAnimation(): AnimationType {
  const [animation, setAnimation] = useState<AnimationType>('fade-right');

  useEffect(() => {
    function updateAnimation() {
      if (window.innerWidth < 880) {
        setAnimation('zoom-in');
      } else {
        setAnimation('fade-right');
      }
    }

    updateAnimation();

    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
    };
  }, []);

  return animation;
}
