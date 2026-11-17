import React from 'react'

export default function TodoList({todos, onDelete,toggleTodo}) { // props can be variable,functions

    if (todos.length === 0){
        return <p>No tasks Yet</p>
    }

   

  return (
    <ul className='list-group'>
        {todos.map((todo) => (
            <li 
            key={todo.id}
            className='list-group-item d-flex justify-content-between align-items-center '
            >
                <span 
                role ="button"
                onClick={()=> toggleTodo(todo.id)}
                className={todo.done ? "text-decoration-line-through":''}
                >{todo.text}
                </span>
                <button
                onClick={()=> onDelete(todo.id)}
                className='btn btn-outline-danger btn-sm'
                >Delete
                </button>
            </li>
        ))}
    </ul>
  )
}
