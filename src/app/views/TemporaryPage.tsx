import React from 'react';
import Image from 'next/image';

import background from '../assets/images/background.jpg';
import Logo from '../assets/images/logo.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';

import styles from './styles.module.scss';

const socialMediaIcons: Array<TypeIcons> = [
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

const TemporaryPage = () => (
  <main>
    <div className={styles.bgWrap}>
      <Image
        fill
        priority
        quality={100}
        placeholder='blur'
        src={background}
        alt='website background'
        className={styles.background}
      />
    </div>
    <div className={styles.conten_wrapper}>
      <div className={styles.block_contacts}>
        <Image
          priority
          src={Logo}
          width={280}
          height={56}
          quality={100}
          alt='website log'
          className={styles.logo}
        />
        <span className={styles.text_contacts}>alt-era@ukr.net</span>
      </div>
      <div className={styles.block_content}>
        <div className={styles.block_title}>
          <h1 className={styles.title}>
            заряжай свою
            <span> незалежність</span>
          </h1>
          <h2 className={styles.description}>Повна версія сайту вже не за горами</h2>
        </div>
        <div className={styles.wrapper_media_icons}>
          <div>
            <p className={styles.text_contact_number}>
              0677903040
              <span> (Viber, Telegram)</span>
            </p>
            <p className={styles.text_contacts_media}>
              alt-era@ukr.net
            </p>
          </div>
          <div className={styles.block_media_icons}>
            {
              socialMediaIcons.map(({ icon, link }) => (
                <a href={link} className={styles.social_media_icons}>
                  <Image
                    key={icon}
                    src={icon}
                    width={48}
                    height={48}
                    quality={100}
                    alt='social media icons'
                  />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default TemporaryPage;
