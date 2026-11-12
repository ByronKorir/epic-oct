import React from 'react'
import Btn from './Btn'
import StudentCard from './StudentCard'

import image from "../assets/hero.png"

export default function Greeting() {
  return (
    <div>
        <h1>Greets! Welcome to today's session</h1>
        <StudentCard name="Jane">
            <p>This is My first session/app</p>
            <img src={image} alt='Profile'/>
        </StudentCard>
        <div className='d-flex gap-5 m-6'>
            <Btn text={"Hello"}/>
            <Btn text={"Proceed to Login"}/>
        </div>
    </div>
  )
}
