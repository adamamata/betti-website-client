import React from 'react';
import XS from './XS';
import MD from './MD';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
        {/* SMALL SCREENS */}
        <XS/>
        {/* NORMAL - LARGE SCREENS */}
        <MD/>
    </div>
  )
}

export default Home