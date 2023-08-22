import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id = 'service'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
     <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
          <li> <BiCheck className='service__list-icon'/>
           <p>Project Management
           </p>
          </li>
          <li> <BiCheck className='service__list-icon'/>
           <p>Bazra Tracker
           </p>
          </li>
          
        </ul>
      </article>
      {/* End Of Web Development */}
      <article className="service">
        <div className="service__head">
          <h3>Mobile App Development</h3>
        </div>
        <ul className="service__list">
          <li> <BiCheck className='service__list-icon'/>
           <p>Cargo Management
           </p>
          </li>
          <li> <BiCheck className='service__list-icon'/>
           <p>Driver Tracker
           </p>
          </li>
          <li> <BiCheck className='service__list-icon'/>
           <p>Vehicle Tracker 
           </p>
          </li>
          <li> <BiCheck className='service__list-icon'/>
           <p>Electricity Delivery app
           </p>
          </li>
      
         
          
        </ul>
      </article>
      {/* End Of Web Development */}
      
     </div>

    </section>
  )
}

export default Services
