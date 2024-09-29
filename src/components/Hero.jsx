import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-content">
                <h1>Connect with Business Professionals</h1>
                <p>Find your business partner, mentor or collaboration opportunity.</p>
                <Link to="/explore" className="cta-button">Explore Opportunities</Link>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Business Networking" />
            </div>
        </section>
    )
}

export default Hero;