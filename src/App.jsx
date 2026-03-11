import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import Homepage from './pages/Homepage';
import Products from './pages/Products';
import About from './pages/About';
import DefaultLayout from './layouts/DefaultLayout';



function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/About' element={<About/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
