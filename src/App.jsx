// import {route,routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import Home from "../pages/Home/Home"


const App = () => {
  return (
    <Router>

      <Home/>
    </Router>
  )
}

export default App