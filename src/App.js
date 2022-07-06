import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import EachCountry from './Pages/EachCountry'
import Error from './Pages/Error'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:name' element={<EachCountry />}>
              <Route path=':Cname' element={<EachCountry />} />
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default App