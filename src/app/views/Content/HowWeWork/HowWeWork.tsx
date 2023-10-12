import React from 'react';
import Image from 'next/image';

import image from '../../../../../public/images/content-images/HowWeWork.jpg';

import styles from './styles.module.scss';

const HowWeWork = () => (
  <section>
    <div className={styles.wrapper} id='section_How_We_Work'>
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
          <h1 className='title_h1'>Як ми працюємо</h1>
          <div className={styles.list}>
            <div>
              <h2>Консультація</h2>
              <ul>
                <li className='description_p'>Енергоаудит</li>
                <li className='description_p'>Заміри</li>
              </ul>
            </div>
            <div>
              <h2>Виїзд на об’єкт</h2>
              <ul>
                <li className='description_p'>Аналіз технічного завдання</li>
                <li className='description_p'>Орієнтовний розрахунок</li>
              </ul>
            </div>
            <div>
              <h2>Розробка індивідуального інженерного проекту</h2>
            </div>
            <div>
              <h2>
                Підписання договор
              </h2>
            </div>
            <div>
              <h2>Встановлення та запуск СЕС</h2>
              <ul>
                <li className='description_p'>Налаштування онлайн моніторинг</li>
              </ul>
            </div>
            <div>
              <h2>Технічна підтримка</h2>
              <ul>
                <li className='description_p'>Виконання гарантійних обов&apos;язків</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;
