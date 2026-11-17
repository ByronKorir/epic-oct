import React, { useState } from 'react'
import '../App.css'

export default function AddTodo({onAdd}) {
    const [text, setText] = useState("")
    const [error, setError] = useState("")
    // console.log(text)
    function handleSubmit(e){
        e.preventDefault() //frevents refreshing when this function is called
        
        
        if (!text.trim()){
            // error message 
            setError("No text")
            return;
        }
        setError("")
        onAdd(text.trim())
        setText("")
    }



  return (
    <div id="add-todo" className='mx-auto'>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder='Add todo' className="form-control" id="todo" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {error && <div className='alert alert-danger' >{error}</div>}
        </form>
    </div>
  )
}
