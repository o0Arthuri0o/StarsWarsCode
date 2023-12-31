import React, { useEffect, useState } from 'react'
import './Person.css'
import Accordion from '../Accordion/Accordion'
import Loader from '../Loader/Loader'
const Person = ({personInfo}) => {
  
  const [planet, setPlanet] = useState('')
  useEffect(() => {
    const getHomeWorld = async() => {
      const res = await fetch(personInfo.homeworld)
      const data = await res.json()
      setPlanet(data.name)
    }
    getHomeWorld()
  }, [])
  return (
    <>
    {planet.length ? 
      <div className='person-page' >
          <div className='info-wrapper'>
              <div className='person-name'>{personInfo.name}</div>
              <div className='person-about-wrapper'>
                  <p>Birth year: {personInfo.birth_year}</p>
                  <p>Home world: {planet}</p>
                  <p>Gender: {personInfo.gender}</p>
                  <p>Mass: {personInfo.mass} </p>
                  <p>Height: {personInfo.height}</p>
                  <p>Eye color: {personInfo.eye_color} </p>
                  <p>Hair color: {personInfo.hair_color}</p>
                  <p>Skin color: {personInfo.skin_color}</p>
              </div>
          </div>

          <div className='accordions-wrapper'>
            <Accordion info={['Films', personInfo.films]} />
            <Accordion info={['Starships', personInfo.starships]} />
          
          </div>
          
      </div>
      :
      <Loader/>
    }
    
    </>
  )
}

export default Person