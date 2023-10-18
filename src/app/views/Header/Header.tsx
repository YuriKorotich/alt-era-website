'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import Alert from '../../components/Alert/Alert';

import useAlert from '../../components/Alert/useAlert';

import ModalWindow from '../../components/ModalWindow/ModalWindow';

import FeedbackForm from '../FeedbackForm/FeedbackForm';

import Logo from '../../../../public/logo.svg';

import BackgroundVideo from './BackgroundVideo';

import Navigation from './Navigation';

import styles from './styles.module.scss';

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [screenWidthMobile, setScreenWidthMobile] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    showAlert, alertType, alertMessage, showAlertWithMessage, hideAlert,
  } = useAlert();

  const maxWidthScreen = 880;
  const maxWidthScreenMobile = 480;

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    window.scrollTo(0, 0);
    setIsModalOpen(false);
  };

  const handleSubmitSuccess = (): void => {
    handleCloseModal();
    showAlertWithMessage('success', 'Форма успішно надіслана!');
  };

  const handleSubmitError = (): void => {
    showAlertWithMessage('error', 'Не вдалося надіслати форму. Будь ласка спробуйте ще раз.');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidthScreen}px)`);
    const mobileQuery = window.matchMedia(`(max-width: ${maxWidthScreenMobile}px)`);

    const handleScreenWidthChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    const handleScreenWidthMobileChange = (event: MediaQueryListEvent) => {
      setScreenWidthMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    setScreenWidthMobile(mobileQuery.matches);

    mediaQuery.addEventListener('change', handleScreenWidthChange);
    mobileQuery.addEventListener('change', handleScreenWidthMobileChange);

    return () => {
      mediaQuery.removeEventListener('change', handleScreenWidthChange);
      mobileQuery.removeEventListener('change', handleScreenWidthMobileChange);
    };
  }, []);

  return (
    <header>
      <BackgroundVideo screenWidthMobile={screenWidthMobile} />
      <div className={styles.conten_wrapper}>
        <div className={styles.head_line}>
          <div className={styles.image_wrap}>
            <Image
              priority
              src={Logo}
              width={280}
              quality={100}
              alt='website log'
              className={styles.logo}
              draggable={false}
            />
          </div>
          <Navigation isMobile={isMobile} />
        </div>
        <div className={styles.block_title}>
          <h1 className={styles.title}>
            Заряджай свою
            <br />
            <span> незалежність</span>
          </h1>
        </div>
        <div className={styles.block_btn}>
          <button className={styles.btn} type='button' onClick={handleOpenModal}>
            {isMobile ? 'Розрахувати вартість' : 'Розрахувати вартість в моєму регіоні'}
          </button>
        </div>
      </div>
      <ModalWindow isOpen={isModalOpen} onClose={handleCloseModal}>
        <FeedbackForm onSubmitSuccess={handleSubmitSuccess} onSubmitError={handleSubmitError} />
      </ModalWindow>
      <Alert open={showAlert} onClose={hideAlert} severity={alertType} duration={5000} position='top'>
        {alertMessage}
      </Alert>
    </header>
  );
};

export default Header;
