import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi'


const Services = () => {
  return (
    <section id='services'>
      <h5>
        OFFERING
      </h5>
      <h2>
        SERVICES
      </h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>
              Kuch na Kuch Toh Kiya Hi Hoga
            </h3>
          </div>

          <ul className="service__list">
            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>
          </ul>
        </article>

        {/* FIRST KHTHM */}
        <article className="services">
          <div className="service__head">
            <h3>
              Kuch na Kuch Yahan bhi 
            </h3>
          </div>

          <ul className="service__list">
            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>
          </ul>
        </article>

        {/* SECOND KHTHM */}
        <article className="services">
          <div className="service__head">
            <h3>
            And Kuch Na Kuch Yahan Also 
            </h3>
          </div>

          <ul className="service__list">
            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>

            <li>
            <GiCheckMark className = "service__list-icon"/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, qui.
            </p>
            </li>
          </ul>
        </article>

        {/* THIRD KHTHM */}
      </div>

    </section>
  )
}

export default Services