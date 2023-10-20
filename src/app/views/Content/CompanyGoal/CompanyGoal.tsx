import React from 'react';
import Image from 'next/image';

import background from '../../../../../public/images/CompanyGoalBg.jpg';
import CompanyGoalMobileBg from '../../../../../public/images/CompanyGoalMobileBg.jpg';

import styles from './styles.module.scss';

const CompanyGoal = () => (
  <section>
    <div className={styles.wrapper} id='section_Company_Goal'>
      <div className={styles.bgWrap}>
        <Image
          fill
          priority
          placeholder='blur'
          blurDataURL='/images/CompanyGoalBg.jpg'
          src={background}
          alt='background'
          className={styles.background}
          sizes='(max-width: 100vw) 100%, 100vh'
        />
        <Image
          fill
          priority
          placeholder='blur'
          blurDataURL='/images/CompanyGoalMobileBg.jpg'
          src={CompanyGoalMobileBg}
          alt='background'
          className={styles.background_mobile}
          sizes='(max-width: 460px) 100%, 100vh'
        />
      </div>
      <div className={styles.block_content} data-aos='fade-up'>
        <div className={styles.block_text}>
          <h1 className='title_h1'>Мета компанії</h1>
          <p className='description_p'>
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
