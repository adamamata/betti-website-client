import React from 'react';
import './Home.css';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Slider from '../../components/Slider';

function Home() {
  //Global Variables
  const work = useRef(null);
  const top = useRef(null);

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
          <IconButton sx={{'&:hover': {background: 'white'}}} onClick={() => scroll(work)}>
            <ArrowDownwardIcon/>
          </IconButton>
        </div>
      </div>

      {/* WORK */}
      <div className='home-work'>
        <h1>My Portfolio</h1>
        <p>Swipe to see more.</p>
        <Slider/>
        <IconButton sx={{'&:hover': {background: 'white'}}} onClick={() => scroll(top)}>
          <ArrowUpwardIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Home