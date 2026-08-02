import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';

const HEADER_PROFILES = {
    home: {
        image: '/images/zach_closeup_circ-240.jpg',
        imageAlt: 'Zachary Schallenberger',
        name: 'Zachary Schallenberger',
        titles: ['Software Engineer', 'Ford Influencer'],
    },
    music: {
        image: '/images/zapps_closeup-240.png',
        imageAlt: 'Zapps',
        name: 'Zapps',
        titles: ['Music Producer'],
    },
    notFound: {
        image: '/images/zach_closeup_sad.png',
        imageAlt: 'Zachary Schallenberger',
        name: 'Zachary Schallenberger',
        titles: ['Software Engineer', 'Ford Influencer'],
    },
};

const Header = () => {
    const location = useLocation();
    const isMobile = useIsMobile();
    const activeLink = location.pathname === '/Zapps'
        ? 'music'
        : location.pathname === '/' ? 'home' : 'notFound';

    const profile = HEADER_PROFILES[activeLink];

    return (
        <header className="header">
            <div className="header-content">
                <div className={!isMobile ? 'headshot-container' : 'headshot-container-mobile'}>
                    <img
                        src={profile.image}
                        alt={profile.imageAlt}
                        className="headshot"
                        width="120"
                        height="120"
                    />
                </div>

                {/* Header Text */}
                <div className="header-text">
                    <h1>{profile.name}</h1>
                    {profile.titles.map((title) => <p key={title}>{title}</p>)}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation">
                {activeLink !== "home" && (
                    <Link to="/" className="portfolio-button">
                        <span className="portfolio-text">💼 Professional Portfolio 💻</span>
                    </Link>
                )}
                {activeLink !== "music" && (
                    <Link to="/Zapps" className="music-button">
                        <span className="music-text">🎵 Explore My Music 🎶</span>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
