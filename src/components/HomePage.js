import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import React from "react";
import {Helmet} from "react-helmet";

function HomePage() {
    const description = "Zachary Schallenberger is a Michigan-based software engineer, entrepreneur, and MBA candidate. Explore his experience, education, and technical skills.";
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Zachary Schallenberger",
        url: "https://www.zacharyschallenberger.com/",
        image: "https://www.zacharyschallenberger.com/images/zach_schallenberger_og.png",
        jobTitle: "Software Engineer",
        sameAs: ["https://www.linkedin.com/in/zacharyschallenberger"],
        alumniOf: [
            {"@type": "CollegeOrUniversity", name: "Montana State University"},
            {"@type": "CollegeOrUniversity", name: "University of Michigan-Dearborn"}
        ]
    };

    return (
        <>
            <Helmet>
                <title>Zachary Schallenberger | Software Engineer & Entrepreneur</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://www.zacharyschallenberger.com/" />
                <meta property="og:title" content="Zachary Schallenberger | Software Engineer & Entrepreneur" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={'https://www.zacharyschallenberger.com/'} />
                <meta property="og:site_name" content="Zachary Schallenberger" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zachary Schallenberger | Software Engineer & Entrepreneur" />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
            </Helmet>
            <Experience />
            <Education />
            <Skills />
        </>
    );
}

export default HomePage;
