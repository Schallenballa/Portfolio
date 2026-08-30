import React, { useEffect } from 'react';
import './Music.css';
import { Helmet } from 'react-helmet';
import FeaturedTrack from './FeaturedTrackPlayer';
import StandardTrack from './StandardTrackPlayer';
import UnreleasedBrewer from './UnreleasedBrewer';

const releases = [
    {
        title: 'I Wanna Stay',
        year: '2025',
        eyebrow: 'Latest single · Oct 31, 2025',
        description: 'A glowing, late-night release built for the space between holding on and letting go.',
        src: 'https://embed.music.apple.com/us/album/i-wanna-stay/1845962771?i=1845962772',
        href: 'https://music.apple.com/us/song/i-wanna-stay/1845962772',
        featured: true,
        palette: 'stay',
        number: '01',
    },
    {
        title: 'One More Last Time',
        year: '2024',
        eyebrow: 'Single · 2024',
        src: 'https://embed.music.apple.com/us/album/one-more-last-time/1781546965?i=1781546966',
        href: 'https://music.apple.com/us/song/one-more-last-time/1781546966',
        palette: 'last-time',
        number: '02',
    },
    {
        title: 'Seawall',
        subtitle: 'Zapps Remix',
        collaborator: {
            name: 'Neev',
            href: 'https://music.apple.com/us/artist/neev/1472346168',
        },
        year: '2024',
        eyebrow: 'Remix · Aug 14, 2024',
        src: 'https://embed.music.apple.com/us/album/seawall-feat-neev-zapps-remix/1763263990?i=1763263991',
        href: 'https://music.apple.com/us/song/seawall-feat-neev-zapps-remix/1763263991',
        palette: 'seawall',
        number: '03',
    },
    {
        title: "Don't You Even Say",
        year: '2023',
        eyebrow: 'Debut single · 2023',
        src: 'https://embed.music.apple.com/us/album/dont-you-even-say/1684613770?i=1684613771',
        href: 'https://music.apple.com/us/song/dont-you-even-say/1684613771',
        palette: 'dont-say',
        number: '04',
    },
];

const platforms = [
    {
        name: 'Apple Music',
        href: 'https://music.apple.com/us/artist/zapps/1684547283',
        icon: '/images/apple-music-60.png',
        className: 'apple-music',
    },
    {
        name: 'Spotify',
        href: 'https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK?si=Dm_syrdFSVK2ppYwOtgWTQ',
        icon: '/images/spotify-60.png',
        className: 'spotify',
    },
    {
        name: 'YouTube Music',
        href: 'https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg?si=kCmp-5_uNyVn0yEO',
        icon: '/images/youtube-music-60.png',
        className: 'yt-music',
    },
];

const Music = () => {
    const title = 'Zapps — Electronic Music Producer & Artist | Zachary Schallenberger';
    const description = 'Zapps is the Detroit-based electronic music project of producer Zachary Schallenberger. Explore the latest single and release catalog on major streaming platforms.';
    const artistSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MusicGroup',
                '@id': 'https://www.zacharyschallenberger.com/Zapps#artist',
                name: 'Zapps',
                url: 'https://www.zacharyschallenberger.com/Zapps',
                image: 'https://www.zacharyschallenberger.com/images/zapps_closeup.png',
                description,
                genre: ['Electronic', 'Downtempo'],
                foundingLocation: { '@type': 'Place', name: 'Detroit, Michigan' },
                member: { '@id': 'https://www.zacharyschallenberger.com/#person' },
                sameAs: [
                    'https://open.spotify.com/artist/5bVFcbuGnbVAstKk9iUWyK',
                    'https://music.apple.com/us/artist/zapps/1684547283',
                    'https://music.youtube.com/channel/UCxq_FrZqfMNsiOWXCGjhKvg',
                ],
            },
            {
                '@type': 'Person',
                '@id': 'https://www.zacharyschallenberger.com/#person',
                name: 'Zachary Schallenberger',
                alternateName: 'Zapps',
                url: 'https://www.zacharyschallenberger.com/',
                memberOf: { '@id': 'https://www.zacharyschallenberger.com/Zapps#artist' },
            },
        ],
    };

    useEffect(() => {
        document.body.classList.add('music-page');
        return () => document.body.classList.remove('music-page');
    }, []);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://www.zacharyschallenberger.com/Zapps" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.zacharyschallenberger.com/Zapps" />
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
                <div className="music-orb music-orb-one" aria-hidden="true" />
                <div className="music-orb music-orb-two" aria-hidden="true" />

                <div className="music-hero">
                    <p className="music-kicker">Detroit · Downtempo · Electronic</p>
                    <h2>Music for the<br /><span>in-between.</span></h2>
                    <p className="music-intro">
                        Zapps is the electronic artist project of producer Zachary Schallenberger—
                        emotive textures, restless rhythms, and small moments stretched wide.
                    </p>
                    <div className="music-platforms" aria-label="Listen to Zapps on streaming platforms">
                        {platforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`music-platform ${platform.className}`}
                            >
                                <img src={platform.icon} alt="" width="30" height="30" />
                                <span>{platform.name}</span>
                                <span className="platform-arrow" aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </div>
                </div>

                <UnreleasedBrewer />

                <div className="release-heading">
                    <p>Four singles</p>
                    <span aria-hidden="true">01—04</span>
                </div>

                <div className="release-grid">
                    {releases.map((release) => {
                        const Player = release.featured ? FeaturedTrack : StandardTrack;

                        return (
                            <article
                                key={release.title}
                                className={`release-card release-${release.palette}${release.featured ? ' release-featured' : ''}`}
                            >
                                <div className="release-art" aria-hidden="true">
                                    <span className="release-number">{release.number}</span>
                                    <span className="release-year">{release.year}</span>
                                    <span className="release-shape release-shape-one" />
                                    <span className="release-shape release-shape-two" />
                                    <span className="release-title-ghost">{release.title}</span>
                                </div>
                                <div className="release-content">
                                    <p className="release-eyebrow">{release.eyebrow}</p>
                                    <h3>{release.title}</h3>
                                    {release.collaborator && (
                                        <p className="release-subtitle">
                                            feat.{' '}
                                            <a href={release.collaborator.href} target="_blank" rel="noopener noreferrer">
                                                {release.collaborator.name}
                                            </a>
                                            {' · '}{release.subtitle}
                                        </p>
                                    )}
                                    {release.description && <p className="release-description">{release.description}</p>}
                                    <div className="release-player">
                                        <Player
                                            src={release.src}
                                            width="100%"
                                            height="175"
                                            title={`Listen to ${release.title} by Zapps on Apple Music`}
                                        />
                                    </div>
                                    <a className="release-apple-link" href={release.href} target="_blank" rel="noopener noreferrer">
                                        Open in Apple Music <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="music-outro">
                    <p>Independent sounds from Detroit.</p>
                    <a href="https://music.apple.com/us/artist/zapps/1684547283" target="_blank" rel="noopener noreferrer">
                        Zapps on Apple Music <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Music;
