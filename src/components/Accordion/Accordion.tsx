import React, { useEffect, useState } from 'react'
import './Accordion.css'
import Loader from '../Loader/Loader'
const Accordion = ({info}) => {
    const [name, linkArr] = info
    let arrayIndex = 'name'
    if(name === 'Films') {arrayIndex = 'title'}
    const [allData, setAllData] = useState<Set<string>>(new Set())

    const [isActive, setActive] = useState(false)
    const [plusOrMinus, setPlusOrMinus] = useState('+') 
    useEffect(()=>{
      if(isActive) setPlusOrMinus('-')
      else setTimeout(()=>setPlusOrMinus('+'), 300)
    }, [isActive])

    useEffect(() => {
      const getStarships = async() =>{
        for (let link of linkArr) {
          const res = await fetch(link)
          const data = await res.json()
          let newName = data[arrayIndex]
       
          setAllData(prevData => new Set([...prevData, newName]))
        }
      }
      getStarships()
    }, [])

  return (
  <>
    { Array.from(allData).length === linkArr.length ?
      <div className='accordion' onClick={() => setActive(prev => !prev)} >
          <div className='accordion-name' >
              <p>{name}</p>
              <p>{plusOrMinus}</p>
          </div>
          <div className={isActive ? 'panel active' : 'panel'} >
              {Array.from(allData).map((item) => <p key={item} >{item}</p>)}
          </div>
      </div>
      :
      <Loader/>
    }
  </>
  )
}

export default Accordion