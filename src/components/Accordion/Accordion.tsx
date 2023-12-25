import React, { useState } from 'react'
import './Accordion.css'
const Accordion = () => {

    const [isActive, setActive] = useState(false)


  return (
    <div className='accordion' onClick={() => setActive(prev => !prev)} >
        <div>
            <p>Films</p>
            <p>{isActive ? '-' : '+'}</p>
        </div>
        <div className={isActive ? 'panel active' : 'panel'} >
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </div>
    </div>
  )
}

export default Accordion