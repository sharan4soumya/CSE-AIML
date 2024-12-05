import React from 'react'
import { useState } from 'react';
const State = () => {
    const [color, setColor] = useState("black");
  return (
    <div style={{ textAlign: "center", marginTop: "20px"}}>
        <h1 style={{color}}>My favorite color is ${color}</h1>
        <div>
           
        </div>
      
    </div>
  )
}

export default State
