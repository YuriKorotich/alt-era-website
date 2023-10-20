import React, { useRef, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';

import IconButton from '@mui/material/IconButton';

import Fade from '@mui/material/Fade';

import Box from '@mui/material/Box';

import CloseIcon from '@mui/icons-material/Close';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentDialog = dialogRef.current;
    if (isOpen) {
      if (currentDialog) {
        disableBodyScroll(currentDialog);
      }
    } else if (currentDialog) {
      enableBodyScroll(currentDialog);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullScreen
      TransitionComponent={Fade}
      transitionDuration={200}
      PaperProps={{
        sx: {
          bgcolor: '#E9BD36',
          width: '100%',
          height: 'calc(var(--vh, 1vh) * 100)',
          maxHeight: '100%',
          maxWidth: '100%',
          overflow: 'auto',
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          zIndex: '1300',
        },
      }}
    >
      <Box
        ref={dialogRef}
        sx={{
          bgcolor: '#E9BD36',
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          maxWidth: '100%',
          position: 'relative',
        }}
      >
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            width: '34px',
            height: '34px',
            color: 'white',
          }}
        >
          <CloseIcon
            sx={{
              width: '34px',
              height: '34px',
            }}
          />
        </IconButton>
        {children}
      </Box>
    </Dialog>
  );
};

export default Modal;
