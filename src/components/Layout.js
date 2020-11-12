import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import StoreState from "../context/store/StoreState";
import AlertState from "../context/alert/AlertState";

export const Layout = ({ children }) => {
  return (
    <>
        <AlertState>
            <StoreState>
              <Header />
                {children}
              <Footer />
            </StoreState>
        </AlertState>
    </>
  );
};
