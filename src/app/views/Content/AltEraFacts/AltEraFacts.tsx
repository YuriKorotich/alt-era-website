import React from 'react';
import Image from 'next/image';

import background from '../../../../../public/images/content-images/AltEraFactsBg.jpg';

import { useAOSAnimation } from '../../../utils/aosUtility';

import styles from './styles.module.scss';

const AltEraFacts = () => {
  const animation = useAOSAnimation();

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.bgWrap}>
          <Image
            fill
            priority
            quality={100}
            placeholder='blur'
            src={background}
            alt='background'
            className={styles.background}
          />
        </div>
        <div className={styles.block_content}>
          <div className={styles.content} data-aos={animation}>
            <h1 className={styles.title}>Alt-Era факти</h1>
            <h1 className={styles.content_title}>3-4 роки</h1>
            <p className={styles.content_description}>термін окупності</p>
          </div>
          <div className={styles.content} data-aos={animation} data-aos-delay='400'>
            <h1 className={styles.content_title}>75%</h1>
            <p className={styles.content_description}>
              Економії
              <br />
              Річних витрат на
              <br />
              електроенергію
            </p>
          </div>
          <div className={styles.content} data-aos={animation} data-aos-delay='600'>
            <h1 className={styles.content_title}>2-3 дні</h1>
            <p className={styles.content_description}>на встановлення</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AltEraFacts;
