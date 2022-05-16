import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Home from './Components/Home'
import {Routes,Route} from "react-router-dom"
import Result from './Components/Result'

function App() {
 

  return (
    <div className="App">
  

     <Routes>
     <Route path='/' element={<Home/>}></Route>
       <Route path='/result' element={<Result/>}></Route>
     </Routes>


    </div>
  )
}

export default App
