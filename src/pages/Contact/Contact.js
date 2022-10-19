import React from 'react';
import './Contact.css';
import { TextField, Button } from '@mui/material'

function Contact() {
  return (
    <div className='Contact'>
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
    </div>
  )
}

export default Contact