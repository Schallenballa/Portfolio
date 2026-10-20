import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
    TimelineOppositeContent
} from '@mui/lab';
import './ExperienceTimeline.css';
import FordLogo from "../assets/icons/FordLogo";
import BMWLogo from "../assets/icons/BMWLogo";
import FreatsLogo from "../assets/icons/FreatsLogo";
import TylerTechLogo from "../assets/icons/TylerTechLogo";
import NSFLogo from "../assets/icons/NSFLogo";
import useIsMobile from '../hooks/useIsMobile';

const ExperienceTimeline = () => {
    const isMobile = useIsMobile();
    const fordRacingHighlight = (
        <section className="ford-racing-highlight" aria-labelledby="ford-racing-heading">
            <h4 id="ford-racing-heading">Ford Racing Events</h4>
            <p className="ford-racing-summary">
                Supported Ford Racing at Petit Le Mans at Road Atlanta and the IMSA
                WeatherTech SportsCar Championship GTD Pro race at Laguna Seca.
            </p>
            <ul className="ford-racing-contributions">
                <li>
                    Supported guest operations for the Raptor Off-Road Experience: helped
                    guests into vehicles, distributed helmets and merchandise, and encouraged
                    waiver completion and post-event survey participation.
                </li>
                <li>
                    Engaged Mustang and Raptor owners in the Mustang Owners&apos; Corral,
                    helping create a welcoming, memorable experience while working directly
                    with guests, sponsors, and Ford Racing staff.
                </li>
                <li>
                    Assisted with event setup and teardown, including tents and signage;
                    shuttled guests and provided event-day support as needed.
                </li>
            </ul>
            <div className="ford-racing-gallery">
                <figure>
                    <a href="/images/PetitLeMans.JPG" target="_blank" rel="noopener noreferrer"
                       aria-label="View full photo from Petit Le Mans at Road Atlanta (opens in a new tab)">
                        <img src="/images/ford-racing-petit-le-mans.jpg"
                             alt="Zachary Schallenberger wearing Ford Racing apparel at Road Atlanta"
                             width="900" height="1200" loading="lazy" decoding="async" />
                    </a>
                    <figcaption><strong>Petit Le Mans</strong><span>Road Atlanta</span></figcaption>
                </figure>
                <figure>
                    <a href="/images/LagunaSeca.JPG" target="_blank" rel="noopener noreferrer"
                       aria-label="View full photo from Laguna Seca (opens in a new tab)">
                        <img src="/images/ford-racing-laguna-seca.jpg"
                             alt="Ford Racing group with a trophy at the IMSA event at Laguna Seca"
                             width="1600" height="1067" loading="lazy" decoding="async" />
                    </a>
                    <figcaption><strong>Laguna Seca</strong><span>IMSA WeatherTech SportsCar Championship · GTD Pro</span></figcaption>
                </figure>
            </div>
        </section>
    );

    return (
        <section className="experience-timeline">
            <h2>Experience</h2>
            <Timeline position={isMobile ? 'right' : 'alternate'}
                      sx= {{
                        '::before': {
                            content: 'none',
                        },
            }}>
                <TimelineItem className="ford-experience-item">
                    {!isMobile && <TimelineOppositeContent
                        sx={{m: '24px 0 0'}}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        <img
                            src="/images/award.jpeg"
                            alt="Ford recognition award" width="800" height="602" className="timeline-image"/>
                        <img src={"/images/zach_with_ranger.webp"}
                             alt={"Zach Schallenberger with Ford Ranger Raptor"} width="1284" height="1284" className="timeline-image"/>
                        {fordRacingHighlight}
                    </TimelineOppositeContent>}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{backgroundColor: 'transparent', boxShadow: 'none'}}
                        >
                            <FordLogo/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Software Engineer - Ford Motor Company</h3>
                        <p>Dearborn, MI</p>
                        <p>January 2022 - Present</p>
                        <p>June 2020 - August 2020 - <em>Internship</em></p>
                        <p>June 2019 - August 2019 - <em>Internship</em></p>
                        {isMobile && fordRacingHighlight}
                        <ul className={'bullet-list-head'}>
                            <li>Software Engineer for Ford Pro Tech, E-Commerce, and Safety Innovation</li>
                            <li>Design, Develop, and Engineer the web experience for <a
                                href="https://www.fordpro.com/en-us/" target="_blank"
                                rel="noopener noreferrer">Fordpro.com</a>
                            </li>
                            <li>Full-stack software engineer assisting in the development of applications for
                                running/scheduling crash tests.
                            </li>
                            <li>
                                Designed and Developed internal iOS application to create a method of securely and
                                conveniently capturing photos and videos, labeling them, and storing them within a
                                secure internal database. Awarded for design:
                            </li>
                            <li>Design and develop React application for reimagining the buying experience for customers
                                and
                                ordering their Ford vehicles online.
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    {!isMobile && <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        <a className="linkedin-post-card"
                           href="https://www.linkedin.com/posts/freats_freats-llc-was-established-in-2018-by-a-group-activity-7126257178419625986-b0Gg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACGloesBAAyDPdnkJULzyNxotIovs0lITQg"
                           target="_blank" rel="noopener noreferrer"
                           aria-label="Read the Freats LLC post on LinkedIn">
                            <div className="linkedin-post-header">
                                <img src="/images/freats-200.webp" alt="" width="56" height="56"/>
                                <div>
                                    <strong>Freats LLC</strong>
                                    <span>18 followers</span>
                                    <span>2y</span>
                                </div>
                                <span className="linkedin-wordmark" aria-hidden="true">LinkedIn</span>
                            </div>
                            <div className="linkedin-post-copy">
                                <p>Freats LLC was established in 2018 by a group of four entrepreneurial students at Montana State University-Bozeman at a Hackathon event in 2018. The invaluable experience garnered from conceptualizing and developing our product, engaging with key stakeholders, and learning how to run and operate a business will always be remembered.</p>
                                <p>Although we have each embarked on different professional courses in our lives, Freats will always serve as a cornerstone of our humble beginnings. With that being said, we are sad to announce that Freats LLC will be dissolving as a company this year. We remain grateful to everyone who accompanied us on our journey and provided unwavering support.</p>
                                <p><strong>Payton Harrison · Zachary Schallenberger · Joaquin Monterrosa · Zachary Taylor</strong></p>
                            </div>
                            <img src="/images/freats-linkedin-post.jpg"
                                 alt="Freats founders and team members from the company's history"
                                 width="1080" height="1080" className="linkedin-post-image" loading="lazy"/>
                            <span className="linkedin-post-cta">View post on LinkedIn</span>
                        </a>
                    </TimelineOppositeContent>}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{backgroundColor: 'transparent', boxShadow: 'none'}}
                        >
                            <FreatsLogo/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Co Founder - Freats, LLC</h3>
                        <p>Bozeman, MT</p>
                        <p>February 2018 - October 2023</p>
                        <ul className={'bullet-list-head'} style={{direction: !isMobile ? 'rtl' : 'ltr'}}>
                            <li>Co-Founder and Senior Front-End Developer of Freats, LLC</li>
                            <li>Designed, Developed, and Engineered the iOS application, <a
                                href="https://www.linkedin.com/company/freats/" target="_blank"
                                rel="noopener noreferrer">Freats</a>
                            </li>
                            <li>Awarded $14,000 for taking 1st place at the 2020 MSU $50k Venture Competition
                            </li>
                            <li>
                                Participant in the 2019 John Ruffatto Business Competition
                            </li>
                            <li>App inception was between a group of 3 students during a 2018 Hackathon
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    {!isMobile && <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        <img
                            src="/images/tyler_office.webp"
                            alt="Tyler Technologies office" width="1658" height="1244" className="timeline-image" loading="lazy"/>
                    </TimelineOppositeContent>}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{backgroundColor: 'transparent', boxShadow: 'none'}}
                        >
                            <TylerTechLogo/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Software Developer - Tyler Technologies</h3>
                        <p>Billings, MT</p>
                        <p>August 2020 - December 2021</p>
                        <p>May 2017 - May 2018 - <em>Internship</em></p>
                        <ul className={'bullet-list-head'}>
                            <li>
                                Developed web
                                applications to support client needs
                                and converted legacy VB6 code to C# to support newer web platforms.
                            </li>
                            <li>
                                Managed client data through CRM.
                                Upgraded client machines remotely from Tyler DNN7 to DNN9 software.
                            </li>
                            <li>
                            Designed Figma prototypes with Material Design and conducted usability testing on the prototypes.
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    {!isMobile && <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        <img
                            src="/images/technical_poster.webp"
                            alt="Research technical poster" width="2500" height="1666" className="timeline-image" loading="lazy"/>
                        <img
                            src="/images/hardware.webp"
                            alt="Research navigation hardware" width="2500" height="3333" className="timeline-image" loading="lazy"/>
                    </TimelineOppositeContent>}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{backgroundColor: 'transparent', boxShadow: 'none'}}
                        >
                            <NSFLogo/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Undergraduate Research Assistant - National Science Foundation</h3>
                        <p>Auburn, AL</p>
                        <p>May 2021 - July 2021</p>
                        <ul className={'bullet-list-head'} style={{direction: !isMobile ? 'rtl' : 'ltr'}}>
                            <li>Undergraduate research assistant at Auburn University</li>
                            <li>Autonomous UAV Navigation in a GPS-Denied Outdoor Environment Using Discontinuous Visual Contact With Fiducial Markers
                            </li>
                            <li>Research co-funded by National Science Foundation (NSF) and US Department of Defense
                            </li>
                            <li>
                                Research published in 37th edition of the Consortium for Computing Sciences Journal: <a
                                href="https://dl.acm.org/doi/abs/10.5555/3512733.3512740" target="_blank"
                                rel="noopener noreferrer">Publication</a>
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    {!isMobile && <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="left"
                        variant="body2"
                        color="text.secondary"
                    >
                        <img
                            src="/images/bmw-spartanburg-plant.jpg"
                            alt="BMW Manufacturing plant in Spartanburg, South Carolina" width="600" height="362" className="timeline-image" loading="lazy"/>
                        <img
                            src="/images/bmw-x-lineup.jpg"
                            alt="BMW X vehicle lineup" width="1200" height="400" className="timeline-image" loading="lazy"/>
                    </TimelineOppositeContent>}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{backgroundColor: 'transparent', boxShadow: 'none'}}
                        >
                            <BMWLogo/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>Customer Orientation - BMW Manufacturing, Co., LLC</h3>
                        <p>Spartanburg, SC</p>
                        <p>January 2019 - May 2019 <em>Internship</em></p>
                        <p>January 2020 - May 2020 <em>Internship</em></p>
                        <ul className={'bullet-list-head'}>
                            <li>Managed internal and external data from vehicle distribution centers around the world.
                                Generated reports and implemented macros to inject the data from vehicle manufacturing
                                into web-side interfaces
                            </li>
                            <li>Used Oracle Application Express to design, code, and build interfaces for the Quality
                                department at the manufacturing plant. Created a dashboard that linked all the
                                audit data from the shipping lanes into a filterable dashboard that displayed graphs,
                                Pareto charts, and more.
                            </li>
                            <li>Assisted and led incident and problem isolations within the manufacturing plant. This
                                entailed conducting investigations into recurring quality concerns and analyzing data to
                                determine the source of the issues
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </section>
    );
};

export default ExperienceTimeline;
