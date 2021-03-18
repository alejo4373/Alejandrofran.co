import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
      await axios.post(url, { name, email, message })
      setFormSent(true)
      setFormSuccess(true)
    } catch (err) {
      alert("Oops, my website seems to be experiencing problems. Please contact me via email. I apologize for the inconvenience")
      setFormSent(true)
      setFormSuccess(false)
    }
  }

  return (
    <div className="contact-me section black" id="contact-me">
      <h2 className="title">Contact Me</h2>
      <div className="content">
        {formSent && formSuccess
          ? (
            <div className='thankyou-card'>
              <h3>Thank you {name ? name : "Friend"}!</h3>
              <p>I will be glad to hear from you and will reply promptly to your message.</p>
              <p>Best,</p>
              <p>Alejandro</p>
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
      <div className="social-icons">
        <a href="https://github.com/alejo4373">
          <i class="fab fa-github"></i>
          <p>GitHub</p>
        </a>
        <a href="https://twitter.com/alejo4373">
          <i class="fab fa-twitter"></i>
          <p>Twitter</p>
        </a>
        <a href="https://linkedin.com/in/alejandro-franco">
          <i class="fab fa-linkedin"></i>
          <p>LinkedIn</p>
        </a>
        <Link to="/resume">
          <i class="fas fa-file-alt"></i>
          <p>Resume</p>
        </Link>
        <a href="mailto:alejandrofranco@pursuit.org">
          <i class="fas fa-envelope"></i>
          <p>Email</p>
        </a>
      </div>
    </div>
  )
}



export default ContactMe

