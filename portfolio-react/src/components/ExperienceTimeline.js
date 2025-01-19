import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector} from '@mui/lab';
import './ExperienceTimeline.css';
import FordLogo from "../assets/icons/FordLogo";

const ExperienceTimeline = () => {
    return (
        <section className="experience-timeline">
            <h2>Experience</h2>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <FordLogo />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Software Engineer - Ford Motor Company</h3>
                        <p>March 2023 - Present</p>
                        <ul>
                            <li>Developed and maintained software for automotive systems.</li>
                            <li>Collaborated with cross-functional teams to implement solutions.</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            {/*<FaLinkedin size={24} />*/}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Junior Developer - XYZ Corp</h3>
                        <p>June 2021 - February 2023</p>
                        <ul>
                            <li>Built web applications and APIs using React and Node.js.</li>
                            <li>Worked with product teams to understand client needs and improve applications.</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            {/*<FaTwitter size={24} />*/}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Intern - ABC Company</h3>
                        <p>May 2020 - August 2020</p>
                        <ul>
                            <li>Assisted in developing front-end features for the company's e-commerce platform.</li>
                            <li>Gained experience working with HTML, CSS, and JavaScript.</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </section>
    );
};

export default ExperienceTimeline;
