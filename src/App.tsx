import { useState } from 'react'

import './App.css'
import Main from './components/Main/Main'
import { Link, Route, Routes } from 'react-router-dom'
import Person from './components/Person/Person'

function App() {

  return (
    <>
      <Link to='/' className='header'>
        Star Wars
        <p>the website of the characters</p>  
      </Link>

      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/person' element={<Person/>} />
      </Routes>
    </>
  )
}

export default App
