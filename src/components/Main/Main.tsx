import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './Main.css'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
const Main = ({setPersonInfo}) => {

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

  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageInfo, setCurrentPageInfo] = useState<any[]>([])
  useEffect(() => {
    let active = true
    const getInfo = async() => {
      const [newPage] = allLinks.filter(page => page.pageNumber === currentPage)
      const res = await fetch(newPage.link)
      const data = await res.json()
      if(active) setCurrentPageInfo(data.results)
    }
    getInfo()
    //console.log('getNewInfo')
    return ()=>{
      active = false
    }
  }, [currentPage])

  const [isLoading, setLoading] = useState(false)
  const changePage = (num: number) => {
    //console.log('changePAge')
    if(num !== currentPage) {
      setCurrentPage(num)
      setLoading(true)
    }
    return
  }
  useEffect(() => {
    setLoading(false)
    //console.log('updateLoading')
  }, [currentPageInfo])

  return (
    <div className='main-page'>
        
        {currentPageInfo.length ? 
          <>
            {isLoading ? <Loader/>
              :<div className='cards-wrapper' >
                  {currentPageInfo.map((character) => 
                    <Card setPersonInfo={setPersonInfo} character={character} key={character.created} name={character.name} birth={character.birth_year} gender={character.gender} />
                  )}
                </div>
            }
            

            <div className='pagination'>
              <div onClick={()=>changePage(1)} className={1 === currentPage ? 'page active' : 'page'}>1</div>
              <div onClick={()=>changePage(2)} className={2 === currentPage ? 'page active' : 'page'}>2</div>
              <div onClick={()=>changePage(3)}  className={3 === currentPage ? 'page active' : 'page'}>3</div>
              <div onClick={()=>changePage(4)}  className={4 === currentPage ? 'page active' : 'page'}>4</div>
              <div onClick={()=>changePage(5)}  className={5 === currentPage ? 'page active' : 'page'}>5</div>
              <div onClick={()=>changePage(6)}  className={6 === currentPage ? 'page active' : 'page'}>6</div>
              <div onClick={()=>changePage(7)}  className={7 === currentPage ? 'page active' : 'page'}>7</div>
              <div onClick={()=>changePage(8)}  className={8 === currentPage ? 'page active' : 'page'}>8</div>
              <div onClick={()=>changePage(9)}  className={9 === currentPage ? 'page active' : 'page'}>9</div>
            </div> 
          </>
      
        :
         <Loader/>
      }

    </div>

  )
}

export default Main