import React from 'react'

export default function StudentCard({name, children}) {
  return (
    <div>
        <h2>{name}</h2>
        <div>
            {children}
        </div>
    </div>
  )
}
