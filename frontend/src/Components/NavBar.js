import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link to="/" className="navbar-link">
                To ROOT
            </Link>
            <Link to="people" className="navbar-link">
                People
            </Link>
            <Link to="settings" className="navbar-link">
                Settings
            </Link>
        </nav>
    )
}


export default NavBar