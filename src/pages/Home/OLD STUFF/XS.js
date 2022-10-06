import React from 'react';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Slider from '../../../components/Slider';

function XS() {
  return (
    <div>
        <Box sx={{display: {xs: 'flex', md: 'none'}}} className='home-top-small'>
        <div className='top-contents' style={{alignItems: 'center'}}> 
            <motion.div 
            style={{marginLeft: '5vw'}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ ease: "easeOut", duration: 2 }}
            >
              <h1 style={{fontSize: '10vw', color: 'white', margin: 0}}>Betti Angyan</h1>
              <h2 style={{fontSize: '7vw', color: 'white', paddingBottom: '5vw'}}>Helping clients realize how beautiful they really are.</h2>
            </motion.div>
          </div>
        </Box>
        <Box sx={{display: {xs: 'flex', md: 'none'}}} className='home-work-large'>
          <div className='work-contents'>
            <h1 style={{fontSize: '10vw', color: 'white', marginRight: '5vw'}}>My Portfolio</h1>
          </div>
          {/* SLIDER */}
            <p style={{color: 'white'}}>swipe to see more.</p>
            <Slider /> 
          {/* ICON BUTTON */}
        </Box>
    </div>
  )
}

export default XS