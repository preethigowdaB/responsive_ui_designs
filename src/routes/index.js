import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"
import TheBox from '../modules/thebox/theBox'




const Index = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<TheBox/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default Index