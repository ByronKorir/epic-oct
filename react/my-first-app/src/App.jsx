import React from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Btn from './components/Btn'
import Navbar from './components/Navbar'

export default function App() {

  const myName = "Byron Kipkurui"
  const names = ['Gathoni','Nelson','Celine','Byron']



  return (
    <div className='bg-secondary bg-opacity-50'>
      <Navbar/>
      <Btn text={"Login from App.jsx"}/>
      <h1>My first app</h1>

      <div>
        <h4>List of Students</h4>
        {names.map((name,index) => 
        <p>{index + 1}. {name}</p>)}

        <ol>
          {names.map((n) => 
          <li>{n}</li>)}
        </ol>

      </div>

      <Greeting/>
      {/* <Greeting/> */}
    </div>
  )
}
