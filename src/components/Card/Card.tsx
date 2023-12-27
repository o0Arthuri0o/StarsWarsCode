import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({name, birth, gender, character, setPersonInfo}) => {
  const nav = useNavigate()
  return (
    <div onClick={()=>{setPersonInfo(character), nav('/person')}} className='card'>
        <p className='person-name'>{name}</p>
        <div className='person-parameters'>
            <p>{`Birth year: ${birth}`}</p>
            <p>{`Gender: ${gender}`}</p>
        </div>
    </div>
  )
}

export default Card