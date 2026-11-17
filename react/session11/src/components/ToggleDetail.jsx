import React, { useState } from 'react'

export default function ToggleDetail() {

    const [show, setShow] = useState(true)
  return (
    <div className='m-4'>
        <h5>ToggleDetail</h5>
        <button
        onClick = {()=> setShow(!show)}
         className='btn btn-info'>
            {show ? "Hide Details" : "Show Details"}
        </button>

       {show &&  <p className='m-3'>Here are the details you asked for</p> }
    </div>
  )
}
