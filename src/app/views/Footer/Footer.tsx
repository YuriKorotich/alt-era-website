import React, { Fragment } from 'react';
import Image from 'next/image';

import background from '../../../../public/images/footer-Images/footer-bg.jpg';
import Logo from '../../../../public/logo.svg';
import location from '../../../../public/images/footer-Images/location.svg';
import phone from '../../../../public/images/footer-Images/phone.svg';
import mail from '../../../../public/images/footer-Images/mail.svg';

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
          quality={100}
          placeholder='blur'
          src={background}
          alt='background'
          className={styles.background}
        />
      </div>
      <div className={styles.block_contacts}>
        <h1 className={`title_h1 ${styles.title_mobile}`}>Контакти</h1>
        <div className={styles.image_wrap}>
          <Image
            priority
            src={Logo}
            width={280}
            height={56}
            quality={100}
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
                    key={icon + text}
                    src={icon}
                    width={50}
                    height={50}
                    quality={100}
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
