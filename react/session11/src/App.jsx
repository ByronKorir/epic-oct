import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ToggleDetail from './components/ToggleDetail'
import LikeButton from './components/LikeButton'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([
    {id:1,text:"Revise useState variable", done:false},
    {id:2,text:"Practice array method", done:true},
  ])


   function onDelete(id){
       //filter out the id
       setTodos(todos.filter((t) => t.id !== id))
    }

    function toggleTodo(id){
      // get by id  
      // spread operator
      setTodos(todos.map((t) => (t.id === id ? {...t, done:!t.done }: t)))
    }

    function addTodo(text){
      const newTodo = {id:Date.now(),text:text,done:false}
      console.log(newTodo)
      // spread operator
      setTodos([...todos,newTodo])
    }

  return (
    <div id='app' className='bg-secondary bg-opacity-25 p-6'>
      <h1> Session 11</h1>
      {/* TODO LIST  */}
      <h2>TODO LIST</h2>
      <TodoList 
      onDelete={onDelete}
      todos={todos}
      toggleTodo={toggleTodo}
      />
      <hr/>
      <AddTodo onAdd={addTodo}/>



      <div className='my-6'>
        <hr/>
      </div>
      <Counter/>
      <div className='my-6'>
        <hr/>
      </div>
      <ToggleDetail/>

      <div className='my-6'>
        <hr/>
      </div>
      <LikeButton/>
    </div>
  )
}

export default App
