import React from 'react';
import Slider from './Slider/Slider';

function Work() {
  return (
    <div>
        <div className='work-headers'>
          <h1>My Portfolio</h1>
          <p>Swipe to see more.</p>
        </div>
        <Slider/>
    </div>
  )
}

export default Work