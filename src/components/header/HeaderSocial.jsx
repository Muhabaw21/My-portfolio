import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/alex24-24609120a" target='_blank'><BsLinkedin/></a>
      <a href="http://github.com/Muhabaw21" target='_blank'><FiGithub/></a>
      <a href="http://linked.com" target='_blank'></a>
    </div>
  )
}

export default HeaderSocial
