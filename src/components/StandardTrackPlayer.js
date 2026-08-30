import React from "react";
import AppleMusicPlayer from './AppleMusicPlayer';

const StandardTrackPlayer = ({ src, width, height, title = 'Standard Track Player' }) => (
    <AppleMusicPlayer src={src} width={width} height={height} title={title} />
);

export default StandardTrackPlayer;
