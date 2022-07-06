import React from 'react'

import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import EachCountry from './Pages/EachCountry'

export const App = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:name' element={<EachCountry />}>
              <Route path=':Cname' element={<EachCountry />} />
            </Route>
            
        </Routes>
    </HashRouter>
  )
}

export default App