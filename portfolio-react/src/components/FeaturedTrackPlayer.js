import React from "react";

const FeaturedTrackPlayer = ({ src, width, height }) => (
    <iframe src={src} width={width} height={height} frameBorder={"0"} allowFullScreen={""} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
);

export default FeaturedTrackPlayer;