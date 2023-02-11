import React from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Nav from './Components/Navbar/Nav.js'
import Home from './Components/Home/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App=()=>{


  return(
   <>
     <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;
