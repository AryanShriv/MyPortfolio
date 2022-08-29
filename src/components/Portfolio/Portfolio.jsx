import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Work.jpg'
// import IMG1 from '../../assets/Work.jpg'
// .
// .
// Eseee jitne bhi chaahiyee





const data = [
  {
    id: 1,
    image: IMG1,
    title:'Kuch na Kuch Toh hai',
    github:'https://github.com/AryanShriv?tab=repositories',
    demo:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101ad363237205.5aa9feaddf1f7.gif'
  },
  
  {
    id: 2,
    image: IMG1,
    title:'Kuch na Kuch Toh hai',
    github:'https://github.com/AryanShriv?tab=repositories',
    demo:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101ad363237205.5aa9feaddf1f7.gif'
  },
  {
    id: 3,
    image: IMG1,
    title:'Kuch na Kuch Toh hai',
    github:'https://github.com/AryanShriv?tab=repositories',
    demo:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101ad363237205.5aa9feaddf1f7.gif'
  },
  {
    id: 4,
    image: IMG1,
    title:'Kuch na Kuch Toh hai',
    github:'https://github.com/AryanShriv?tab=repositories',
    demo:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101ad363237205.5aa9feaddf1f7.gif'
  },
  {
    id: 5,
    image: IMG1,
    title:'Kuch na Kuch Toh hai',
    github:'https://github.com/AryanShriv?tab=repositories',
    demo:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101ad363237205.5aa9feaddf1f7.gif'
  },
  {
    id: 6,
    image: IMG1,
    title:'Kuch na Kuch Toh hai',
    github:'https://github.com/AryanShriv?tab=repositories',
    demo:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101ad363237205.5aa9feaddf1f7.gif'
  },




]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Kaam</h5>
      <h2>
        Portfolio
      </h2>

      <div className="container portfolio__container">
        {
          data.map(({id ,image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel='nooperner'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='nooperner'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio