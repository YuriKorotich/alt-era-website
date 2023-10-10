'use client';

import React, { useEffect, useState } from 'react';

import Loader from './Loader';

export const LoadingProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => { setTimeout(resolve, 3000); });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> : children}
    </div>
  );
};
