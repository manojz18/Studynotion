import React from 'react'
import { ContactUsForm } from '../../ContactPage/ContactUsForm'

export const ContactFormSection = () => {
  return (
    <div>
        <h1>Get in Touch</h1>
        <p>
            We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <div>
            <ContactUsForm />
        </div>
    </div>
  )
}
