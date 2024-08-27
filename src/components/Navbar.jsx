import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/productdetails">product detaisl</NavLink>
    </div>
  )
}

export default Navbar