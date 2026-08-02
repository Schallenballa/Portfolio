import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const activeLink = location.pathname === '/Zapps'
        ? 'music'
        : location.pathname === '/' ? 'home' : 'notFound';

    // Handle responsive design
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleImageSelect = () => {
        if (activeLink === "home") {
            return (
                <img
                    src={"/images/zach_closeup_circ-240.jpg"}
                    alt="Zachary Schallenberger"
                    className="headshot"
                    width="120"
                    height="120"
                />
            )
        }
        else if (activeLink === "music") {
            return (
                <img
                    src={"/images/zapps_closeup-240.png"}
                    alt="Zachary Schallenberger"
                    className="headshot"
                    width="120"
                    height="120"
                />
            )
        }
        else {
            return (
                <img
                    src={"/images/zach_closeup_sad.png"}
                    alt="Zachary Schallenberger"
                    className="headshot"
                    width="120"
                    height="120"
                />
            )
        }
    }


    return (
        <header className="header">
            <div className="header-content">
                <div className={!isMobile ? 'headshot-container' : 'headshot-container-mobile'}>
                    {handleImageSelect()}
                </div>

                {/* Header Text */}
                <div className="header-text">
                    <h1 id="headerName">Zachary Schallenberger</h1>
                    <p id="title">Software Engineer</p>
                    <p id="title2">Ford Influencer</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation">
                {activeLink !== "home" && (
                    <Link to="/">
                        <button className="portfolio-button">
                            <span className="portfolio-text">💼 Professional Portfolio 💻</span>
                        </button>
                    </Link>
                )}
                {activeLink !== "music" && (
                    <Link to="/Zapps">
                        <button className="music-button">
                            <span className="music-text">🎵 Explore My Music 🎶</span>
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
