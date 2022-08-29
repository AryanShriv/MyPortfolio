import React from 'react'
import './Footer.css'


import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aryan Shrivastava</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        
        <a href="https://LinkedIn.com"><BsLinkedin/></a>
        
        <a href="https://Instagram.com"><BsInstagram/></a>
        
        <a href="https://YouTube.com"><AiFillYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Aryan Shrivastava. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer