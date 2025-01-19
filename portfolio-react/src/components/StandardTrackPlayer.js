import React from "react";

const StandardTrackPlayer = ({ src, width, height }) => (
    <iframe src={src} width={width} height={height} frameBorder={"0"} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" style={{padding: '20px 0'}} title={'Standard Track Player'}></iframe>
);

export default StandardTrackPlayer;