import React from 'react';

const PLAYER_PERMISSIONS = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';

const SpotifyTrackPlayer = ({ src, width, height, title }) => (
    <iframe
        src={src}
        width={width}
        height={height}
        frameBorder="0"
        allow={PLAYER_PERMISSIONS}
        allowFullScreen
        loading="lazy"
        style={{ padding: '20px 0' }}
        title={title}
    />
);

export default SpotifyTrackPlayer;
