import React from 'react';
import './Footer.css';
import { useAnalyticsPrivacy } from '../analytics/AnalyticsPrivacyContext';

const Footer = () => {
    const { openAnalyticsSettings } = useAnalyticsPrivacy();

    return (
        <footer className="footer">
            <p>
                <a href="https://www.linkedin.com/in/zacharyschallenberger" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <button type="button" onClick={openAnalyticsSettings}>Analytics choices</button>
            </p>
        </footer>
    );
};

export default Footer;
