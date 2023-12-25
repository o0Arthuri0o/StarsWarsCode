import React, { useEffect, useState } from 'react'
import './Main.css'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
const Main = () => {

  const [currentPage, setCurrentPage] = useState({pageNumber:1, characters:[], nextLink: ''})
  const [nextPage, setNextPage] = useState('https://swapi.dev/api/people/')

  useEffect(()=> {

    const getInfo = async() => {      
      const response = await  fetch(nextPage);
      const data = await response.json()
      console.log(data.results)
      setCurrentPage({...currentPage, characters: data.results, nextLink: data.next})
    }
    getInfo()

  }, [nextPage])
  const changePage = (num) => {
    console.log(num)
    setNextPage(currentPage.nextLink)
    setCurrentPage({...currentPage, pageNumber: +num})
  }

  return (
    <div className='main-page'>
        
        {currentPage.characters.length ? 
          <>
            <div className='cards-wrapper' >
              {currentPage.characters.map((character) => 
                <Card name={character.name} birth={character.birth_year} gender={character.gender} />
              )}
            </div>

            <div className='pagination'>
              <div onClick={(e) => changePage(e.target.textContent)} className={1 === currentPage.pageNumber ? 'page active' : 'page'}>1</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={2 === currentPage.pageNumber ? 'page active' : 'page'}>2</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={3 === currentPage.pageNumber ? 'page active' : 'page'}>3</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={4 === currentPage.pageNumber ? 'page active' : 'page'}>4</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={5 === currentPage.pageNumber ? 'page active' : 'page'}>5</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={6 === currentPage.pageNumber ? 'page active' : 'page'}>6</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={7 === currentPage.pageNumber ? 'page active' : 'page'}>7</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={8 === currentPage.pageNumber ? 'page active' : 'page'}>8</div>
              <div onClick={(e) => changePage(e.target.textContent)} className={9 === currentPage.pageNumber ? 'page active' : 'page'}>9</div>
            </div> 
          </>
      
        :
         <Loader/>
      }

       

    </div>
  )
}

export default Main