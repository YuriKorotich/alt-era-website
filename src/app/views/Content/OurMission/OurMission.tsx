import React from 'react';
import Image from 'next/image';

import image from '../../../../../public/images/content-images/OurMission.jpg';

import styles from './styles.module.scss';

const OurMission = () => (
  <section>
    <div className={styles.wrapper} id='section_Our_Mission'>
      <div className={styles.block_content}>
        <div className={styles.image_wrap} data-aos='zoom-in-up'>
          <Image
            priority
            quality={100}
            width={780}
            height={560}
            src={image}
            alt='image'
            placeholder='blur'
            draggable={false}
            className={styles.image}
          />
        </div>
        <div className={styles.block_text}>
          <h1 className='title_h1'>Наша місія</h1>
          <p className='description_p'>
            «ALT-ERA» — це ефективне рішення для особистого або комерційного використання.
            {' '}
            Ми пропонуємо розширити Ваші енергетичні можливості.
            {' '}
            <br />
            Наша місія – це поширення альтернативних джерел живлення для Вашої зручності
            {' '}
            та досягнення енергонезалежності. Сонячна енергія є найбільш масштабною та універсальною технологією
            {' '}
            відновлюваної енергетики, яка існує сьогодні.
            {' '}
            Ми хочемо зосередитися на надійних, безкоштовних і нескінченних ресурсах природи,
            {' '}
            щоб забезпечити енергонезалежність якомога більшої кількості людей.
            {' '}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurMission;
