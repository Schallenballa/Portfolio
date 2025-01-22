import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import React from "react";
import {Helmet} from "react-helmet";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Zachary Schallenberger</title>
                <meta property="og:title" content="Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="An online portfolio of Zachary Schallenberger. It contains information about his experience, education, and skills." />
                <meta property="og:url" content={'https://www.zacharyschallenberger.com/'} />
            </Helmet>
            <Experience />
            <Education />
            <Skills />
        </>
    );
}

export default HomePage;