import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdWork} from 'react-icons/md'
import {BiMessageSquare} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className= {activeNav === '#testimonials' ? 'active' : ''}><MdWork/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><BiMessageSquare/></a>
    </nav>
  )
}

export default Nav