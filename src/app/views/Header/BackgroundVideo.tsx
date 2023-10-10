'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import dynamic from 'next/dynamic';

import imageBgMob from '../../../../public/images/header-Images/mobileVideoBackgroundImg.jpg';

import imageBgPc from '../../../../public/images/header-Images/backgroundVideoImg.jpg';

import styles from './styles.module.scss';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const BackgroundVideo = ({ screenWidthMobile }: { screenWidthMobile: boolean }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

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
        {!videoLoaded
        && (
          <Image
            priority
            quality={100}
            src={screenWidthMobile ? imageBgMob : imageBgPc}
            alt='Video Placeholder'
            className={styles.placeholder}
          />
        )}
        <ReactPlayer
          loop
          muted
          playing
          url={screenWidthMobile ? mobileVideoBackground : videoSourcePc}
          width='100%'
          height='100%'
          type='video/mp4'
          preload='metadata'
          className={`${styles.react_player} ${!videoLoaded ? styles.videoLoaded : ''}`}
          onReady={() => setVideoLoaded(true)}
        />
      </div>
    )
  );
};
export default BackgroundVideo;
