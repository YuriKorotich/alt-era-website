'use client';

import React, {
  createContext, useState, useContext, useMemo, useEffect,
} from 'react';

import { useScrollBlock } from '../../utils/useScrollBlock';

type LoadingContextProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type LoadingProviderProps = {
  children: React.ReactNode;
};
const LoadingContext = createContext<LoadingContextProps>({
  loading: true,
  setLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    blockScroll();
    if (!loading) {
      allowScroll();
    }
  }, [allowScroll, blockScroll, loading]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => { setTimeout(resolve, 2000); });
      setLoading(false);
    };
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ loading, setLoading }), [loading]);
  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};
