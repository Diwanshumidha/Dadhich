import {Route, Routes, } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/Home/Home"
import E_Com from './pages/E_Com/ecom'


const App = () => {
  return (
  
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/ecom' element={<E_Com/>}/>
    </Routes>

    

  )
}

export default App