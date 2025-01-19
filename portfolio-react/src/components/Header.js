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
                    <Link to="/" onClick={() => setActiveLink("home")}>Home</Link>
                )}
                {activeLink !== "music" && (
                    <Link to="/Zapps" onClick={() => setActiveLink("music")}>Music</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
