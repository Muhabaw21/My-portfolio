import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Companies</h5>
      <h2>Experience</h2>
      <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
        
      >
          <SwiperSlide className="testimonials">
             
             <h5 className='client__name'>Bazra Tech</h5>
            <small className='client__review'>
            Since Nov 1st, 2022, I've been a Flutter developer specializing in Dart and the Flutter framework. I build efficient mobile apps, do code reviews, follow CI/CD practices, and stay updated with tech advancements. I also have experience in Express.js, building robust web apps with RESTful APIs, server-side rendering, and authentication/error handling. I optimize app performance with caching and load balancing. With expertise in both Flutter and Express.js, I deliver top-quality web and mobile solutions.
             </small>
        
       </SwiperSlide>
          <SwiperSlide className="testimonials">
                  <h5 className='client__name'>Daftech Computer Engineering</h5>
                 <small className='client__review'>
                 As a frontend developer with a strong focus on JavaScript and the React framework,
                 my responsibilities include developing, debugging, and fixing issues within the 
                 application.I have been actively engaged in this role since March 1st, 2021, 
                 and will continue until September 4th, 2022.
                  </small>
             
            </SwiperSlide>
          {/* <SwiperSlide className="testimonials">
                  <h5 className='client__name'>Bazra Technology Group</h5>
                 <small className='client__review'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis temporibus sequi laborum sunt veniam iste,
                         accusantium magnam iure quis ullam voluptatum laboriosam similique hic. Hic ullam recusandae nihil dignissimos.
                  </small>
             
            </SwiperSlide> */}
        
          

      </Swiper>
      
    </section>
  )
}

export default Testimonials
