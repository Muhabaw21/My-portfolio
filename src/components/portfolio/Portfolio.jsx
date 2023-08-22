import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/vehicle/home.jpg'
import IMG4 from '../../assets/Electricity delivery app/home.jpg'

import IMG10 from '../../assets/cargo/home.jpg'
import IMG11 from '../../assets/cargo/count.jpg'
import IMG9 from '../../assets/cargo/cargo_history.jpg'

import IMG13 from '../../assets/vehicle/vehicle.jpg'
import IMG12 from '../../assets/vehicle/report.jpg'
import IMG14 from '../../assets/vehicle/assigned.jpg'
import IMG15 from '../../assets/Electricity delivery app/detaill.jpg'
import IMG16 from '../../assets/Electricity delivery app/payment.jpg'
const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
       
      
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG10} alt="" />
          </div>
            <h3>From Cargo App</h3>
           <div className="portfolio__item-cta">
           <a href="httphttps://github.com/Muhabaw21/cargo_app" className='btn'>Github</a>
           
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG11} alt="" />
          </div>
            <h3>From Cargo App</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Muhabaw21/cargo_app" className='btn'>Github</a>
           
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG9} alt="" />
          </div>
            <h3>From Cargo App</h3>
           <div className="portfolio__item-cta">
           <a href="https://gihttps://github.com/Muhabaw21/Vehicle-Management" className='btn'>Github</a>
           
           </div>
         
        </article>
       
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG9} alt="" />
          </div>
            <h3>From Cargo App</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Muhabaw21/cargo_app" className='btn'>Github</a>
           
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG2} alt="" />
          </div>
            <h3>From Vehicle App</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Muhabaw21/Vehicle-Management" className='btn'>Github</a>
           
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG1} alt="" />
          </div>
            <h3>From Vehicle App</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Muhabaw21/Vehicle-Management" className='btn'>Github</a>
           
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG13} alt="" />
          </div>
            <h3>From Vehicle App</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Muhabaw21/Vehicle-Management" className='btn'>Github</a>
           
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG14} alt="" />
          </div>
            <h3>From Vehicle App</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Muhabaw21/Vehicle-Management" className='btn'>Github</a>
           
           </div>
         
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG4} alt="" />
          </div>
            <h3> From Electricity device delivery app</h3>
           <div className="portfolio__item-cta">
           
           <a href="https://github.com/Muhabaw21" className='btn'>Github</a>
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG15} alt="" />
          </div>
            <h3>From Electricity device delivery app</h3>
           <div className="portfolio__item-cta">
           
           <a href="https://github.com/Muhabaw21" className='btn'>Github</a>
           </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img className = "portfolio-img" src={IMG16} alt="" />
          </div>
            <h3>From Electricity device delivery app</h3>
           <div className="portfolio__item-cta">
           
           <a href="https://github.com/Muhabaw21" className='btn'>Github</a>
           </div>
         
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio
