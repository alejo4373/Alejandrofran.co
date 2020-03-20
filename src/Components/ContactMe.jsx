import React, { useState } from 'react'
import axios from 'axios';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'https://formspree.io/mrglavjj'
    try {
      const { data } = await axios.post(url, { name, email, message })
      console.log(data)
      setFormSent(true)
      setFormSuccess(true)
    } catch (err) {
      console.err(err)
      setFormSent(true)
      setFormSuccess(false)
    }
  }

  return (
    <div className="contact-me section black">
      <h2 className="title">Contact Me</h2>
      {formSent && formSuccess
        ? (
          <p>Form Sent Successfully</p>
        )
        : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button>Send</button>
          </form>
        )
      }
    </div>
  )
}

export default ContactMe

