import React from 'react'
import './Card.css'
const Card = ({name, birth, gender}) => {
  return (
    <div className='card'>
        <p className='person-name'>{name}</p>
        <div className='person-parameters'>
            <p>{`Birth year: ${birth}`}</p>
            <p>{`Gender: ${gender}`}</p>
        </div>
    </div>
  )
}

export default Card