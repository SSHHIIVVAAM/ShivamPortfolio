import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Car Selling',
    github: 'https://github.com/SSHHIIVVAAM/car_selling-Website',
    demo: 'https://car-selling-website-one.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Foodie Website',
    github: 'https://github.com/SSHHIIVVAAM/Food_website',
    demo: 'https://food-website-iota-rose.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Secure Site',
    github: 'https://github.com/SSHHIIVVAAM/secure_site',
    demo: 'https://secure-site.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title,github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
         <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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