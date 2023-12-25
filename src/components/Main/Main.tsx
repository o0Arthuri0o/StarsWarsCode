import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './Main.css'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
const Main = () => {

  const allLinks = [
    {
      pageNumber: 1,
      link:'https://swapi.dev/api/people'
    },
    {
      pageNumber: 2,
      link:'https://swapi.dev/api/people/?page=2'
    },
    {
      pageNumber: 3,
      link:'https://swapi.dev/api/people/?page=3'
    },
    {
      pageNumber: 4,
      link:'https://swapi.dev/api/people/?page=4'
    },
    {
      pageNumber: 5,
      link:'https://swapi.dev/api/people/?page=5'
    },
    {
      pageNumber: 6,
      link:'https://swapi.dev/api/people/?page=6'
    },
    {
      pageNumber: 7,
      link:'https://swapi.dev/api/people/?page=7'
    },
    {
      pageNumber: 8,
      link:'https://swapi.dev/api/people/?page=8'
    },
    {
      pageNumber: 9,
      link:'https://swapi.dev/api/people/?page=9'
    }
  ]

  const [currentPage, setCurrentPage] = useState({pageNumber: 1, info:[]})
  useEffect(() => {

    const getInfo = async() => {
      const newPage = allLinks.filter(page => page.pageNumber === currentPage.pageNumber)[0]
      const res = await fetch(newPage.link)
      const data = await res.json()
      
    }

    getInfo()
  }, [currentPage])

  return (
    <div className='main-page'>
        
        {/* {currentPage.info.length ? 
          <>
            <div className='cards-wrapper' >
              {currentPage.info.map((character) => 
                <Card name={character.name} birth={character.birth_year} gender={character.gender} />
              )}
            </div>

            <div className='pagination'>
              <div onClick={()=>{}} className={1 === currentPage.pageNumber ? 'page active' : 'page'}>1</div>
              <div onClick={()=>{}} className={2 === currentPage.pageNumber ? 'page active' : 'page'}>2</div>
              <div onClick={()=>{}} className={3 === currentPage.pageNumber ? 'page active' : 'page'}>3</div>
              <div onClick={()=>{}} className={4 === currentPage.pageNumber ? 'page active' : 'page'}>4</div>
              <div onClick={()=>{}} className={5 === currentPage.pageNumber ? 'page active' : 'page'}>5</div>
              <div onClick={()=>{}} className={6 === currentPage.pageNumber ? 'page active' : 'page'}>6</div>
              <div onClick={()=>{}} className={7 === currentPage.pageNumber ? 'page active' : 'page'}>7</div>
              <div onClick={()=>{}} className={8 === currentPage.pageNumber ? 'page active' : 'page'}>8</div>
              <div onClick={()=>{}} className={9 === currentPage.pageNumber ? 'page active' : 'page'}>9</div>
            </div> 
          </>
      
        :
         <Loader/>
      } */}

        <Loader/>

    </div>

  )
}

export default Main