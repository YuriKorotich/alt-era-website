import React from 'react';

import Image from 'next/image';

import background from '../../../../../public/images/AltEraFactsBg.jpg';

import AOSAnimationWrapper from './AOSAnimationWrapper';

import styles from './styles.module.scss';

const AltEraFacts = () => (
  <section>
    <div className={styles.wrapper}>
      <div className={styles.bgWrap}>
        <Image
          fill
          priority
          placeholder='blur'
          blurDataURL='/images/AltEraFactsBg.jpg'
          src={background}
          alt='background'
          sizes='100vw'
          className={styles.background}
        />
      </div>
      <div className={styles.block_content}>
        <AOSAnimationWrapper delay={0}>
          <h1 className={`title_h1 ${styles.title}`}>Alt-Era факти</h1>
          <h1 className={styles.content_title}>3-4 роки</h1>
          <p className={styles.content_description}>термін окупності</p>
        </AOSAnimationWrapper>
        <AOSAnimationWrapper delay={400}>
          <h1 className={styles.content_title}>75%</h1>
          <p className={styles.content_description}>
            Економії
            <br />
            Річних витрат на
            <br />
            електроенергію
          </p>
        </AOSAnimationWrapper>
        <AOSAnimationWrapper delay={600}>
          <h1 className={styles.content_title}>2-3 дні</h1>
          <p className={styles.content_description}>на встановлення</p>
        </AOSAnimationWrapper>
      </div>
    </div>
  </section>
);

export default AltEraFacts;
