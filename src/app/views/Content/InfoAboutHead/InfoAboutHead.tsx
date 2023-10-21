import React from 'react';

import Image from 'next/image';

import image from '../../../../../public/images/InfoAboutHead.jpg';

import styles from './styles.module.scss';

const InfoAboutHead = () => (
  <section>
    <div className={styles.wrapper}>
      <div className={styles.block_content}>
        <div className={styles.block_text} data-aos='fade-right' data-aos-delay='400'>
          <h1>
            “Ми продаємо не панелі та інвертори, ми продаємо рішення, що дають свободу і впевненість у завтрашньому дні.”
          </h1>
          <p className='description_p'>
            <span>Зазвонний Євген</span>
            засновник,
            {' '}
            <br />
            <span>провідний фахівець з альтернативної енергетики</span>
          </p>
        </div>
        <div className={styles.image_wrap} data-aos='zoom-in-up'>
          <Image
            priority
            width={425}
            src={image}
            alt='image'
            placeholder='blur'
            blurDataURL='/images/InfoAboutHead.jpg'
            draggable={false}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  </section>
);

export default InfoAboutHead;
