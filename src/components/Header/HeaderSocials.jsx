import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" ><BsLinkedin/></a>
        <a href= "https://github.com/"><FiGithub/></a>
        <a href="https://instagram.com/"><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials