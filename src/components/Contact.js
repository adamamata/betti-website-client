import React from 'react'
import { TextField, Button } from '@mui/material';

function Contact() {
  return (
    <div>
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
    </div>
  )
}

export default Contact