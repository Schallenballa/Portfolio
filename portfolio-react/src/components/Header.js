import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("home");
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (location.pathname === "/Zapps") {
            setActiveLink("music");
        } else {
            setActiveLink("home");
        }
    }, [location.pathname]);

    return (
        <header className="header">
            <div className="header-content">
                <div className={!isMobile ? 'headshot-container' : 'headshot-container-mobile'}>
                    <img src={(activeLink==='home') ? "/images/zach_closeup_circ.png" : "/images/zapps_closeup.png"} alt="Zachary Schallenberger" className="headshot" width={'120px'}/>
                </div>

                <div className="header-text">
                    <h1 id="headerName">Zachary Schallenberger</h1>
                    <p id="title">Software Engineer</p>
                </div>
            </div>

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
