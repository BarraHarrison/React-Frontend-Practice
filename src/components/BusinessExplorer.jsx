import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import './BusinessExplorer.css';

import business1 from '../assets/business-image-1.webp';
import business2 from '../assets/business-image-2.png';
import business3 from '../assets/business-image-3.png';
import business4 from '../assets/business-image-4.avif';
import business5 from '../assets/business-image-5.png';

const businesses = [
    {
        id: 1,
        image: business1,
        name: "TechInnovate Solutions",
        employees: "250-500",
        sector: "Information Technology",
        location: "San Francisco, CA",
        description: "TechInnovate Solutions is a leading software development company specializing in AI and machine learning applications. We're dedicated to creating cutting-edge solutions that transform businesses and improve lives."
    },
    {
        id: 2,
        image: business2,
        name: "Green Energy Solutions",
        employees: "100-250",
        sector: "Renewable Energy",
        location: "Austin, TX",
        description: "Green Energy Solutions is a renewable energy provider focused on solar and wind power solutions. We're committed to sustainability and reducing carbon emissions."
    },
    {
        id: 3,
        image: business3,
        name: "BioMed Innovations",
        employees: "50-100",
        sector: "Biotechnology",
        location: "Boston, MA",
        description: "BioMed Innovations is a biotech company developing innovative medical treatments and therapies. We're dedicated to improving human health and well-being."
    },
    {
        id: 4,
        image: business4,
        name: "Creative Design Studio",
        employees: "25-50",
        sector: "Creative Services",
        location: "New York, NY",
        description: "Creative Design Studio is a full-service design agency specializing in branding, graphic design, and web development. We help businesses create compelling visual identities that resonate with their audience."
    },
    {
        id: 5,
        image: business5,
        name: "Eco-Friendly Products",
        employees: "50-100",
        sector: "E-commerce",
        location: "Seattle, WA",
        description: "Eco-Friendly Products is an online retailer offering a wide range of sustainable and eco-conscious products. We're committed to environmental responsibility and providing high-quality, ethical choices."
    }
];

const BusinessExplorer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLike = () => {
        console.log(`Liked ${businesses[currentIndex].name}`);
        nextBusiness();
    };

    const handleDislike = () => {
        console.log(`Disliked ${businesses[currentIndex].name}`);
        nextBusiness();
    };

    const nextBusiness = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % businesses.length);
    };

    const currentBusiness = businesses[currentIndex];

    return (
        <div className="business-explorer">
            <div className="business-content">
                <div className="business-card">
                    <img src={currentBusiness.image} alt={currentBusiness.name} />
                    <div className="business-actions">
                        <button onClick={handleDislike} className="action-button dislike">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <button onClick={handleLike} className="action-button like">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                    </div>
                </div>
                <div className="business-bio">
                    <h2>{currentBusiness.name}</h2>
                    <p><strong>Employees:</strong> {currentBusiness.employees}</p>
                    <p><strong>Sector:</strong> {currentBusiness.sector}</p>
                    <p><strong>Location:</strong> {currentBusiness.location}</p>
                    <p>{currentBusiness.description}</p>
                </div>
            </div>
        </div>
    );
};


export default BusinessExplorer;