import React, { useContext, useState } from 'react';
import StoreContext from '../context/store/StoreContext';
import Modal from '@/components/Modal';

export const Cart = () => {
	const storeContext = useContext(StoreContext);

	const [showing, setShowing] = React.useState('false');
	const [show, setShow] = useState(false);

	return (
		<>
			<div className='btn-cart' onClick={() => setShowing(!showing)}>
				{storeContext.cart.length > 0 ? (
					<span className='badge bg-primary rounded-pill'>
						{storeContext.cart.reduce((count, currentProduct) => {
							return count + currentProduct.quantity;
						}, 0)}
					</span>
				) : null}
				<i className='fas fa-shopping-basket display-5' />
			</div>
			<div className='cart-wrapper'>
				<div className='container'>
					{!showing ? (
						<div className='cart-layout'>
							{storeContext.cart.length === 0 ? (
								<div className='text-center py-5'>
									<span className='display-4 font-weight-normal fw-normal my-5'>
										У кошику пусто :(
									</span>
								</div>
							) : (
								<div>
									{storeContext.cart.map((product) => (
										<div
											key={product.id}
											className='row p-2 cart-product-wrapper'
										>
											<div className='col-sm mb-3 d-flex d-flex justify-content-center align-items-center'>
												<img src={product.photo.formats.medium.url} />
											</div>
											<div className='col-sm d-flex flex-column justify-content-center'>
												<div className='h3 text-uppercase title-wrap'>
													{product.title}
												</div>
												<div className='h5 weight-wrap'>{product.weight}г</div>
											</div>
											<div className='col-sm h4 d-flex justify-content-center align-items-center price-wrap'>
												{product.price} грн
											</div>
											<div className='col-sm h4 d-flex justify-content-center align-items-center counter-wrap'>
												<button
													className='btn-count'
													onClick={storeContext.decrease.bind(this, product)}
												>
													{' '}
													-{' '}
												</button>
												<span>{product.quantity}</span>
												<button
													className='btn-count'
													onClick={storeContext.increase.bind(this, product)}
												>
													{' '}
													+{' '}
												</button>
											</div>
											<div className='col-sm-2 d-flex justify-content-center align-items-center'>
												<button
													className='btn btn-danger btn-sm btn-remove'
													onClick={storeContext.removeProductFromCart.bind(
														this,
														product
													)}
												>
													<i className='fa fa-trash' />
												</button>
											</div>
										</div>
									))}
									<hr className='hr-dashed' />
									<div className='btn-order-wrapper mb-3'>
										<div className='d-flex flex-row-reverse'>
											<h3 className='p-2'>
												До сплати: &nbsp;
												<b>
													{storeContext.cart.reduce((count, currentProduct) => {
														return (
															count +
															currentProduct.quantity * currentProduct.price
														);
													}, 0)}
													грн
												</b>
											</h3>
										</div>
										<div className='d-flex flex-row-reverse'>
											<div className='p-2'>
												<button
													className='btn btn-lg btn-primary'
													onClick={() => setShow(true)}
												>
													Замовити
												</button>
											</div>
										</div>
									</div>
									<Modal show={show} setShow={setShow} />
								</div>
							)}
						</div>
					) : null}
				</div>
			</div>
		</>
	);
};
