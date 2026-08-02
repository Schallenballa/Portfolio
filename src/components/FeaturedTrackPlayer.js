import React from "react";
import SpotifyTrackPlayer from './SpotifyTrackPlayer';

const FeaturedTrackPlayer = ({ src, width, height }) => (
    <SpotifyTrackPlayer src={src} width={width} height={height} title="Featured Track" />
);

export default FeaturedTrackPlayer;
