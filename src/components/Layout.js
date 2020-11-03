import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductProvider } from "@/components/Store";

export const Layout = ({ children }) => {
  return (
    <>
        <ProductProvider>
          <Header />
            {children}
          <Footer />
        </ProductProvider>
    </>
  );
};
