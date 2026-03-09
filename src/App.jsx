import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
