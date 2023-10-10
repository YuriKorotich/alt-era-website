'use client';

import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

import dynamic from 'next/dynamic';

import imageBgMob from '../../../../public/images/header-Images/mobileVideoBackgroundImg.jpg';

import imageBgPc from '../../../../public/images/header-Images/backgroundVideoImg.jpg';

import styles from './styles.module.scss';

import type { ReactPlayerProps } from 'react-player/lazy';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const BackgroundVideo = ({ screenWidthMobile }: { screenWidthMobile: boolean }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayerProps>(null);

  const videoSourcePc = '/video/backgroundVideo.mp4';
  const mobileVideoBackground = '/video/mobileVideoBackground.mp4';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleFirstInteraction = () => {
        if (playerRef.current) {
          playerRef.current.getInternalPlayer().play();
        }
      };

      window.addEventListener('click', handleFirstInteraction);
      window.addEventListener('touchstart', handleFirstInteraction);

      return () => {
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      };
    }
    return undefined;
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
          ref={playerRef}
          loop
          muted
          playing
          playsInline
          controls={false}
          url={screenWidthMobile ? mobileVideoBackground : videoSourcePc}
          width='100%'
          height='100%'
          type='video/mp4'
          preload='metadata'
          onReady={() => setVideoLoaded(true)}
          className={`${styles.react_player} ${!videoLoaded ? styles.videoLoaded : ''}`}
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