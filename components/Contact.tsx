import React from 'react'
import { Resend } from 'resend';

const resend = new Resend('••••••••••••••••••••••••••••••••••••');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'adamzav33@seznam.cz',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

const Contact = () => {
  return (
    <div>
      
    </div>
  )
}

export default Contact
