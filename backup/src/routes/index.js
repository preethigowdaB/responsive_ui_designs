import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"
import LemonWares from '../modules/lemon_wares/lemon_wares'



const Index = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LemonWares/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default Index