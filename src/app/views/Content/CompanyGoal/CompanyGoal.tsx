import React from 'react';
import Image from 'next/image';

import background from '../../../../../public/images/content-images/CompanyGoal.jpg';

import styles from './styles.module.scss';

// import NextImage from '../../../components/NextImage';
//  <NextImage
//    fill={true}
//    priority={true}
//    quality={100}
//    placeholder='blur'
//    src={src}
//    alt='background'
//    objectFit='cover'
//    className={styles.background}
//  />

const CompanyGoal = () => (
  <section>
    <div className={styles.wrapper} id='section_Company_Goal'>
      <div className={styles.bgWrap}>
        <Image
          fill
          priority
          quality={100}
          placeholder='blur'
          src={background}
          alt='background'
          className={styles.background}
          id={styles.background}
        />
      </div>
      <div className={styles.block_content} data-aos='fade-up'>
        <div className={styles.block_text}>
          <h1>Мета компанії</h1>
          <p>
            У століття інновацій та діджиталізації електроенергія стала життєвою необхідністю.
            {' '}
            Багато хто стикається з проблемою великих витрат на електроенергію та нестабільністю поставок.
            {' '}
            Метою нашої компанії є вирішення цих проблем. Ми пропонуємо генерацію та автономні системи накопичення
            {' '}
            енергії, які, безумовно, покращать Ваше життя і нададуть свободу і впевненість у завтрашньому дні.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyGoal;
