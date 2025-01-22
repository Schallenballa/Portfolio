import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Zachary Schallenberger</h1>
                <p>Software Engineer | Ford Motor Company</p>
            </header>
            <section>
                <h2>Professional Experience</h2>
                <p>Check out my most recent and professional experience</p>
            </section>
            <CompanyLogos />
            <hr />
            <section>
                <h2>Academic Experience</h2>
                <p>See my academic achievements</p>
            </section>
        </div>
    );
}

const CompanyLogos = () => {
    return (
        <div className="box">
            <div className="logo-container">
                <Link to="/ford" className="logo-link">
                    <img src="/images/ford.webp" alt="Ford Motor Company Logo" className={"logo"} />
                </Link>
                <Link to="/bmw" className="logo-link">
                    <img src="/images/BMW.png" alt="BMW Logo" className={"logo"} />
                </Link>
                <Link to="/tyler-tech" className="logo-link">
                    <img src="/images/tyler-tech.png" alt="Tyler Technologies Logo" className={"logo"} />
                </Link>
                <Link to="/nsf" className="logo-link">
                    <img src="/images/nsf.webp" alt="NSF Logo" className={"logo"} />
                </Link>
            </div>
        </div>
    );
};

const EducationalLogos = () => {
    return (
        <div className="box">
            <div className="logo-container">
                <Link to="/ford" className="logo-link">
                    <img src="/images" alt="Ford Motor Company Logo" className={"logo"} />
                </Link>
                <Link to="/bmw" className="logo-link">
                    <img src="/images/BMW.png" alt="BMW Logo" className={"logo"} />
                </Link>
                <Link to="/tyler-tech" className="logo-link">
                    <img src="/images/tyler-tech.png" alt="Tyler Technologies Logo" className={"logo"} />
                </Link>
                <Link to="/nsf" className="logo-link">
                    <img src="/images/nsf.webp" alt="NSF Logo" className={"logo"} />
                </Link>
            </div>
        </div>
    );
};

export default Home;