import React, { useState } from 'react';
import './Bookmarks.css';

// Import images
import business1 from '../assets/business-image-1.webp';
import business2 from '../assets/business-image-2.png';
import business3 from '../assets/business-image-3.png';
import business4 from '../assets/business-image-4.avif';
import business5 from '../assets/business-image-5.png';

// Sample bookmarked businesses with images
const bookmarkedBusinesses = [
    {
        id: 1,
        name: "Tech Innovators Inc.",
        image: business1,
        employees: "100-500",
        sector: "Technology",
        location: "San Francisco, CA",
        description: "A cutting-edge tech company focused on AI and machine learning solutions."
    },
    {
        id: 2,
        name: "Green Energy Solutions",
        image: business2,
        employees: "50-100",
        sector: "Renewable Energy",
        location: "Austin, TX",
        description: "Pioneering sustainable energy solutions for a greener future."
    },
    {
        id: 3,
        name: "HealthTech Dynamics",
        image: business3,
        employees: "200-1000",
        sector: "Healthcare Technology",
        location: "Boston, MA",
        description: "Revolutionizing healthcare with innovative digital solutions and telemedicine platforms."
    },
    {
        id: 4,
        name: "FinTech Frontier",
        image: business4,
        employees: "100-500",
        sector: "Financial Technology",
        location: "New York, NY",
        description: "Transforming financial services with blockchain and AI-driven solutions."
    },
    {
        id: 5,
        name: "EcoFriendly Packaging",
        image: business5,
        employees: "20-50",
        sector: "Sustainable Manufacturing",
        location: "Portland, OR",
        description: "Creating innovative, biodegradable packaging solutions for a sustainable future."
    }
];

const Bookmarks = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBusiness = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bookmarkedBusinesses.length);
    };

    const currentBusiness = bookmarkedBusinesses[currentIndex];

    return (
        <div className="bookmarks-explorer">
            <h1>Your Bookmarks</h1>
            <div className="business-content">
                <div className="business-card">
                    <img src={currentBusiness.image} alt={currentBusiness.name} />
                </div>
                <div className="business-bio">
                    <h2>{currentBusiness.name}</h2>
                    <p><strong>Employees:</strong> {currentBusiness.employees}</p>
                    <p><strong>Sector:</strong> {currentBusiness.sector}</p>
                    <p><strong>Location:</strong> {currentBusiness.location}</p>
                    <p>{currentBusiness.description}</p>
                </div>
            </div>
            <button onClick={nextBusiness} className="next-button">Next Bookmark</button>
        </div>
    );
};

export default Bookmarks;