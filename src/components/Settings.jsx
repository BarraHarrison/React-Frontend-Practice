import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faPalette, faShieldAlt, faQuestionCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Settings.css'

const Settings = () => {
    const [activeTab, setActiveTab] = useState('Account');

    const tabs = [
        { name: 'Account', icon: faUser },
        { name: 'Notifications', icon: faBell },
        { name: 'Appearance', icon: faPalette },
        { name: 'Privacy & Security', icon: faShieldAlt },
        { name: 'Help and Support', icon: faQuestionCircle },
        { name: 'About', icon: faInfoCircle }
    ];

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="settings-content">
                <div className="settings-tabs">
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            <FontAwesomeIcon icon={tab.icon} />
                            <span>{tab.name}</span>
                        </div>
                    ))}
                </div>
                <div className="settings-panel">
                    <h2>{activeTab}</h2>
                    {/* Content for each tab will go here */}
                    <p>This is the {activeTab} settings panel.</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
