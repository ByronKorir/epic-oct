import React, { useEffect, useState, useParams } from 'react'
import { Link } from 'react-router-dom'
//the 3-state pattern

export default function UserList() {
    const [users, setUsers]= useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")


    // fetching inside useEffect 
    useEffect(() => {
      async function loadUsers(){
        try {
            //codes as long as no error the process
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
            const data = await res.json() // converting json string to array/object 
            console.log(data)
            setUsers(data)
        } catch (error) {
            // handle caught error
            console.error(error.message)
        } finally {
            // runs no matter
            setLoading(false)
        }
      }
      loadUsers()
    }, [])
    
    if(loading) return(
        <div className=''>
            <span className="badge text-danger theme-primary">
            <span className="spinner-border" aria-hidden="true"></span>
            <span role="status">Loading</span>
        </span>
        </div>
    )
    if (error) return <p className="text-danger">{error}</p>

    //visible after search
    const visible = users.filter((u)=> u.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <input 
    className='form-control mb-3'
    type='search' 
    placeholder='search by name'
    value = {search}
    onChange={(e)=> setSearch(e.target.value)}
    />
    {visible.length === 0 ? (
        <p>No user match "{search}"</p>
    ):(
    <ul className='list-group'>
        {visible.map((u,i) => (
            <li key={i} className="list-group-item" 
            >
               {i +1}. <strong>{u.name}</strong> - {u.email} <br/>
                <span>{u.company.name}</span>
                <br/>
                <Link 
                className='btn btn-success btn-sm'
                 to={`/users/${u.id}`}>View Details</Link>
            </li>
        ))}
    </ul>
    )}
    
    </>
  )
}
