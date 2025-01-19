import React from 'react';
import './Experience.css';
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
    return (
        <section className="experience">
            <ExperienceTimeline /> {/* Use the Timeline component */}
        </section>
    );
};

export default Experience;
