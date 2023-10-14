import React, { useState } from 'react';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import { useFormik } from 'formik';

import * as yup from 'yup';

import styles from './styles.module.scss';

const validationSchema = yup.object({
  electricityFeedback: yup
    .string()
    .max(500),
  phoneNumber: yup
    .string()
    .max(13)
    .matches(/^\+?[0-9]{10,}$/, 'Номер телефону повинен містити принаймні 10 цифр')
    .required('Необхідно вказати номер телефону'),
  name: yup
    .string()
    .max(200)
    .required('Необхідно вказати імʼя'),
});

const FeedbackForm: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      electricityFeedback: '',
      phoneNumber: '',
      name: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify({ ...values, contactMethod: activeButton }, null, 2));
    },
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^A-Za-zА-Яа-яЁёҐґІіЇї\s]/g, '');
    formik.setFieldValue('name', value);
  };
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9+]/g, '');
    formik.setFieldValue('phoneNumber', value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper_contact_form}>
        <div className={styles.block_contact_form}>
          <h1 className={styles.title_contact_form}>Розрахувати вартість в моєму регіоні</h1>
          <TextField
            multiline
            rows={4}
            label='Місячне споживання електроенергії'
            placeholder='кВт'
            id='electricityFeedback'
            name='electricityFeedback'
            variant='outlined'
            value={formik.values.electricityFeedback}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.electricityFeedback && Boolean(formik.errors.electricityFeedback)}
            helperText={formik.touched.electricityFeedback && formik.errors.electricityFeedback}
            className={styles.contact_form}
            inputProps={{
              maxLength: 500,
            }}
          />
          <TextField
            id='phoneNumber'
            name='phoneNumber'
            label='Номер телефону'
            variant='outlined'
            placeholder='+380'
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            onChange={handlePhoneNumberChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={styles.contact_form}
            inputProps={{
              maxLength: 13,
            }}
          />
          <TextField
            id='name'
            name='name'
            label='Ім’я'
            variant='outlined'
            value={formik.values.name}
            onChange={handleNameChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            className={styles.contact_form}
            inputProps={{
              maxLength: 200,
            }}
          />
          <div className={styles.wrapper_btn}>
            <h3 className={styles.title_btn}>Оберіть як з вами зв’язатись</h3>
            <div className={styles.button_row}>
              <Button
                type='button'
                variant='outlined'
                className={activeButton === 'call' ? `${styles.button_contact} ${styles.active}` : `${styles.button_contact}`}
                onClick={(): void => setActiveButton('call')}
              >
                дзвінок
              </Button>
              <Button
                type='button'
                variant='outlined'
                className={activeButton === 'telegram' ? `${styles.button_contact} ${styles.active}` : `${styles.button_contact}`}
                onClick={(): void => setActiveButton('telegram')}
              >
                telegram
              </Button>
              <Button
                type='button'
                variant='outlined'
                className={activeButton === 'viber' ? `${styles.button_contact} ${styles.active}` : `${styles.button_contact}`}
                onClick={(): void => setActiveButton('viber')}
              >
                viber
              </Button>
            </div>
          </div>
          <Button className={styles.submitting_form} variant='contained' type='submit'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
