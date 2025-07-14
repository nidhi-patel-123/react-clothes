import React from 'react'
import { NavLink } from "react-router-dom"


function Navbar({ containerStyles }) {

  const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/collection', title: 'Collection' },
    { path: '/testimonials', title: 'Testimonial' },
    { path: 'mailto:info@outfiro.com', title: 'Contact' },
  ]
  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (

        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) => `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`}
        >
          {/* <div className='flexCenter gap-x-1'> */}
            {link.title}
          {/* </div> */}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar