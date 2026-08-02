import React, { useEffect } from 'react';
import './Music.css';
import {Helmet} from "react-helmet";
import FeaturedTrack from './FeaturedTrackPlayer';
import StandardTrack from './StandardTrackPlayer';

const Music = () => {
    const description = "Listen to Zapps, a Michigan electronic music producer creating emotive downtempo soundscapes. Discover the latest single and stream tracks on Spotify, Apple Music, and YouTube Music.";
    const artistSchema = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        name: "Zapps",
        url: "https://www.zacharyschallenberger.com/Zapps",
        genre: ["Electronic", "Downtempo"],
        sameAs: [
            "https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK",
            "https://music.apple.com/us/artist/zapps/1684547283",
            "https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg"
        ]
    };
    useEffect(() => {
        document.body.classList.add('music-page');

        return () => {
            document.body.classList.remove('music-page');
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Zapps | Downtempo Electronic Music Producer</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://www.zacharyschallenberger.com/Zapps" />
                <meta property="og:title" content="Zapps | Downtempo Electronic Music Producer" />
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={'https://www.zacharyschallenberger.com/Zapps'} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="Zachary Schallenberger" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zapps | Downtempo Electronic Music Producer" />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify(artistSchema)}</script>
            </Helmet>
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
                            <img src="/images/spotify-60.png" alt="Spotify Logo" className="spotify-logo" width="60" height="60" />
                            <span>Spotify</span>
                        </a>

                        <a
                            href="https://music.apple.com/us/artist/zapps/1684547283"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="music-link apple-music"
                        >
                            <img src="/images/apple-music-60.png" alt="Apple Music Logo" className="apple-logo" width="60" height="33" />
                            <span>Apple Music</span>
                        </a>

                        <a
                            href="https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg?si=kCmp-5_uNyVn0yEO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="music-link yt-music"
                        >
                            <img src="/images/youtube-music-60.png" alt="YouTube Music Logo" className="yt-logo" width="60" height="60" />
                            <span>YouTube Music</span>
                        </a>
                    </div>
                    <hr />
                    <div className="music-links" style={{ paddingBottom: '20px' }}>
                        <div>
                            <h2>Latest Single</h2>
                            <p><em>I Wanna Stay</em></p>
                            <p><em>10/2025</em></p>
                        </div>
                        <div>
                            <FeaturedTrack
                                src="https://open.spotify.com/embed/track/4eUQvMYHsy7grDVDDTBHZw?utm_source=generator"
                                width="100%" height="352"
                            />
                        </div>
                    </div>
                    <div className="music-links">
                        <h2>Tracks</h2>
                        <div>
                            <StandardTrack
                                src="https://open.spotify.com/embed/track/5YIEEFt6YnsiKRblUREDwo?utm_source=generator"
                                width="100%" height="152"
                            />
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
        </>
    );
};

export default Music;
