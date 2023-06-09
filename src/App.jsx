import {Route, Routes, } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/Home/Home"
import Blog from './components/Blog/Blog';
import CouponDeal from './components/Coupon/CouponDeal';
import E_Com from './pages/E_Com/ecom';
import Business from './components/Business/Business';


const App = () => {
  return (
  

    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Business' element={<Business/>}/>
      <Route path='/ecom' element={<E_Com/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/CouponDeal' element={<CouponDeal/>} />
    </Routes>
  )
}

export default App