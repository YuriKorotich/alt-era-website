'use client';

import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player/lazy';
import dynamic from 'next/dynamic';

// import Loader from '../../components/Loader/Loader'; , loading: () => <Loader />

import styles from './styles.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const BackgroundVideo = ({ screenWidthMobile }: { screenWidthMobile: boolean }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  const videoSourcePc = '/video/backgroundVideo.mp4';
  const mobileVideoBackground = '/video/mobileVideoBackground.mp4';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomLoaded(true);
    }
  }, []);

  return (
    domLoaded && (
      <div className={styles.player_wrapper}>
        <ReactPlayer
          loop
          muted
          playing
          url={screenWidthMobile ? mobileVideoBackground : videoSourcePc}
          width='100%'
          height='100%'
          type='video/mp4'
          preload='metadata'
          className={styles.react_player}
        />
      </div>
    )
  );
};
export default BackgroundVideo;
