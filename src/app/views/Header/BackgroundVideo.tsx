'use client';

import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

import dynamic from 'next/dynamic';

import styles from './styles.module.scss';

import type { ReactPlayerProps } from 'react-player/lazy';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const BackgroundVideo = ({ screenWidthMobile }: { screenWidthMobile: boolean }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [imageSrc, setImageSrc] = useState<string>('');
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
      setImageSrc('/images/placeholderImgMobile.png');
      setVideoSrc('/video/mobileVideoBackground.mp4');
    } else {
      setImageSrc('/images/placeholderImgPc.png');
      setVideoSrc('/video/backgroundVideo.mp4');
    }
  }, [screenWidthMobile]);

  return (
    domLoaded && (
      <div className={styles.player_wrapper}>
        {!videoLoaded
        && (
          <Image
            fill
            priority
            quality={100}
            src={imageSrc}
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
          url={videoSrc}
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
