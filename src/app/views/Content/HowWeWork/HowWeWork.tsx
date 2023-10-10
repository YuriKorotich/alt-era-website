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
          <h1>Як ми працюємо</h1>
          <div className={styles.list}>
            <div>
              <h2>
                <span className={styles.indent}>1.</span>
                Консультація
              </h2>
              <ul>
                <li>Енергоаудит</li>
                <li>Заміри</li>
              </ul>
            </div>
            <div>
              <h2>
                <span>2.</span>
                Виїзд на об’єкт
              </h2>
              <ul>
                <li>Аналіз технічного завдання</li>
                <li>Орієнтовний розрахунок</li>
              </ul>
            </div>
            <div>
              <h2>
                <span>3.</span>
                Розробка індивідуального інженерного проекту
              </h2>
            </div>
            <div>
              <h2>
                <span>4.</span>
                Підписання договор
              </h2>
            </div>
            <div>
              <h2>
                <span>5.</span>
                Встановлення та запуск СЕС
              </h2>
              <ul>
                <li>Налаштування онлайн мониторингу</li>
              </ul>
            </div>
            <div>
              <h2>
                <span>6.</span>
                Технічна підтримка
              </h2>
              <ul>
                <li>Виконання гарантійних обов&apos;язків</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;
