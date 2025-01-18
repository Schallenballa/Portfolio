import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Z | S</h2>
            <div className="nav-links">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;