import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aryan Shrivastava</h1>
        <h5 className="text-light">
          MERN STACK DEVELOPER
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" srcset="" />
        </div>

        <a href="#contact" className='scroll__down'>SCROLL NEECHEE</a>
      </div>
    </header>
  )
}

export default Header