import React from 'react'

export default function Navbar() {
  return (
    <div style={{backgroundColor:'blue',display:'flex',margin:'10px'}}>
        <h1 >MY APP</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Blogs</li>
            </ul>
        </nav>
    </div>
  )
}
