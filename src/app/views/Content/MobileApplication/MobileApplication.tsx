import React from 'react';
import Image from 'next/image';

import image from '../../../../../public/images/MobileApplication.png';

import styles from './styles.module.scss';

const MobileApplication = () => (
  <section>
    <div className={styles.wrapper}>
      <div className={styles.block_content}>
        <div className={styles.block_image}>
          <h1 className='title_h1'>Мобільний додаток</h1>
          <div className={styles.image_wrap}>
            <Image
              priority
              width={416}
              height={426}
              src={image}
              alt='image'
              draggable={false}
              className={styles.image}
              placeholder='blur'
              blurDataURL='/images/MobileApplication.png'
            />
          </div>
        </div>
        <div className={styles.block_text}>
          <div>
            <h2>ви завжди можете отримати інформацію про:</h2>
            <p className='description_p'>статистика генерації потужності</p>
            <p className='description_p'>споживання елетроенергії</p>
            <p className='description_p'>заряд батареї</p>
            <p className='description_p'>моніторинг стану online 24/7</p>
          </div>
        </div>
        <h1 className={styles.mobile_title}>Мобільний додаток</h1>
      </div>
    </div>
  </section>
);

export default MobileApplication;
