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

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalHeight, setModalHeight] = useState<number>(0);

  const updateModalHeight = useCallback((): void => {
    const viewportHeight = window.innerHeight;
    const browserBottomStripHeight = window.visualViewport ? viewportHeight - window.visualViewport.height : 0;
    setModalHeight(viewportHeight - browserBottomStripHeight);
  }, []);

  const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null; // for SSR
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect((): void => {
    if (isOpen) {
      blockScroll();
      updateModalHeight();
    } else {
      allowScroll();
    }
  }, [allowScroll, blockScroll, isOpen, updateModalHeight]);

  useEffect(() => {
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
