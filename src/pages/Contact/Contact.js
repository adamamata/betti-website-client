import React from 'react';
import './Contact.css';
import { TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
 
function Contact() {
  return (
    <div className='Contact'>
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ ease: "easeOut", duration: 2 }}
    >
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
    </motion.div>
    </div>
  )
}

export default Contact