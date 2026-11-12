import React from 'react'
import './Btn.css'
export default function Btn({text = "Test"}) {

function displayText(){
  alert(`${text}`)
  // console.log(text)
}

  return (
    <div>
        <button id="Btn" onClick={() => displayText() } type="button" className="theme-primary btn-solid btn-styled">
           {text}
        </button>
    </div>
  )
}
