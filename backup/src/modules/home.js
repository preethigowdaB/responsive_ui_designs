import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();

  return (
    <div>
<button onClick={()=>{
    navigate("/")
}}>
    Preethi
</button>
<button onClick={()=>{
    navigate("/")
}}>
 Umar
</button>
<button onClick={()=>{
    navigate("/")
}}>
   Moksha
</button>
    </div>
  )
}

export default Home