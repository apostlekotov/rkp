import React from 'react';
import Link from 'next/link';
import { Cart } from '@/components/Cart';

export const Header = () => {
	return (
		<div className='navbar navbar-expand-lg fixed-top d-flex justify-content-between bg-white py-3 px-4 px-sm-5'>
			<Link href='/'>
				<a className='navbar-brand d-flex align-items-center'>
					<img className='drop-shadow-sm' src='./img/logo.png' alt='rkp' />
					<span className='display-5 text-decoration-none color-black ml-3 mb-0'>
						{' '}
						РКП
					</span>
				</a>
			</Link>

			<nav className='d-none d-lg-block position-absolute top-50 left-50 translate-middle m-auto'>
				<ul className='navbar-nav font-weight-bold'>
					<li className='nav-item'>
						<a className='nav-link mx-3' href='#sales'>
							Акції
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link mx-3' href='#about'>
							Про нас
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link mx-3' href='#contacts'>
							Контакти
						</a>
					</li>
				</ul>
			</nav>

			<div className='cart'>
				<Cart />
			</div>
		</div>
	);
};
