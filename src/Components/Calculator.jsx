import React from 'react'
import './calculator.css'
import Buttons from './Buttons'
function Calculator({arr, value, setValue, handleClick}) {
  return (
   <>
   <div className="calc">
    <h1>Calculator</h1>
    <input type="text" value={value} onKeyDown={(e) => { e.preventDefault(); }} readOnly />
    <Buttons  arr={arr} value={value} setValue={setValue} handleClick={handleClick}/>
    </div>
   </>
  )
}

export default Calculator
