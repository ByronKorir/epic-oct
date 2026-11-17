import React, { useState } from 'react'

export default function Counter() {
    // state variable 
    const [count, setCount] = useState(0)

  return (
    <div>
        <h4>Counter: {count}</h4>
        <div className='d-flex gap-3 justify-content-center'>
            <button
            onClick={() => setCount(count + 1)}
             className="btn btn-primary"
            >
                +
            </button>
            <button
            onClick={() => setCount(count - 1)}
             className="btn btn-warning"
            >
                -
            </button>
        </div>
    </div>
  )
}
