import React from 'react'
import './About.css' 
import Me from '../../assets/AboutMe.jpg'
import {BsAward} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {AiOutlineFileProtect} from 'react-icons/ai'
import {FaSlackHash} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>
        Thodi jaan pehechaan
      </h5>
      <h2>
        About Me
      </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {Me} alt="About"/>
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Experience</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>bohotee saareee</small>
            </article>

            <article className='about__card'>
              <AiOutlineFileProtect className='about__icon'/>
              <h5>Projects</h5>
              <small>Bohotee zyaadaa kaam</small>
            </article>

            <article className='about__card'>
              <FaSlackHash className='about__icon'/>
              <h5>Something</h5>
              <small>Kuch daalna hai yahan</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta qui natus quia sit dolores odio, provident ad incidunt eaque facilis amet possimus nihil, magnam, eius mollitia saepe fugit consequatur?
          </p>

          <a href="#contact" className='btn btn-primary'>Baatein kro</a>
        </div>
      </div>
    </section>
  )
}

export default About