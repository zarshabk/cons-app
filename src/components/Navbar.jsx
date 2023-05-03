import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='container nav'>
              <div className='logo'>
                <h2>Attend&Com</h2>
              </div>
              <div className='list'>
                   <ul>
                       <li>
                           <NavLink to={'/'}>Home</NavLink>
                           <NavLink to={'/courses'}>Courses</NavLink>
                           <NavLink to={'/about'}>About Us</NavLink>
                           <NavLink to={'register'}>SignUp</NavLink>
                           <NavLink to={'login'}>SignIn</NavLink>
                       </li>
                   </ul>
              </div>
        </div>
    </header>
  )
}

export default Navbar