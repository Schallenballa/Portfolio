import React from 'react';
import './Music.css';

const Music = () => {
    return (
        <section className="music">
            <h2>Listen to Zapps</h2>
            <p>Check out my latest tracks on Spotify, Apple Music, Youtube, and more!</p>

            <div className="music-links">
                <a
                    href="https://open.spotify.com/artist/your-spotify-artist-id"
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
                    href="https://music.apple.com/artist/your-apple-music-artist-id"
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
            </div>
            <hr />
            <div className="music-links">
                <h2>Latest Single</h2>
                <div>
                    <iframe
                            src="https://open.spotify.com/embed/track/5YIEEFt6YnsiKRblUREDwo?utm_source=generator"
                            width="100%" height="352" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                </div>
            </div>
            <div className={"music-links"}>
                <h2>Tracks</h2>
                <div>
                    <iframe
                        src="https://open.spotify.com/embed/track/6DEnpiC9VO3rNFHyls0Kzi?utm_source=generator"
                        width="100%" height="152" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                    <iframe
                        src="https://open.spotify.com/embed/track/1PP9GQZVhl7Rap8aOP1r5e?utm_source=generator"
                        width="100%" height="152" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Music;
