import React from 'react'
import './Testimonials.css'
import Client from '../../assets/ClientClick.png'
import Client2 from '../../assets/Client2.jpg'
import Client3 from '../../assets/Client3.jpg'
import Client4 from '../../assets/Client4.jpg'


import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const data = [
  {
    avatar: Client4,
    name:'Mr. Aryan Shrivastava',
    review:'Aee bohot sahi kaam krta hai londaa.. ab kuch gibrish text jaisee - Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae veniam officia quos, blanditiis rem nulla maiores quam ad magnam!'
  },
  
  {
    avatar: Client2,
    name:'Mr. Aryan Shrivastava',
    review:'Aee bohot sahi kaam krta hai londaa.. ab kuch gibrish text jaisee - Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae veniam officia quos, blanditiis rem nulla maiores quam ad magnam!'
  },

  {
    avatar: Client3,
    name:'Mr. Aryan Shrivastava',
    review:'Aee bohot sahi kaam krta hai londaa.. ab kuch gibrish text jaisee - Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae veniam officia quos, blanditiis rem nulla maiores quam ad magnam!'
  },

  {
    avatar: Client,
    name:'Mr. Aryan Shrivastava',
    review:'Aee bohot sahi kaam krta hai londaa.. ab kuch gibrish text jaisee - Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae veniam officia quos, blanditiis rem nulla maiores quam ad magnam!'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Some Reviews</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="clients__avatar">
            <img src={avatar} alt="Main hi hoon"/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
  )
}

export default Testimonials