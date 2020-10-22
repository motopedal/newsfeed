import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return <div className="navbar">
    <p>NAVBAR</p>
    <p className="link">
      <Link  className="a" to="/">
        Home
      </Link>
    </p>
  </div>
}

export default Navbar;