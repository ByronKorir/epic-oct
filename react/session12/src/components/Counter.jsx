import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

useEffect(() => {
  document.title = `Count: ${count}`
}, [count]) //dependencies blank -run once onload



  return (
    <div className='p-6'>
        <h3>Count: {count}</h3>
        <div className='d-flex gap-4 justify-content-center'>
            <button onClick={()=> setCount(count + 1)} className='btn btn-primary'>+</button>
            <button onClick={()=> setCount(count - 1)} className='btn btn-warning'>-</button>
            <button onClick={()=> setCount(0)} className='btn btn-info'>Reset</button>
            
        </div>
    </div>
  )
}
