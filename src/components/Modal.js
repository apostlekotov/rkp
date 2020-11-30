import React, {useContext, useEffect} from 'react';
import { useFormik } from 'formik';
import { sendMail } from '@/utils/api';
import AlertContext from '../context/alert/AlertContext';
import StoreContext from '../context/store/StoreContext';

const Modal = ({ show, setShow }) => {
	const alertContext = useContext(AlertContext);
	const { cart, reset } = useContext(StoreContext);

	const {
		values,
		handleChange,
		handleSubmit,
		isSubmitting,
		status = { success: null },
	} = useFormik({
		initialValues: { name: '', phone: '' },

		onSubmit: async (
			{ name, phone },
			{ setSubmitting, resetForm, setStatus }
		) => {
			const message = `
        Замовлення: \n
        ${cart.map(
					({ title, price, quantity }) =>
						` ${title} - ${price}грн - ${quantity}шт`
        )}
        \n
        До сплати: 
        ${cart.reduce((count, currentProduct) => {
					return count + currentProduct.quantity * currentProduct.price;
				}, 0)}
      `;

			const res = await sendMail({
				to: process.env.TO_EMAIL,
				subject: `Замовлення! <${phone}${name !== '' ? `, ${name}` : ''}>`,
				text: message,
			});

			setSubmitting(false);
			resetForm({});

			setStatus({ success: res.ok });

			setTimeout(() => {
				setStatus({ success: null });
			}, 4000);

			setShow(false);

			if(res.ok === true){
				alertContext.setAlert(999, {
					type: 'success',
					title: 'Дякуємо за замовлення!',
					text: 'Наш менеджер звяжеться з Вами за лічені хвилини.',
				});
				reset();
			}else {
				alertContext.setAlert(999, {
					type: 'danger',
					title: 'Вибачте, сталася помилка(',
					text: 'Перевірте підключення!',
				});
			}
		},
	});

	return (
		show && (
			<form
				className='col-12 col-md-6'
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<div className='modal'>
					<div className='modal-form p-4'>
						<div className="container">
							<div className="row">
								<div className="col-md-12 d-flex justify-content-end">
									<button
										type='button'
										className='btn-close'
										onClick={() => setShow(false)}
									>
									</button>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<label
										htmlFor='name'
										className='form-label fw-bold font-weight-bold mx-4'
									>
										Ім'я <strong>*</strong>
									</label>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<input
										type='text'
										name='name'
										className='form-control mb-3'
										placeholder='Іван Тобілевич'
										size={40}
										onChange={handleChange}
										value={values.name}
										required
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<label
										htmlFor='phone'
										className='form-label fw-bold font-weight-bold mx-4'
									>
										Телефон <strong>*</strong>
									</label>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<input
										type='tel'
										name='phone'
										className='form-control mb-3'
										placeholder='+38(000) 000 00 00'
										size={40}
										minLength='9'
										maxLength='14'
										pattern='^([+]?\d{1,4}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$'
										onChange={handleChange}
										value={values.phone}
										required
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 p-3 d-flex justify-content-center">
									<button
										type='submit'
										className={`btn align-self-end ${
											status?.success == false ? 'btn-danger' : 'btn-primary'
										}`}
										disabled={isSubmitting}
										style={{ marginRight: '10px' }}
									>
										{isSubmitting ? (
											'Відправлення...'
										) : status.success !== null ? (
											status.success == true ? (
												<>
													Надіслано <i className='fas fa-check-circle'></i>
												</>
											) : (
												status.success == false && (
													<>
														Помилка <i className='fas fa-times'></i>
													</>
												)
											)
										) : (
											'Замовити'
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		)
	);
};

export default Modal;
