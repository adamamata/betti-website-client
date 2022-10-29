import React from 'react'
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; 
import imgArr from '../Images.js';
import './Slider.css';
import { v4 as uuidv4 } from 'uuid';

function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

  return (
    <div>
        <motion.div ref={carousel} className='carousel'>
            <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                {imgArr.map(image => {
                    return (
                        <motion.div className='item' key={uuidv4()} style={{padding: '40px'}} whileHover={{scale: 1.1}}>
                            <img src={image} style={{width: '200px', borderRadius: '2rem', pointerEvents: 'none'}} alt='img'/>
                        </motion.div>
                    )
                }) }
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Slider