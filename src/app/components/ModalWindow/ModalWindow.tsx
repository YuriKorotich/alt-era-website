'use client';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useScrollBlock } from '../../utils/useScrollBlock';

import styles from './styles.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null; // for SSR
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect((): void => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [allowScroll, blockScroll, isOpen]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
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
