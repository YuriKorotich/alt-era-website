import { useState } from 'react';

const useAlert = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState<string>('');

  const showAlertWithMessage = (type: 'success' | 'error', message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
  };

  const hideAlert = (): void => {
    setShowAlert(false);
  };

  return {
    showAlert,
    alertType,
    alertMessage,
    showAlertWithMessage,
    hideAlert,
  };
};

export default useAlert;
