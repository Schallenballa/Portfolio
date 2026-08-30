import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import React from "react";
import {Helmet} from "react-helmet";

function HomePage() {
    const description = "Zachary Schallenberger is a Michigan-based software engineer, entrepreneur, MBA candidate, and electronic music producer known as Zapps.";
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Zachary Schallenberger",
        url: "https://www.zacharyschallenberger.com/",
        image: "https://www.zacharyschallenberger.com/images/zach_schallenberger_og.png",
        jobTitle: "Software Engineer",
        alternateName: "Zapps",
        sameAs: [
            "https://www.linkedin.com/in/zacharyschallenberger",
            "https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK",
            "https://music.apple.com/us/artist/zapps/1684547283",
            "https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg"
        ],
        knowsAbout: ["Software engineering", "Entrepreneurship", "Electronic music production"],
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
                <meta property="og:image" content="https://www.zacharyschallenberger.com/images/zach_schallenberger_og.png" />
                <meta property="og:image:alt" content="Zachary Schallenberger at Michigan Central Station in Detroit" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zachary Schallenberger | Software Engineer & Entrepreneur" />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://www.zacharyschallenberger.com/images/zach_schallenberger_og.png" />
                <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
            </Helmet>
            <Experience />
            <Education />
            <Skills />
        </>
    );
}

export default HomePage;
