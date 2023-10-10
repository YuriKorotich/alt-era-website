'use client';

import React, { useState, useEffect, Fragment } from 'react';

import { Link } from 'react-scroll';

import OutsideClickHandler from 'react-outside-click-handler';

import BtnScrollToTop from '../../components/BtnScrollToTop/BtnScrollToTop';

import { useScrollBlock } from '../../utils/useScrollBlock';

import styles from './styles.module.scss';

type TypeNavLink = {
  text: string,
  link: string,
};

const navLinks: Array<TypeNavLink> = [
  {
    text: 'Наша місія',
    link: 'section_Our_Mission',
  },
  {
    text: 'Про нас',
    link: 'section_Who_Are_We',
  },
  {
    text: 'Мета компанії',
    link: 'section_Company_Goal',
  },
  {
    text: 'Як працюємо',
    link: 'section_How_We_Work',
  },
  {
    text: 'Що ви отримуєте',
    link: 'section_What_You_Get',
  },
  {
    text: 'Контакти',
    link: 'section_Footer',
  },
];

const Navigation = ({ isMobile }: { isMobile: boolean }) => {
  const [activeClass, setActiveClass] = useState<boolean>(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  useEffect((): void => {
    if (activeClass) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [activeClass, allowScroll, blockScroll]);

  useEffect((): void => {
    setActiveClass(false);
  }, [isMobile]);

  return (
    <Fragment>
      <OutsideClickHandler onOutsideClick={() => setActiveClass(false)}>
        <aside className={activeClass ? `${styles.sidebar} ${styles.show}` : `${styles.sidebar}`}>
          <nav className={styles.mobile_nav_unit}>
            {
              navLinks.map(({ text, link }) => (
                <Link
                  className={styles.section}
                  to={link}
                  key={text + link}
                  activeClass='active'
                  spy
                  smooth
                  isDynamic
                  duration={800}
                  onClick={(): void => setActiveClass(false)}
                >
                  <span>{text}</span>
                </Link>
              ))
            }
          </nav>
        </aside>
        <button type='button' className={styles.block_toggler} onClick={(): void => setActiveClass(!activeClass)}>
          <div className={styles.sidebar_toggler}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </OutsideClickHandler>
      <div className={activeClass ? `${styles.sidebar_bg} ${styles.show}` : `${styles.sidebar_bg}`} />
      <nav className={styles.block_nav}>
        {
          navLinks.map(({ text, link }) => (
            <Link
              className={styles.section}
              to={link}
              key={text + link}
              activeClass='active'
              spy
              smooth
              isDynamic
              duration={800}
            >
              <span>{text}</span>
            </Link>
          ))
        }
      </nav>
      <BtnScrollToTop />
    </Fragment>
  );
};

export default Navigation;
