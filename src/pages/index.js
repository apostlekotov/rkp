import Head from 'next/head';
import { getProducts } from '@/utils/api';
import { Contacts } from '@/components/Contacts';

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

        <Products products={products} />
        
        <Contacts />
      </div>
      
    </>
  );
};

export async function  getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
};

export default Index;
