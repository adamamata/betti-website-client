//Imports
import './Home.css';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Contact.css';
import './About.css';
import Work from '../../components/Work';
import About from '../../components/About';
import Contact from '../../components/Contact';
import PuffLoader from "react-spinners/ClipLoader";

//Main Function
function Home() {
  //Global Variables
  const work = useRef(null);
  const top = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  //States
  const [loading, setLoading] = useState(true);

  //Scroll function
  const scroll = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: 'smooth',
    });
  }

  //useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  if (loading) {
    return (
      <div className='loader'>
        <PuffLoader
          color={'white'}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  } else {
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
          <Work/>
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
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ ease: "easeOut", duration: 4 }}
          >
            <About/>
            <div>
            <IconButton sx={{color: 'white', '&:hover': {background: 'black'}}} onClick={() => scroll(contact)}>
              <ArrowDownwardIcon/>
            </IconButton>
            </div>
          </motion.div>
        </div>
  
        {/* CONTACT */}
        <div className='contact' ref={contact}>
          <Contact/>
          <IconButton sx={{color: 'white', '&:hover': {background: 'black'}, marginBottom: '10px'}} onClick={() => scroll(top)}>
            <ArrowUpwardIcon/>
          </IconButton>
        </div>
  
      </div>
    )
  }
}

export default Home