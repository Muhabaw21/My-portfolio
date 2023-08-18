import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {AiFillMessage} from "react-icons/ai"
import './nav.css'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
 <nav>
  <a href="" className={activeNav === '#' ? 'active':''}  >Home</a>
  <a href="#about" onClick = {()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''} >About</a>
  <a href="#experience" onClick = {()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}>Skill</a>
  <a href="#portfolio"  onClick = {()=> setActiveNav('#portfolio')} className={activeNav === '#service' ? 'active':''}>Portfolio</a>
  <a href="#contact" onClick = {()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''} >Message</a>
 </nav>
  )
}

export default Nav
