'use client';

import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

import { useScrollBlock } from '../../utils/useScrollBlock';

import styles from './styles.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }): React.ReactPortal | null => {
  const [modalHeight, setModalHeight] = useState<number>(window.innerHeight);

  const updateModalHeight = useCallback((): void => {
    if (window.visualViewport) {
      setModalHeight(window.visualViewport.height);
    } else {
      setModalHeight(window.innerHeight);
    }
  }, []);

  const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null; // for SSR
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect((): void => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [allowScroll, blockScroll, isOpen]);

  useEffect(() => {
    updateModalHeight();
    window.addEventListener('resize', updateModalHeight);
    return () => {
      window.removeEventListener('resize', updateModalHeight);
    };
  }, [updateModalHeight]);

  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === 'Escape' && isOpen) onClose();
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} style={{ maxHeight: `${modalHeight}px` }}>
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
