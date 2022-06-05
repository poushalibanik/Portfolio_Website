import React from 'react'
import  './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact ()  {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xogif3c', 'template_13fxgi5', form.current, 'oU8jYQ-YUedz6_QM6')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummypou@gmail.com</h5>
            <a href="mailto:dummypou@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
              <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Drop a text</h5>
            <a href="https://m.me/poushali.banik" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+914567890323" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}
