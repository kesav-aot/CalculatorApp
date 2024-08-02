import React from 'react'
import './Buttons.css'
function Buttons({arr, value, setValue, handleClick}) {
  return (
    <>
    <div className="functions">
    {arr.map((el, i) => {
      return (
        <button className="button" key={i} onClick={() => handleClick(el)}>{el}</button>
    )
    })
    }
    </div>
    </>
  )
}

export default Buttons
