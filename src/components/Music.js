import React, { useEffect } from 'react';
import './Music.css';
import {Helmet} from "react-helmet";
import FeaturedTrack from './FeaturedTrackPlayer';
import StandardTrack from './StandardTrackPlayer';

const Music = () => {
    const title = "Zapps — Electronic Music Producer & Artist | Zachary Schallenberger";
    const description = "Zapps is the Detroit-based electronic music project of producer Zachary Schallenberger. Explore the latest single and release catalog on major streaming platforms.";
    const artistSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MusicGroup",
                "@id": "https://www.zacharyschallenberger.com/Zapps#artist",
                name: "Zapps",
                url: "https://www.zacharyschallenberger.com/Zapps",
                image: "https://www.zacharyschallenberger.com/images/zapps_closeup.png",
                description,
                genre: ["Electronic", "Downtempo"],
                foundingLocation: {"@type": "Place", name: "Detroit, Michigan"},
                member: {"@id": "https://www.zacharyschallenberger.com/#person"},
                sameAs: [
                    "https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK",
                    "https://music.apple.com/us/artist/zapps/1684547283",
                    "https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg"
                ]
            },
            {
                "@type": "Person",
                "@id": "https://www.zacharyschallenberger.com/#person",
                name: "Zachary Schallenberger",
                alternateName: "Zapps",
                url: "https://www.zacharyschallenberger.com/",
                memberOf: {"@id": "https://www.zacharyschallenberger.com/Zapps#artist"}
            }
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
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://www.zacharyschallenberger.com/Zapps" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://www.zacharyschallenberger.com/Zapps'} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="Zachary Schallenberger" />
                <meta property="og:image" content="https://www.zacharyschallenberger.com/images/zapps_closeup.png" />
                <meta property="og:image:alt" content="Portrait of electronic music producer Zapps, Zachary Schallenberger" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://www.zacharyschallenberger.com/images/zapps_closeup.png" />
                <script type="application/ld+json">{JSON.stringify(artistSchema)}</script>
            </Helmet>
            <section className="music">
                    <h2>Listen to Zapps</h2>
                    <p className="music-intro">Zapps is the electronic music artist project of Detroit-based producer Zachary Schallenberger, blending emotive downtempo textures with modern electronic production. Hear the latest single, <em>I Wanna Stay</em>, and explore the existing release catalog below.</p>
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
