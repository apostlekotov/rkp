import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import StoreState from "../context/store/StoreState";

export const Layout = ({ children }) => {
  return (
    <>
        <StoreState>
          <Header />
            {children}
          <Footer />
        </StoreState>
    </>
  );
};
