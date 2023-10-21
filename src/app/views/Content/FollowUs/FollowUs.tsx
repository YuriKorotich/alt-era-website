import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import facebook from '../../../../../public/images/fb.svg';

import instagram from '../../../../../public/images/instagram.svg';

import styles from './styles.module.scss';

const contactIcont: Array<TypeIcons> = [
  {
    icon: facebook,
    link: 'https://www.facebook.com/profile.php?id=61550945674381',
  },
  {
    icon: instagram,
    link: 'https://www.instagram.com/alt_era_com/',
  },
];

  type TypeIcons = {
    icon: string,
    link: string,
  };

const FollowUs = () => (
  <section>
    <div className={styles.wrapper}>
      <div className={styles.block_content}>
        <p className='description_p'>Слідкуйте за нами:</p>
        <div className={styles.image_wrap}>
          {
            contactIcont.map(({ icon, link }) => (
              <Link href={link} key={icon + link} target='_blank' rel='noopener noreferrer'>
                <Image
                  key={icon + link}
                  priority
                  quality={100}
                  width={48}
                  height={48}
                  src={icon}
                  alt='icon'
                  draggable={false}
                  className={styles.image}
                />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

export default FollowUs;
