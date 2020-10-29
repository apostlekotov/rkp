import Head from 'next/head';

function Custom404() {
  return (
    <>
      <Head>
        <title>Рибкоппродукт | 404</title>
        <meta name='robots' content='noindex, nofollow' />
      </Head>

      <main className='not-found'>
        404
      </main>
    </>
  );
}

export default Custom404;
