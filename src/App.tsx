import { useState } from 'react'

import './App.css'
import Main from './components/Main/Main'
import { Link, Route, Routes } from 'react-router-dom'
import Person from './components/Person/Person'

function App() {
  
  const [personInfo, setPersonInfo] = useState()

  return (
    <>
      <Link to='/' className='header'>
        Star Wars
        <p>the website of the characters</p>  
      </Link>

      <Routes>
        <Route path='/' element={<Main setPersonInfo={setPersonInfo} />} />
        <Route path='/person' element={<Person personInfo={personInfo} />} />
      </Routes>
    </>
  )
}

export default App
