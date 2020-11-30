import Head from 'next/head';
import { getProducts } from '@/utils/api';
import { Contacts } from '@/components/Contacts';
import { Product } from '@/components/Product';
import { PartnersList } from '@/components/PartnersList';
import {useContext} from "react";
import AlertContext from "../context/alert/AlertContext";

const Index = ({ products }) => {
	const alertContext = useContext(AlertContext);

	const click = () => {
		alertContext.setAlert(999, {
			img: '/img/certificate.jpg'
		});
	}

	return (
		<>
			<Head>
				<title>Рибкоппродукт — Натуральна ікорка, а не штучний желатин</title>
			</Head>

			<main className='container'>
				<h1 className='display-3'>
					<strong>РИБКОППРОДУКТ </strong>
					<span className='d-none d-sm-inline-block'>—</span>
					<br />
					Натуральна ікорка, <br />
					а не штучний <br />
					желатин
				</h1>

				<img src='/img/hero-img.png' alt='hero img' />
			</main>

			<section id='sales' className='py-5'>
				<h3 className='display-5 text-center mb-4'>Акція</h3>
				<div className='container-fluid'>
					<div className='row'>
						<Product products={products} />
					</div>
				</div>
			</section>

			<section className='container mt-5 mb-3' id='about'>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<h3 className='display-5 mb-4'>Про нас</h3>
						<p className='lead my-4'>
							ТОВ <strong>«Рибкоппродукт»</strong> (РКП) є сучасним,
							конкурентоспроможним, високотехнологічним підприємством по
							виробництву продукції з риби та морепродуктів, що засновано у 1997
							році. Основною ціллю є виготовлення <strong>високоякісної</strong>{' '}
							та <strong>безпечної</strong> делікатесної продукції, яка зберігає
							свої корисні властивості. Компанія має{' '}
							<strong>сертифікати</strong> відповідності міжнародним cтандартам
							з управління якістю та безпечністю харчової продукції ISO9000 і
							ISO22000.
						</p>
						<button className='btn btn-primary' onClick={click}>
							Перелглянути сертифікати
						</button>
					</div>

					<div className='col-12 col-lg-6'>
						<img src='/img/logo.png' alt='rkp logo' />
					</div>
				</div>
			</section>

			<div className='container-fluid d-flex justify-content-center flex-wrap my-5'>
				<img
					src='/img/iso9001.png'
					width='175px'
					className='m-4 m-md-5'
					alt='certificate'
				/>
				<img
					src='/img/iso22000.png'
					width='175px'
					className='m-4 m-md-5'
					alt='certificate'
				/>
				<img
					src='/img/nassr.png'
					width='175px'
					className='m-4 m-md-5'
					alt='certificate'
				/>
			</div>

			<PartnersList />

			<Contacts />
		</>
	);
};

export async function getServerSideProps() {
	const products = await getProducts();
	return { props: { products } };
}

export default Index;
