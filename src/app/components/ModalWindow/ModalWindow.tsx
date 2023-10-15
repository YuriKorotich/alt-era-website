'use client';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useScrollBlock } from '../../utils/useScrollBlock';

import styles from './styles.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalHeight, setModalHeight] = useState<string>('auto');

  const updateModalHeight = () => {
    const viewportHeight = window.innerHeight;
    const browserBottomStripHeight = viewportHeight - document.documentElement.clientHeight;
    setModalHeight(`calc(100vh - ${browserBottomStripHeight}px)`);
  };

  const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null; // for SSR
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect((): void => {
    if (isOpen) {
      blockScroll();
      updateModalHeight();
    } else {
      allowScroll();
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('resize', updateModalHeight);
    return () => {
      window.removeEventListener('resize', updateModalHeight);
    };
  }, []);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} style={{ maxHeight: modalHeight }}>
      <button type='button' onClick={onClose} className={styles.closeButton}>
        <span />
        <span />
      </button>
      {children}
    </div>,
    modalRoot,
  );
};

export default Modal;
