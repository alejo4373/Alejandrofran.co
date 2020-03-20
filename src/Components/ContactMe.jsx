import React, { useState } from 'react'
import axios from 'axios';
import '../Styles/ContactMe.css'

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
      <div className="content">
        {formSent && formSuccess
          ? (
            <div className='thankyou-card'>
              <p>Thank you! I will get back to you shortly</p>
            </div>
          )
          : (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="14"
                />
              </fieldset>
              <button>Send</button>
            </form>
          )
        }
      </div>
    </div>
  )
}

export default ContactMe

