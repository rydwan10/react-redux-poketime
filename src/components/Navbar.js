import React from 'react';
// eslint-disable-next-line
import { Link, NavLink, withRouter } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-1">
            <div className="container">
                <a href="/" className="brand-logo left">Poke'Times</a>
                <ul className="right" id="nav-mobile">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to='/add_post'>Add Post</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
