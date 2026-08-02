import React from "react";
import SpotifyTrackPlayer from './SpotifyTrackPlayer';

const StandardTrackPlayer = ({ src, width, height }) => (
    <SpotifyTrackPlayer src={src} width={width} height={height} title="Standard Track Player" />
);

export default StandardTrackPlayer;
