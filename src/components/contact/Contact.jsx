import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id = 'contact'>
    <h5>Get In Toch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
        <div className="contact__options">
           <article className='contact__option'>
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
               <h5>alluwa2127@gmail.com</h5>
              <a href="mailto:alluwa2127@gmail.com" target='_blank'>Send a message </a>
            
           </article>
           <article className='contact__option'>
              <SiMessenger  className='contact__option-icon'/>
              <h4>Messenger </h4>
               <h5>alluwa2127@gmail.com</h5>
              <a href="mailto:alluwa2127@gmail.com" target='_blank'>Send a message </a>
            
           </article>
           <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
               <h5>+251973965944 </h5>
              <a href="https://api.whatsapp.com/send?phone+251973965944" target='_blank'>Send a message </a>            
           </article>

         </div>
           {/* End Of Contact Option */}
           <form action="">
            <input type="text" name ='name' placeholder='Your Full Name ' required />
            <input type="text" name ='email' placeholder='Your Email ' required />
             <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
             <button type='submit'className='btn btn-primary'>Send Message</button>
           </form>
      
    </div>
    </section>
  )
}
 
export default Contact
