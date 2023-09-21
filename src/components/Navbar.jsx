import { useState } from 'react'
import { ReactDOM } from 'react-dom/client'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
      <div className="logo">
        <NavLink to="/">#React Blog</NavLink>
      </div>
    </header>
  )
}

export default Navbar
