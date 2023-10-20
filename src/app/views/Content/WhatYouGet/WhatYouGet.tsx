import React from 'react';
import Image from 'next/image';

import background from '../../../../../public/images/WhatYouGetBg.jpg';

import styles from './styles.module.scss';

const WhatYouGet = () => (
  <section>
    <div className={styles.wrapper} id='section_What_You_Get'>
      <div className={styles.bgWrap}>
        <Image
          fill
          priority
          placeholder='blur'
          blurDataURL='/images/WhatYouGetBg.jpg'
          src={background}
          alt='background'
          className={styles.background}
        />
      </div>
      <div className={styles.block_content}>
        <div className={styles.block_text} data-aos='fade-up' data-aos-delay='400'>
          <h1 className='title_h1'>Що ви отримуєте</h1>
          <p className='description_p'>
            Наші рішення в галузі альтернативної енергетики покликані заощадити Ваші гроші в довгостроковій
            {' '}
            перспективі, зменшуючи рахунки за електроенергію і пропонуючи привабливі можливості
            {' '}
            для повернення інвестицій.
          </p>
        </div>
        <div className={styles.block_list} data-aos='fade-up'>
          <div className={styles.section_list}>
            <h2>Альтернативне джерело живлення:</h2>
            <p className='description_p'>
              Насолоджуйтесь екологічно чистим джерелом енергії,
              яке зменшує вашу залежність від традиційних джерел живлення.
            </p>
          </div>
          <div className={styles.section_list}>
            <h2>безперебійне споживання:</h2>
            <p className='description_p'>
              Отримайте вигоду від стабільного та безперебійного
              електропостачання, гарантуючи, що ваша щоденна робота не буде перервана.
            </p>
          </div>
          <div className={styles.section_list}>
            <h2>Збільшення потужності:</h2>
            <p className='description_p'>
              Відчуй збільшення вихідної потужності без витрат на
              модернізацію лінії електропостачання.
            </p>
          </div>
          <div className={styles.section_list}>
            <h2>Безкоштовна енергія:</h2>
            <p className='description_p'>
              Використовуйте енергію відновлюваних ресурсів безкоштовно, зменшуючи свою
              залежність від дорогих традиційних джерел енергії.
            </p>
          </div>
          <div className={styles.section_list}>
            <h2>Оптимізація рахунків за електроенергію:</h2>
            <p className='description_p'>
              Максимізуйте економію коштів, оптимізуючи споживання електроенергії
              під час пікових тарифних періодів, ефективно зменшуючи свої рахунки.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatYouGet;
