import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import { useState } from 'react';
import Swal from 'sweetalert2'
import swal from 'sweetalert'
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let item =    {name, email, message};
              const options = {
                method:"POST",
                headers:{"content-type": "application/json", Accept: "application/json"},
                body: JSON.stringify(item)
              };
    const url = "http://localhost:8080/send-email";
    try {
      const response = await fetch(url, options);
      console.log(response);
      if(response.ok){
       console.log("sent successful");
       swal("Successful", "Email sent successfully", "success", { buttons: false, timer: 2000, })    
} else {
   Swal.fire({
       title: "Failed To Send Email?",
       text: `Please check again fields! `,
       icon: 'error',
       showConfirmButton: false,
       showCancelButton: true,
       cancelButtonColor: '#d33',
       showClass: {
           popup: 'animate__animated animate__shakeX'
       },
   })
       
      }
       
   } catch (error) {
     console.log(error + "error");
     Swal.fire({
         title: "Something Went Wrong?",
         text: `net::ERR_INTERNET_DISCONNECTED `,
         icon: "warning",
         dangerMode: true, 
         showConfirmButton: false,
         showCancelButton: true,
         cancelButtonColor: '#d33',
         showClass: {
             popup: 'animate__animated animate__shakeX'
         },
     })
   }
  }
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
           <form onSubmit={handleSubmit}>
           <label>
          Full Name:
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Message:
          <textarea name="message"  cols="30" rows="10"  value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
        </label>
        <button type="submit" className="btn btn-primary">Send Message</button>
         
        </form>
    
    </div>
    </section>
  )
}
 
export default Contact
