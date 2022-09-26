import React from 'react'
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

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
              <h1 style={{fontSize: '20vw', color: 'white', margin: 0}}>Betti Angyan</h1>
              <h2 style={{fontSize: '7vw', color: 'white', paddingBottom: '5vw'}}>Helping clients realize how beautiful they really are.</h2>
            </motion.div>
          </div>
        </Box>
    </div>
  )
}

export default XS