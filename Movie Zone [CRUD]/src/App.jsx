import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AddMovie } from './component/AddMovie'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { MovieList } from './component/MovieList'
import Edit from './component/Edit'

function App() {

  return (
    <>
      <Routes>
        <Route path='/add' element ={<AddMovie />} />
        <Route path = "/" element = {<MovieList/>} />
        <Route path='/edit/:id' element= {<Edit/>} />
      </Routes>     
    </>
  )
}

export default App
