import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faUser } from '@fortawesome/free-solid-svg-icons';
import Profile from './Profile'
import './Navbar.css';

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className="navbar-content">
                <Link to="/" className='logo-link'>
                    <div className="logo">
                        <h2>CareersConnect </h2>
                        <FontAwesomeIcon icon={faBusinessTime} aria-label="Business Time Logo" />
                    </div>
                </Link>
                <div className='search-bar'>
                    <input
                        type="text"
                        placeholder='Search...'
                        aria-label="Search"
                    />
                </div>
                <Profile></Profile>
            </div>
        </header>
    );
};

export default Navbar;