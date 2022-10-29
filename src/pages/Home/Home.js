import './Home.css';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Slider from '../../components/Slider/Slider';
import { TextField, Button } from '@mui/material';
import './Contact.css';
import './About.css';

function Home() {
  //Global Variables
  const work = useRef(null);
  const top = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);


  //Scroll function
  const scroll = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div className='Home'>

      {/* LANDING */}
      <div className='landing' ref={top}>
        <motion.div
          className='landing-headers' 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ ease: "easeOut", duration: 2 }}
        >
              <h1>Betti Angyan</h1>
              <h2>Helping clients realize how beautiful they really are.</h2>
        </motion.div>
        <div>
          <IconButton sx={{color: 'white', '&:hover': {background: 'black'}}} onClick={() => scroll(work)}>
            <ArrowDownwardIcon/>
          </IconButton>
        </div>
      </div>

      {/* WORK */}
      <motion.div 
      className='home-work' ref={work}
      >
        <div className='work-headers'>
          <h1>My Portfolio</h1>
          <p>Swipe to see more.</p>
        </div>
        <Slider/>
        <div>
          <IconButton sx={{color: 'white', '&:hover': {background: 'black'}}} onClick={() => scroll(about)}>
            <ArrowDownwardIcon/>
          </IconButton>
        </div>
      </motion.div>
      
      {/* ABOUT */}
      <div className='about' ref={about}>
      <motion.div
        className='about-content'
        initial={{opacity: 0, x: 20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ ease: "easeOut", duration: 3.5 }}
      >
        <div className='about-writing'>
          <h1>About me</h1>
          <p>I have been interested in makeup for years, practicing on myself and others as a hobby since my early teens. In 2021 I enrolled in a makeup artist course in Amsterdam at Art of Colors to further my education. During this time, I developed new skills and learned professional techniques. I had the chance to work with photographers, stylists and models of all backgrounds and styles. Being exposed to a wide variety of creatives and opportunities to try out different techniques gave me the chance to develop my own style and realize where my true passions lie. I find myself gravitating towards fun and creative methods of makeup, “playing” with all kinds of products to create beautiful and unique looks. I also enjoy a more conventional makeup style, helping the client realize how beautiful they really are when we focus on highlighting their features instead of hiding what they perceive as flaws.</p>
          <h1>My experience</h1>        
          <p>During my time as a student at Art of Colors I started working with professionals as an intern. I worked on photoshoots, fashion shows and films. After graduation I continued working with a variety of clients, at events such as weddings and video interviews. I am open to bookings for all kinds of events. Whether you need a makeup artist for your portfolio shoot as a model, or you want to look your best at a party. I am open-minded and flexible as an artist; I do my best to make all visions come true and make every client happy with the final look.</p>
        </div>
        <div>
        <IconButton sx={{color: 'white', '&:hover': {background: 'black'}}} onClick={() => scroll(contact)}>
          <ArrowDownwardIcon/>
        </IconButton>
      </div>
      </motion.div>
      </div>

      {/* CONTACT */}
      <div className='contact' ref={contact}>
      <h1 style={{color: 'white'}}>Contact me</h1>
      <p style={{color: 'white  '}}>Use this form to get in contact, or send any inquiries to <u>betti.angyan@gmail.com</u></p>
      <form>
        <TextField 
          className='text-field'
          type='text'
          label='First Name'
          variant='outlined'
        />
        <TextField
          className='text-field'
          type='text'
          label='Last Name'
          variant='outlined'
        />
        <TextField  
          className='text-field'
          type='text'
          label='Message'
          variant='outlined'
        />
        <Button>Submit</Button>
      </form>
      <IconButton sx={{color: 'white', '&:hover': {background: 'black'}, marginBottom: '10px'}} onClick={() => scroll(top)}>
        <ArrowUpwardIcon/>
      </IconButton>
      </div>

    </div>
  )
}

export default Home