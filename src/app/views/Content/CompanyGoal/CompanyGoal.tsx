import React from 'react';
import Image from 'next/image';

import background from '../../../../../public/images/content-images/CompanyGoalBg.jpg';
import CompanyGoalMobileBg from '../../../../../public/images/content-images/CompanyGoalMobileBg.jpg';

import styles from './styles.module.scss';

const CompanyGoal = () => (
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
        <Image
          fill
          priority
          quality={100}
          placeholder='blur'
          src={CompanyGoalMobileBg}
          alt='background'
          className={styles.background_mobile}
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
