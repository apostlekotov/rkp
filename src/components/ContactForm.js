import React from 'react';
import { useFormik } from 'formik';
import { sendMail } from '@/utils/api';

export const ContactForm = () => {
	const {
		values,
		handleChange,
		handleSubmit,
		isSubmitting,
		status = { success: null },
	} = useFormik({
		initialValues: { name: '', phone: '', message: '' },

		onSubmit: async (
			{ name, phone, message },
			{ setSubmitting, resetForm, setStatus }
		) => {
			const res = await sendMail({
				to: process.env.TO_EMAIL,
				subject: `Добрий день! <${phone}${name !== '' ? `, ${name}` : ''}>`,
				text: message,
			});

			setSubmitting(false);
			resetForm({});
			setStatus({ success: res.ok });

			setTimeout(() => {
				setStatus({ success: null });
			}, 4000);
		},
	});

	return (
		<form
			className='col-12 col-md-6'
			autoComplete='off'
			onSubmit={handleSubmit}
		>
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
			<div>
				<label
					htmlFor='message'
					className='form-label fw-bold font-weight-bold ml-3'
				>
					Повідомлення <strong>*</strong>
				</label>
				<textarea
					name='message'
					className='form-control mb-3'
					placeholder='Добрий день!'
					onChange={handleChange}
					value={values.message}
					required
				></textarea>
			</div>

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
		</form>
	);
};
