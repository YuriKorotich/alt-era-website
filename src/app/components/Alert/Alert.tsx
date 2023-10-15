import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

type TypeAlertProps = {
  onClose: () => void;
  open: boolean;
  severity: 'error' | 'info' | 'success' | 'warning';
  children: React.ReactNode;
  duration: number;
  position?: 'top' | 'bottom';
};

const Alert: React.FC<TypeAlertProps> = ({
  open, onClose, severity, children, duration, position = 'bottom',
}) => (
  <Snackbar
    open={open}
    autoHideDuration={duration}
    onClose={onClose}
    anchorOrigin={{ vertical: position, horizontal: 'center' }}
  >
    <MuiAlert elevation={6} variant='filled' onClose={onClose} severity={severity}>
      {children}
    </MuiAlert>
  </Snackbar>
);

export default Alert;
