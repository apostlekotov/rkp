import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Links } from '@/components/Links';

export const Contacts = () => (
  <section className='contact' id='contacts'>
    <div className='section-header'>
      <h3>Contact me</h3>

      <p>
        Leave me a message for cooperation or send me an email to{' '}
        <a href='mailto:hi@kotov.com.ua?subject=Hi, Paul Kotov!'>
          hi@kotov.com.ua
        </a>
        . I will answer you as soon as possible!
      </p>
      <div className='link-icons'>
        <Links />
      </div>
    </div>

    <ContactForm />
  </section>
);
