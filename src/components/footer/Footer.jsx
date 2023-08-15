import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer >
     <a href = '#' className='footer__logo' >Alemayhu Muhabaw</a>
     <ul className='permalinks'> 
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
     </ul>
     <div className='footer__socials'>
      <a href="https://linkedin.com/in/alex24-24609120a"></a>
      <a href="https://linkedin.com/in/alex24-24609120a"></a>
      <a href="https://linkedin.com/in/alex24-24609120a"></a>
      <a href="https://linkedin.com/in/alex24-24609120a"></a>

     </div>
     <div className='footer__copyright'>
      <small >&copy; Alemayehu Muhabaw. All Rights Reserved.

      </small>
     </div>
    </footer>
  )
}

export default Footer
