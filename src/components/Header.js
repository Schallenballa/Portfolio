import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("home");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isLoading, setIsLoading] = useState(false); // Default to no loading for "/" route

    // Handle responsive design
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update active link and conditionally trigger skeleton
    useEffect(() => {
        if (location.pathname === "/Zapps") {
            setIsLoading(true); // Show skeleton for "/Zapps" route
            const timeout = setTimeout(() => {
                setActiveLink("music");
                setIsLoading(false); // Hide skeleton after 0.5 seconds
            }, 500);
            return () => clearTimeout(timeout); // Cleanup timeout
        } else if(location.pathname === "/") {
            setActiveLink("home");
            setIsLoading(false); // No skeleton for "/" route
        }
        else {
            setActiveLink("notFound");
            setIsLoading(false);
        }
    }, [location.pathname]);

    // Image load handler (only applies to "/Zapps")
    const handleImageLoad = () => {
        if (activeLink === "music") {
            setTimeout(() => setIsLoading(false), 500); // Ensure skeleton is shown for 0.5 seconds
        }
    };

    const handleImageSelect = () => {
        if (activeLink === "home") {
            return (
                <img
                    src={"/images/zach_closeup_circ.png"}
                    alt="Zachary Schallenberger"
                    className={`headshot ${isLoading ? 'hidden' : ''}`}
                    width="120px"
                    onLoad={handleImageLoad}
                />
            )
        }
        else if (activeLink === "music") {
            return (
                <img
                    src={"/images/zapps_closeup.png"}
                    alt="Zachary Schallenberger"
                    className={`headshot ${isLoading ? 'hidden' : ''}`}
                    width="120px"
                    onLoad={handleImageLoad}
                />
            )
        }
        else {
            return (
                <img
                    src={"/images/zach_closeup_sad.png"}
                    alt="Zachary Schallenberger"
                    className={`headshot ${isLoading ? 'hidden' : ''}`}
                    width="120px"
                    onLoad={handleImageLoad}
                />
            )
        }
    }


    return (
        <header className="header">
            <div className="header-content">
                {/* Headshot with Skeleton (only for "/Zapps") */}
                <div className={!isMobile ? 'headshot-container' : 'headshot-container-mobile'}>
                    {isLoading && activeLink === "music" && (
                        <Skeleton variant="circular" width={120} height={120} />
                    )}
                    {handleImageSelect()}
                </div>

                {/* Header Text */}
                <div className="header-text">
                    <h1 id="headerName">Zachary Schallenberger</h1>
                    <p id="title">Software Engineer</p>
                    <p id="title">Ford Influencer</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation">
                {activeLink !== "home" && (
                    <Link to="/">
                        <button className="portfolio-button" onClick={() => setActiveLink("home")}>
                            <span className="portfolio-text">💼 Professional Portfolio 💻</span>
                        </button>
                    </Link>
                )}
                {activeLink !== "music" && (
                    <Link to="/Zapps">
                        <button className="music-button" onClick={() => setActiveLink("music")}>
                            <span className="music-text">🎵 Explore My Music 🎶</span>
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
