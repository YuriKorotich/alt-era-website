import React from 'react';
import Image from 'next/image';

import image from '../../../../../public/images/content-images/MobileApplication.svg';

import styles from './styles.module.scss';

const MobileApplication = () => (
  <section>
    <div className={styles.wrapper}>
      <div className={styles.block_content}>
        <div className={styles.block_image}>
          <h1>Мобільний додаток</h1>
          <div className={styles.image_wrap}>
            <Image
              priority
              quality={100}
              width={470}
              height={480}
              src={image}
              alt='image'
              draggable={false}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.block_text}>
          <div>
            <h2>ви завжди можете отримати інформацію про:</h2>
            <p>статистика генерації потужності</p>
            <p>споживання елетроенергії</p>
            <p>заряд батареї</p>
            <p>мониторинг стану online 24/7</p>
          </div>
        </div>
        <h1 className={styles.mobile_title}>Мобільний додаток</h1>
      </div>
    </div>
  </section>
);

export default MobileApplication;
