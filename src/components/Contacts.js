import React from 'react';
import { ContactForm } from '@/components/ContactForm';

export const Contacts = () => (
	<section id='contacts' className='container my-5'>
		<h3 className='display-5 mb-4'>Контакти</h3>

		<div className='row justify-content-between'>
			<ContactForm />
			<div className='col-12 col-md-6 py-4 px-5'>
				<p className='lead'>
					<strong>Адреса:</strong>
					<br />
					08300, Украина, Інструментальна, 8А, Чернігів, Чернігівська обл.
					<br />
					<strong>Телефон:</strong>
					<br />
					+380 95 025 97 48 <br />
					<strong>e-Mail:</strong>
					<br />
					rkp@rkp-market.site
				</p>
			</div>
		</div>
	</section>
);
