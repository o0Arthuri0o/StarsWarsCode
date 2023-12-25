import React from 'react'
import './Person.css'
import Accordion from '../Accordion/Accordion'
const Person = () => {
  return (
    <div className='person-page' >
        <div className='info-wrapper'>
            <div className='person-name'>Person</div>
            <div className='person-about-wrapper'>
                <p>Birth year: fdfsf</p>
                <p>Home world: gggggggggsf</p>
                <p>Gender:</p>
                <p>Mass:</p>
                <p>Height:</p>
                <p>Eye color:</p>
                <p>Hair color:</p>
                <p>Skin color:</p>
            </div>
        </div>

        <div className='accordions-wrapper'>
          <Accordion/>
        
        </div>
        
    </div>
  )
}

export default Person