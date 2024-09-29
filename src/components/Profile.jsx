import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return (
        <div className='profile-container' ref={dropdownRef}>
            <button className="profile-icon" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </button>
            {isOpen && (
                <div className={`profile-dropdown ${isOpen ? 'open' : ''}`}>
                    <Link to="/account" className='dropdown-item'>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        My Account
                    </Link>
                    <Link to="/bookmarks" className='dropdown-item'>
                        <FontAwesomeIcon icon={faBookmark} />
                        Bookmarks
                    </Link>
                    <Link to="/settings" className='dropdown-item'>
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                        Settings
                    </Link>
                    <Link to="/logout" className='dropdown-item'>
                        <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Profile;