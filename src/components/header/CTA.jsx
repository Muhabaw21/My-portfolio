import React from 'react'
import CV from "../../assets/Alex Muhabaw.pdf";

const CTA = () => {
  return (
    <di className ="cta">
      <a href= {CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Get In Touch</a>
    </di>
  )
}

export default CTA
