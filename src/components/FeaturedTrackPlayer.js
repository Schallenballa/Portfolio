import React from "react";
import AppleMusicPlayer from './AppleMusicPlayer';

const FeaturedTrackPlayer = ({ src, width, height, title = 'Featured Track' }) => (
    <AppleMusicPlayer src={src} width={width} height={height} title={title} />
);

export default FeaturedTrackPlayer;
