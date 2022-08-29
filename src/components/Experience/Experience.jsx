import React from 'react'
import './Experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        Kya kyaa aataa hai apne ko
      </h5>
      <h2>
        MY EXPERIENCE
      </h2>

      <div className="container experience__container">

        {/* ||||||||||||||    FRONTEND    |||||||||||||| */}

        <div className="experience__frontend">
           <h3>
            Frontend Development
           </h3>
           <div className="experience__content">
            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>
            
           </div>
        </div>

{/* ||||||||||||||    BACKEND    |||||||||||||| */}

        <div className="experience__backend">
           <h3>
            Backend Development
           </h3>
           <div className="experience__content">
            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

            <article className='experience__details'>
            <AiFillCheckCircle className = 'experience__details-icons'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>EXPERIENCED</small>
            </div>
            </article>

           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience