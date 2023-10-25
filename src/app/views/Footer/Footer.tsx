import React, { Fragment } from 'react';

import Image from 'next/image';

import background from '../../../../public/images/footer-bg.jpg';

import Logo from '../../../../public/logo.svg';

import location from '../../../../public/images/location.svg';

import phone from '../../../../public/images/phone.svg';

import mail from '../../../../public/images/mail.svg';

import styles from './styles.module.scss';

const contactDetails: Array<TypeContact> = [
  {
    text: 'Україна, Закарпатська область, м. Мукачево',
    icon: location,
  },
  {
    text: '0677903040',
    textDesign: '(Viber, Telegram)',
    icon: phone,
  },
  {
    text: 'alt-era@ukr.net',
    icon: mail,
  },
];

    type TypeContact = {
      text: string,
      textDesign?: string,
      icon: string,
    };

const Footer = () => (
  <footer>
    <div className={styles.wrapper}>
      <div className={styles.bgWrap} id='section_Footer'>
        <Image
          fill
          priority
          placeholder='blur'
          blurDataURL='/images/footer-bg.jpg'
          src={background}
          alt='background'
          className={styles.background}
        />
      </div>
      <div className={styles.block_contacts}>
        <h1 className={`title_h1 ${styles.title_mobile}`}>Контакти</h1>
        <div className={styles.image_wrap}>
          <Image
            quality={100}
            src={Logo}
            alt='website log'
            draggable={false}
            className={styles.logo}
          />
        </div>
        <div className={styles.contacts}>
          <h1 className={`title_h1 ${styles.title}`}>Контакти</h1>
          <ul>
            {
              contactDetails.map(({ text, icon, textDesign }) => (
                <li key={text + icon}>
                  <Image
                    quality={100}
                    key={icon + text}
                    src={icon}
                    draggable={false}
                    alt='contact icons'
                  />
                  {textDesign ? (
                    <>
                      {text}
                      <span>{textDesign}</span>
                    </>
                  ) : text}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
