import React, { useContext } from 'react';
import StoreContext from '../context/store/StoreContext';

export const Product = ({ products }) => {
	const { addProductToCart } = useContext(StoreContext);

	return (
		<>
			{products.map((product) => (
				<div key={product.id} className='col-12 col-xl-6 p-5 product-wrapper'>
					<div className='container'>
						<img
							src={product.photo.formats.medium.url}
							alt={product.title}
						/>
						<div className='info'>
							<h3 className='h1 display-4'>{product.title}</h3>
							<p className='h5 mb-3'>{product.weight} г</p>
							<div className='price mb-3 mb-sm-5'>
								<div className='h3 bg-primary d-inline-block px-1 fs-3'>
									{product.price} грн
								</div>
								<div className='h5 d-inline-block ml-3'>
									<s>{product.old_price} грн</s>
								</div>
							</div>
							<button
								className='btn btn-primary mb-5 mt-0 mb-sm-0 mt-sm-5'
								onClick={addProductToCart.bind(this, product)}
							>
								<i className='fas fa-shopping-basket' /> До кошика
							</button>
						</div>
					</div>
					<div className='product-bg'></div>
				</div>
			))}
		</>
	);
};
