import {Route, Routes, } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Blog from './components/Blog/Blog';
import CouponDeal from './components/Coupon/CouponDeal';
import E_Com from './pages/E_Com/ecom';
import Business from './components/Business/Business';
import ContactUs from './pages/ContactUs';

import Dating from './components/Dating/Dating';
import Privacy from './components/Privacy/Privacy';
import Term from './components/TermCondition/Term';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutUs from './components/AboutUs/AboutUs';
import GetInTouch from './pages/GetInTouch';
// import TeamMembers from './components/TeamMembers/TeamMembers';
// import AboutUs from './components/AboutUS/AboutUs';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Business' element={<Business/>}/>
      <Route path='/ecom' element={<E_Com/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/CouponDeal' element={<CouponDeal/>} />
      <Route path='/ContactUs' element={<ContactUs/>} />
      <Route path='/Portfolio' element={<Portfolio/>} />
      <Route path='/Dating' element={<Dating/>} />
      <Route path='/Privacy' element={<Privacy/>} />
      <Route path='/Term' element={<Term/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/GetInTouch' element={<GetInTouch/>} />
    </Routes>
  )
}

export default App