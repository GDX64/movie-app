import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navBar.css'

function NavBar() {

    return <nav className='black'>
        <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">Home</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/signUp">Sign Up</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </div>
    </nav>
}

export default NavBar