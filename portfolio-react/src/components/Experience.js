import React from 'react';
import './Experience.css';
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
    return (
        <section className="experience">
            <ExperienceTimeline /> {/* Use the Timeline component */}
            <h2>Experience</h2>
            <div className="job">
                <h3>Software Engineer - Ford Motor Company</h3>
                <p>March 2023 - Present</p>
                <ul>
                    <li>Developed and maintained software for automotive systems.</li>
                    <li>Collaborated with cross-functional teams to implement solutions.</li>
                </ul>
            </div>
            <div className="job">
                <h3>Junior Developer - XYZ Corp</h3>
                <p>June 2021 - February 2023</p>
                <ul>
                    <li>Built web applications and APIs using React and Node.js.</li>
                    <li>Worked with product teams to understand client needs and improve applications.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
