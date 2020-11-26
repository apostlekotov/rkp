import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { sendMail } from '@/utils/api';
import AlertContext from '../context/alert/AlertContext';
import StoreContext from '../context/store/StoreContext';
import Alert from './Alert';

const Modal = ({ show, setShow }) => {
	const alertContext = useContext(AlertContext);
	const { cart } = useContext(StoreContext);

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

			alertContext.setAlert(999, {
				type: 'success',
				title: 'Дякуємо за замовлення!',
				text: 'Наш менеджер звяжеться з Вами за лічені хвилини.',
			});

			setStatus({ success: res.ok });

			setTimeout(() => {
				setStatus({ success: null });
			}, 4000);
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
					<div className='modal-form'>
						<div className='modal-header'>
							<span>Введіть будь ласка свої дані</span>
							<button
								type='button'
								className='close'
								onClick={() => setShow(false)}
							>
								<span>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<div>
								<label
									htmlFor='name'
									className='form-label fw-bold font-weight-bold ml-3'
								>
									Ім'я
								</label>
								<input
									type='text'
									name='name'
									className='form-control mb-3'
									placeholder='Іван Тобілевич'
									size={40}
									onChange={handleChange}
									value={values.name}
								/>
							</div>
							<div>
								<label
									htmlFor='phone'
									className='form-label fw-bold font-weight-bold ml-3'
								>
									Телефон <strong>*</strong>
								</label>
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
						<div className='modal-footer'>
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
									'Надіслати'
								)}
							</button>
						</div>
					</div>
				</div>
        
				<AlertContext.Consumer>
					{({ alerts }) => (
						<div className='alert-container'>
							{alerts.map((item) => {
								const { data } = item;
								return <Alert key={item.id} {...{ data }} />;
							})}
						</div>
					)}
				</AlertContext.Consumer>
			</form>
		)
	);
};

export default Modal;
