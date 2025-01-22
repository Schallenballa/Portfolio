import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import loadable from '@loadable/component';
import './Music.css';
import {Helmet} from "react-helmet";

const Music = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Handle background color transitions and header updates
    useEffect(() => {
        const fadeIn = () => {
            document.body.style.transition = 'background-color 0.5s ease-out';
            document.body.style.backgroundColor = 'black';
        };

        const fadeOut = () => {
            document.body.style.transition = 'background-color 0.5s ease-out';
            document.body.style.backgroundColor = ''; // Reset background color
        };

        // Update header elements
        const headerName = document.getElementById('headerName');
        const title = document.getElementById('title');
        if (headerName) headerName.innerHTML = 'Zapps';
        if (title) title.innerHTML = 'Music Producer';

        fadeIn();

        // Set loading to false after a simulated delay (or based on asset loads)
        const timer = setTimeout(() => setIsLoading(false), 1000);

        return () => {
            fadeOut();
            if (headerName) headerName.innerHTML = 'Zachary Schallenberger';
            if (title) title.innerHTML = 'Software Engineer';
            clearTimeout(timer);
        };
    }, []);

    // Lazy load components for music tracks
    const FeaturedTrack = loadable(() => import('./FeaturedTrackPlayer'), {
        fallback: <Skeleton variant="rectangular" width="100%" height={352} />,
    });

    const StandardTrack = loadable(() => import('./StandardTrackPlayer'), {
        fallback: <Skeleton variant="rectangular" width="100%" height={152} />,
    });

    return (
        <>
            <Helmet>
                <title>Zapps</title>
                <meta property="og:title" content="Zapps" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://www.zacharyschallenberger.com/Zapps'} />
                <meta property="og:description" content="In an industry dominated by high-energy beats and dance floor anthems, Zapps' devotion to downtempo electronic music and his capacity to conjure evocative, emotive soundscapes are a breath of fresh air. His music is a reminder that in the heart of the city, one can find tranquility, and in the midst of chaos, serenity can be uncovered." />
            </Helmet>
            {isLoading ? (
                <section className="skeleton-loading">
                    {/* Skeletons for the header */}
                    <Skeleton variant="text" width={200} height={40} />
                    <Skeleton variant="text" width={150} height={25} />
                    {/* Skeletons for music links */}
                    <div className="music-links">
                        {[...Array(3)].map((_, index) => (
                            <Skeleton key={index} variant="rectangular" width={150} height={50} />
                        ))}
                    </div>
                    {/* Skeleton for featured track */}
                    <Skeleton variant="rectangular" width="100%" height={352} />
                    {/* Skeletons for standard tracks */}
                    {[...Array(2)].map((_, index) => (
                        <Skeleton key={index} variant="rectangular" width="100%" height={152} />
                    ))}
                </section>
            ) : (
                <section className="music">
                    <h2>Listen to Zapps</h2>
                    <p>Check out my latest tracks on all streaming platforms!</p>
                    <div className="music-links">
                        <a
                            href="https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK?si=Dm_syrdFSVK2ppYwOtgWTQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="music-link spotify"
                        >
                            <img src="/images/spotify.png" alt="Spotify Logo" className="spotify-logo" />
                            <span>Spotify</span>
                        </a>

                        <a
                            href="https://music.apple.com/us/artist/zapps/1684547283"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="music-link apple-music"
                        >
                            <img src="/images/apple-music.png" alt="Apple Music Logo" className="apple-logo" />
                            <span>Apple Music</span>
                        </a>

                        <a
                            href="https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg?si=kCmp-5_uNyVn0yEO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="music-link yt-music"
                        >
                            <img src="/images/youtube-music.png" alt="YouTube Music Logo" className="yt-logo" />
                            <span>YouTube Music</span>
                        </a>
                    </div>
                    <hr />
                    <div className="music-links" style={{ paddingBottom: '20px' }}>
                        <div>
                            <h2>Latest Single</h2>
                            <p><em>One More Last Time</em></p>
                            <p><em>11/2024</em></p>
                        </div>
                        <div>
                            <FeaturedTrack
                                src="https://open.spotify.com/embed/track/5YIEEFt6YnsiKRblUREDwo?utm_source=generator"
                                width="100%" height="352"
                            />
                        </div>
                    </div>
                    <div className="music-links">
                        <h2>Tracks</h2>
                        <div>
                            <StandardTrack
                                src="https://open.spotify.com/embed/track/6DEnpiC9VO3rNFHyls0Kzi?utm_source=generator"
                                width="100%" height="152"
                            />
                            <StandardTrack
                                src="https://open.spotify.com/embed/track/1PP9GQZVhl7Rap8aOP1r5e?utm_source=generator"
                                width="100%" height="152"
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Music;
