import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/profile.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Alemayehu Muhabaw</h1>
      <h5 className="text-light">
        Full-Stack Software Engineer | Backend (Express.js and Spring Boot) | Frontend (React.js) | Mobile App (Dart and Flutter) Developer
      </h5>
      <CTA/>
      <HeaderSocial/>
         <div className="me">
          <img src= {Me} alt="" />
          <a href="#contact" className='scroll__down'>Scroll Down</a>
         </div>
     </div>
   </header>
  )
}

export default Header
