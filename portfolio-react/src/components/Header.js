import React, {useState, useEffect} from 'react';
import './Header.css';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        if (location.pathname === "/Zapps") {
            setActiveLink("music");
        } else {
            setActiveLink("home");
        }
    }, [location.pathname]);

    return (
        <header className="header">
            <h1 id={"headerName"}>Zachary Schallenberger</h1>
            <p id={"title"}>Software Engineer</p>
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
                            <span className="music-text" >🎵 Explore My Music 🎶</span>
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
