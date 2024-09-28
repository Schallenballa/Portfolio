import React from "react"
import styles from './LandingContent.module.scss'
import {ContentSection} from "./ContentSection.tsx";

const experienceContent = [
    {
        title: 'Ford Motor Company',
        imgUrl: 'https://www.zacharyschallenberger.com/images/ford.webp',
        altImgTag: 'Ford Motor Company logo'
    },
    {
        title: 'BMW Manufacturing Co., LLC',
        imgUrl: 'https://www.zacharyschallenberger.com/images/BMW.png',
        altImgTag: 'BMW logo'
    },
    {
        title: 'Tyler Technologies, Inc.',
        imgUrl: 'https://www.zacharyschallenberger.com/images/tyler-tech.png',
        altImgTag: 'Tyler Technologies logo'
    },
    {
        title: 'National Science Foundation',
        imgUrl: 'https://www.zacharyschallenberger.com/images/nsf.webp',
        altImgTag: 'National Science Foundation logo'
    }
]

const projectContent = [
    {
        title: 'Freats LLC',
        imgUrl: 'https://www.zacharyschallenberger.com/images/Freats.jpeg',
        altImgTag: 'Freats LLC logo'
    },
    {
        title: 'MSU',
        imgUrl: 'https://www.zacharyschallenberger.com/images/msu.jpeg',
        altImgTag: 'MSU logo'
    },
    {
        title: 'ModMe',
        imgUrl: 'https://www.zacharyschallenberger.com/images/modme.png',
        altImgTag: 'ModMe logo'
    }
]

export const LandingContent = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.mainImg} src="https://avatars.githubusercontent.com/u/25161282?v=4" alt="Zachary Schallenberger headshot"/>
                <div className={styles.helloContainer}>
                    <h3 style={{fontSize: '32px', margin: 'auto'}}>Hello,</h3>
                    <h4 style={{fontSize: '36px', margin: 'auto'}}>I’m a Software Engineer for Ford Motor Company</h4>
                    <h6 style={{fontSize: '32px', margin: 'auto'}}>Here’s who I am and what I do…</h6>
                    <h1 style={{textAlign: 'right'}}>&#8595;</h1>
                </div>
            </div>
            <ContentSection title="Professional Experience" subSections={experienceContent}></ContentSection>
            <ContentSection title="Projects" subSections={projectContent}></ContentSection>
        </>
    )
}