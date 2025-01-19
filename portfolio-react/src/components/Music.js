import React, {useEffect, useState} from 'react';
import loadable from "@loadable/component";
import './Music.css';

const Music = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fadeIn = () => {
            document.body.style.transition = 'background-color 0.5s ease-out';
            document.body.style.backgroundColor = 'black';
        };

        const fadeOut = () => {
            document.body.style.transition = 'background-color 0.5s ease-out';
            document.body.style.backgroundColor = ''; // Reset background color
        };

        fadeIn();

        setTimeout(() => { setReady(true) }, 1000);

        return () => {
            fadeOut();
        };
    }, []);

    const FeaturedTrack = loadable(() => import("./FeaturedTrackPlayer"), {
        fallback: <div>Loading...</div>
    });

    const StandardTrack = loadable(() => import("./StandardTrackPlayer"), {
        fallback: <div>Loading...</div>
    })

    return (
        <section className="music">
            <h2>Listen to Zapps</h2>
            <p>Check out my latest tracks on all streaming platforms!</p>
            <div className="music-links">
                <a
                    href="https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK?si=Dm_syrdFSVK2ppYwOtgWTQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="music-link spotify">
                    <img
                        src="/images/spotify.png"
                        alt="Spotify Logo"
                        className="spotify-logo"
                    />
                    <span>Spotify</span>
                </a>

                <a
                    href="https://music.apple.com/us/artist/zapps/1684547283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="music-link apple-music">
                    <img
                        src="/images/apple-music.png"
                        alt="Apple Music Logo"
                        className="apple-logo"
                    />
                    <span>Apple Music</span>
                </a>

                <a
                    href="https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg?si=kCmp-5_uNyVn0yEO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="music-link yt-music"
                >
                    <img
                        src="/images/youtube-music.png"
                        alt="YouTube Music Logo"
                        className="yt-logo"
                    />
                    <span>YouTube Music</span>
                </a>

            </div>
            <hr />
            <div className="music-links" style={{paddingBottom: '20px'}}>
                <h2>Latest Single</h2>
                <div>
                    <FeaturedTrack src={ready ? "https://open.spotify.com/embed/track/5YIEEFt6YnsiKRblUREDwo?utm_source=generator" : "about:blank"} width="100%" height="352" />
                </div>
            </div>
            <div className={"music-links"}>
                <h2>Tracks</h2>
                <div>
                    <StandardTrack src={ready ? "https://open.spotify.com/embed/track/6DEnpiC9VO3rNFHyls0Kzi?utm_source=generator" : "about:blank"} width={"100%"} height={"152"} />
                    <StandardTrack src={ready ? "https://open.spotify.com/embed/track/1PP9GQZVhl7Rap8aOP1r5e?utm_source=generator" : "about:blank"} width={"100%"} height={"152"} />
                </div>
            </div>
        </section>
    );
};

export default Music;
