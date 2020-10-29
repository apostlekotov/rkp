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
    initialValues: { name: '', email: '', message: '' },

    onSubmit: async (
      { name, email, message },
      { setSubmitting, resetForm, setStatus }
    ) => {
      const { ok } = await sendMail({
        to: 'hi@kotov.com.ua',
        subject: `Hi, Paul Kotov! <${email}${name !== '' ? `, ${name}` : ''}>`,
        from: email,
        text: message,
      });

      setSubmitting(false);
      resetForm({});
      setStatus({ success: ok });

      setTimeout(() => {
        setStatus({ success: null });
      }, 4000);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-wrapper'>
        <div>
          <input
            name='name'
            placeholder='Іван Тобілевич'
            autoComplete='off'
            size={40}
            onChange={handleChange}
            value={values.name}
          />
          <label htmlFor='name'>Ім'я</label>
        </div>

        <div>
          <input
            name='email'
            type='email'
            placeholder='hi@kotov.com.ua'
            autoComplete='off'
            size={40}
            onChange={handleChange}
            value={values.email}
            required
          />
          <label htmlFor='email'>e-Mail <span className="badge badge-primary">*</span></label>
        </div>

        <div>
          <textarea
            name='message'
            placeholder='Добрий день!'
            onChange={handleChange}
            value={values.message}
            required
          ></textarea>
          <label htmlFor='message'>Повідомлення*</label>
        </div>

        <button
          type='submit'
          className={`btn btn-lg btn-primary ${
            status?.success === false && 'btn-danger'
          }`}
          disabled={isSubmitting}
        >
          {status.success !== null ? (
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
    </form>
  );
};
