import React from 'react'
import { useRef } from 'react';
import emailjs from  'emailjs-com'
import './Contact.css'

import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1tamspc', 'template_vqq9qch', form.current, 'EQ8eQOtQhWNqopcTK')

    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Aooo betaa</h5>
      <h2>Millooo hummsee</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
             <HiOutlineMail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>aryanshrivastava020010@gmial.com</h5>
             <a href="mailto:aryanshrivastava020010@gmail.com" target="_blank">Send Message</a>
          </article>


          <article className='contact__option'>
             <BsInstagram  className='contact__option-icon'/>
             <h4>Messanger</h4>
             <h5>rahshah_</h5>
             {/*TO BE DONE */}
             <a href="https://i.me/rahshah_/" target="_blank">Send Message</a>
          </article>


          <article className='contact__option'>
             <BsWhatsapp  className='contact__option-icon'/>
             <h4>WhatsApp</h4>
             <h5>Assume mera number Yahan</h5>
             <a href="https://api.whatsapp.com/send?phone=+6266056802" target="_blank">Send Message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Aapkaa Shubh Naam' required />
          <input type="email" name='email' placeholder='Email Address' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact