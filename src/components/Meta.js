import Head from 'next/head';

export default function Meta() {
	return (
		<Head>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='./favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='./favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='./favicon/favicon-16x16.png'
			/>
			<link rel='manifest' href='./favicon/site.webmanifest' />
			<link
				rel='mask-icon'
				href='./favicon/safari-pinned-tab.svg'
				color='#ed1f29'
			/>
			<meta name='msapplication-TileColor' content='#ff0000' />
			<meta name='theme-color' content='#ed1f29'></meta>
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap'
				rel='stylesheet'
			/>
			<link
				rel='stylesheet preconnect'
				href='https://use.fontawesome.com/releases/v5.14.0/css/all.css'
			/>
			<meta name='description' content='rkp' />
			<meta
				httpEquiv='Content-Security-Policy'
				content='upgrade-insecure-requests'
			></meta>
		</Head>
	);
}
