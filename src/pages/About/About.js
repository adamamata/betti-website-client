import React from 'react'
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='About'>
      {/* GET PICTURE OF BETTI */}
      <motion.div
        className='about-content'
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h1>About me</h1>
        <p>I have been interested in makeup for years, practicing on myself and others as a hobby since my early teens. In 2021 I enrolled in a makeup artist course in Amsterdam at Art of Colors to further my education. During this time, I developed new skills and learned professional techniques. I had the chance to work with photographers, stylists and models of all backgrounds and styles. Being exposed to a wide variety of creatives and opportunities to try out different techniques gave me the chance to develop my own style and realize where my true passions lie. I find myself gravitating towards fun and creative methods of makeup, “playing” with all kinds of products to create beautiful and unique looks. I also enjoy a more conventional makeup style, helping the client realize how beautiful they really are when we focus on highlighting their features instead of hiding what they perceive as flaws.</p>
        <h1>My experience</h1>        
        <p>During my time as a student at Art of Colors I started working with professionals as an intern. I worked on photoshoots, fashion shows and films. After graduation I continued working with a variety of clients, at events such as weddings and video interviews. I am open to bookings for all kinds of events. Whether you need a makeup artist for your portfolio shoot as a model, or you want to look your best at a party. I am open-minded and flexible as an artist; I do my best to make all visions come true and make every client happy with the final look.</p>
        
      </motion.div>
    </div>
  )
}

export default About