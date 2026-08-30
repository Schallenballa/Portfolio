import React from 'react';

const PLAYER_PERMISSIONS = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';

const SpotifyTrackPlayer = ({ src, width, height, title }) => (
    <iframe
        allow={PLAYER_PERMISSIONS}
        allowFullScreen
        title={title}
        frameBorder="0"
        loading="lazy"
        style={{overflow: 'hidden', background: 'transparent', padding: '20px 0'}}
        width={width}
        height={height}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={src}>
    </iframe>
);

export default SpotifyTrackPlayer;
