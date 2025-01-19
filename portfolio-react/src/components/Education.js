import React, { useState, useRef, useEffect } from "react";
import "./Education.css";

const Education = () => {
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [expanded]);

    const handleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <section className="education">
            <h2>Education</h2>
            <div className="degree">
                <div className={'degree-title-container'}>
                    <h3>Masters of Business Administration</h3>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/UMDearborn_Vertical_Logo.svg/2234px-UMDearborn_Vertical_Logo.svg.png'} alt="UMD Logo" width={'80px'} height={'auto'}/>
                </div>
                <p>University of Michigan - Dearborn | 2024 - Present</p>
            </div>
            <div className="degree">
                <div className={'degree-title-container'}>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <img src={'https://www.montana.edu/marketing/images/msu-identity-logo-basics/MSU-core-logo-400x300px.png'} alt="MSU Logo" width={'80px'} height={'auto'}/>
                </div>
                <p>Montana State University | 2016 - 2021</p>
                <div
                    className="image-container"
                    style={{
                        height: expanded ? `${contentHeight}px` : "100px",
                        overflow: "hidden",
                        transition: "height 0.5s ease-in-out",
                    }}
                    ref={contentRef}
                >
                    <img
                        src={
                            "https://media.licdn.com/dms/image/v2/C562DAQF1lXi8WFJ_nQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1646886308256?e=1737932400&v=beta&t=Ylb4PL6z1H36Xel5WnOTYBEUYnoyBJ1bMHsBdWR-OHo"
                        }
                        alt="MSU Diploma"
                        className={`image ${expanded ? "clear" : "blurred"}`}
                    />
                </div>
                <button className="toggle-button" onClick={handleExpand}>
                    <div className={'toggle-button-div'}>
                        {expanded ? "See Less" : "See More"}{" "}
                        <span className={`caret ${expanded ? "up" : "down"}`}></span>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Education;
