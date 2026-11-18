import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [seconds, setSeconds] = useState(5)

    function sendMessage(){
        //
        console.log("Message sent")
    }
useEffect(() => {
  const id = setInterval(() => {
    setSeconds((s)=> s > 0 ? s - 1 : s)
  }, 1000);
  //cleanup
  return () => clearInterval(id);
}, [])

useEffect(() => {
  if(seconds === 0){
    sendMessage()
  }
}, [seconds])




  return (
    <div>
        <p>Elapse: {seconds}</p>
    </div>
  )
}
