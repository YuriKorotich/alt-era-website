import React from 'react';

import Image from 'next/image';

import image from '../../../../../public/images/WhoAreWe.jpg';

import styles from './styles.module.scss';

const WhoAreWe = () => (
  <section>
    <div className={styles.wrapper} id='section_Who_Are_We'>
      <div className={styles.block_content}>
        <div className={styles.block_text}>
          <h1 className='title_h1'>Хто ми?</h1>
          <p className='description_p'>
            «ALT-ERA» — це компанія, що займається відновлюваною енергетикою, яка створює нову альтернативну енергію.
            {' '}
            <br />
            Ми проєктуємо, розробляємо, будуємо електростанції з альтернативних джерел енергії, які виробляють
            {' '}
            екологічно чисту електроенергію. Надаємо рішення зберігання енергії для забеспечення автономності та
            {' '}
            незалежності користувачів.
          </p>
        </div>
        <div className={styles.image_wrap} data-aos='zoom-in-up'>
          <Image
            src={image}
            alt='image'
            placeholder='blur'
            blurDataURL='/images/WhoAreWe.jpg'
            draggable={false}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhoAreWe;
