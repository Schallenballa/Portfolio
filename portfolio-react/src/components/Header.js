import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>Zachary Schallenberger</h1>
            <p>Software Engineer | Music Producer</p>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/Zapps">Music</Link> {/* New link to the Music page */}
            </div>
            <div className="social-icons">
                <a href="https://github.com" className="icon github" target="_blank" rel="noopener noreferrer">
                    {/*<FaGithub />*/}
                </a>
                <a href="https://www.linkedin.com/in/zacharyschallenberger" className="icon linkedin" target="_blank" rel="noopener noreferrer">
                    {/*<FaLinkedin />*/}
                </a>
                <a href="https://twitter.com" className="icon twitter" target="_blank" rel="noopener noreferrer">
                    {/*<FaTwitter />*/}
                </a>
            </div>
        </header>
    );
};

export default Header;
