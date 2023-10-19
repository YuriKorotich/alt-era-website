/* eslint-disable no-console */

'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

import imageError from '../../public/error_img.png';

import styles from './style/error.module.scss';

export default function Error({
  error,
}: {
  error: Error;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container_display}>
      <div className={styles.display}>
        <div className={styles.display_img}>
          <Image
            width={660}
            src={imageError}
            alt='404-Scarecrow'
            placeholder='blur'
            draggable={false}
          />
        </div>
        <div className={styles.display_content}>
          <h2 className={styles.display_content_info}>У мене для вас погані новини</h2>
          <p className={styles.display_content_text}>
            Несподівана помилка, яку ви отримали вже виправляється і найближчим часом буде усунена, зайдіть трохи пізніше.
          </p>
          <button type='button' className={styles.error_btn} onClick={handleRefreshPage}>Перезавантажити сторінку</button>
          <p className={styles.error_footer}>Зазвонний Євген - alt-era.com</p>
        </div>
      </div>
    </div>
  );
}
