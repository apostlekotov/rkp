import Head from 'next/head';

function Custom404() {
	return (
		<>
			<Head>
				<title>Рибкоппродукт | 404</title>
				<meta name='robots' content='noindex, nofollow' />
			</Head>

			<main className='container text-center mt-5 my-4'>
				<span className='display-3 my-5'>404</span>
				<p className='display-5'>Вибачте, але ця сторінка відсутня</p>
				<a href='/' className='btn btn-primary mt-3'>
					Назад
				</a>
			</main>
		</>
	);
}

export default Custom404;
