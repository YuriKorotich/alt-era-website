'use client';

import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

import dynamic from 'next/dynamic';

import imageBgMob from '../../../../public/images/header-Images/mobileVideoBackgroundImg.png';

import imageBgPc from '../../../../public/images/header-Images/backgroundVideoImg.png';

import styles from './styles.module.scss';

import type { ReactPlayerProps } from 'react-player/lazy';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const BackgroundVideo = ({ screenWidthMobile }: { screenWidthMobile: boolean }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [viderSrc, setViderSrcd] = useState<string>('');
  const playerRef = useRef<ReactPlayerProps>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (domLoaded && playerRef.current) {
      playerRef.current.getInternalPlayer().play();
    }
  }, [domLoaded]);

  useEffect(() => {
    if (screenWidthMobile) {
      setViderSrcd('/video/mobileVideoBackground.mp4');
    } else {
      setViderSrcd('/video/backgroundVideo.mp4');
    }
  }, [screenWidthMobile]);

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
          playsInline
          controls={false}
          url={viderSrc}
          width='100%'
          height='100%'
          type='video/mp4'
          preload='metadata'
          onReady={() => setVideoLoaded(true)}
          className={`${styles.react_player} ${styles.videoLoaded}`}
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
                playsInline: true,
              },
            },
          }}
        />
      </div>
    )
  );
};
export default BackgroundVideo;
