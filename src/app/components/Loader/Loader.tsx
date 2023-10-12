'use client';

import React from 'react';

import { useLoading } from './LoadingContext';

const Loader = () => {
  const { loading } = useLoading();

  if (loading === false) return null;

  return (
    <div className='container_loader'>
      <div className='loader' />
    </div>
  );
};

export default Loader;
