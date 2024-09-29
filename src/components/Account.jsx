import React from 'react';
import './Account.css';
import ProfileImage from '../assets/profile-image.jpg'

const Account = () => {
    return (
        <div className="accountcontainer">
            <div className="account-content">
                <div className="profile-card">
                    <img src={ProfileImage} className='profile-image' alt="Profile" />
                    <div className="profile-actions">
                        {/* Add profile actions here */}
                    </div>
                </div>
                <div className="profile-bio">
                    <h2>John Doe</h2>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Location:</strong> New York, NY</p>
                    <p><strong>Interests:</strong> Technology, Business, Innovation</p>
                    <p>
                        John is a passionate entrepreneur with a keen interest in emerging technologies.
                        He has been in the tech industry for over a decade and is always looking
                        for new opportunities to innovate and grow.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;