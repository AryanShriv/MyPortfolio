import React from 'react'
import CV from '../../assets/Aryan Shrivastava - Present.pdf'

const CTA = () => {
  return (
    <div className="CTA">
        <a href={CV} download className='btn' >DOWNLOAD CV</a>
        <a href="#Contact " className='btn btn-primary'>WANNA CONNECT</a>
    </div>
  )
}

export default CTA