import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Email: zach.schallenberger@example.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/zacharyschallenberger" target="_blank" rel="noopener noreferrer">linkedin.com/in/zacharyschallenberger</a></p>
            <p>Portfolio: <a href="https://www.zacharyschallenberger.com" target="_blank" rel="noopener noreferrer">www.zacharyschallenberger.com</a></p>
        </div>
    );
}

export default Contact;