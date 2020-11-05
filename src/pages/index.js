import Head from 'next/head';
import { getProducts } from '@/utils/api';
import { Contacts } from '@/components/Contacts';
import React from "react";

const Index = ({ products }) => {
  return (
    <>
      <Head>
        <title>Рибкоппродукт — Натуральна ікорка, а не штучний желатин</title>
      </Head>

      <div className="container">
        <main className="">
          
          <h1 className="display-4">
            <span className="text-primary">РИБКОППРОДУКТ</span> — <br/>
            Натуральна ікорка, <br/>
            а не штучний <br/>
            желатин
          </h1>
          
        </main>

        <section id="sales">
            <h3 className="sales-title">Акція</h3>
            <div className="container">
                <div className="row">
                    <Product products = { products }/>
                </div>
            </div>
        </section>

        <section id="about">
          <h3>Про нас</h3>
        </section>

        <section>
          coop
        </section>
        
        <Contacts />
      </div>
    </>
  );
};

export async function  getServerSideProps() {
    const products = await getProducts();
    return { props: { products } };
}

export default Index;
