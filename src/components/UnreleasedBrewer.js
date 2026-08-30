import React, { useEffect, useMemo, useRef, useState } from 'react';
import unreleasedTracks from '../generated/unreleasedTracks';

const FADE_IN_SECONDS = 1.5;
const FADE_OUT_SECONDS = 2.5;

export const getFadeVolume = (currentTime, duration) => {
    const fadeInVolume = Math.min(currentTime / FADE_IN_SECONDS, 1);
    const fadeOutVolume = Number.isFinite(duration)
        ? Math.min(Math.max((duration - currentTime) / FADE_OUT_SECONDS, 0), 1)
        : 1;

    return Math.max(0, Math.min(fadeInVolume, fadeOutVolume));
};

export const shuffleTrackOrder = (trackCount) => {
    const order = Array.from({ length: trackCount }, (_, index) => index);

    for (let index = order.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
    }

    return order;
};

const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
};

const UnreleasedBrewer = () => {
    const audioRef = useRef(null);
    const playOrder = useMemo(() => shuffleTrackOrder(unreleasedTracks.length), []);
    const [currentPosition, setCurrentPosition] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [hasError, setHasError] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);
    const hasTracks = playOrder.length > 0;

    useEffect(() => () => audioRef.current?.pause(), []);

    useEffect(() => {
        if (!isPlaying) return undefined;

        let animationFrame;
        const updateVolume = () => {
            const audio = audioRef.current;
            if (!audio) return;

            audio.volume = getFadeVolume(audio.currentTime, audio.duration);
            animationFrame = window.requestAnimationFrame(updateVolume);
        };

        animationFrame = window.requestAnimationFrame(updateVolume);
        return () => window.cancelAnimationFrame(animationFrame);
    }, [isPlaying, duration]);

    const playTrack = async (position) => {
        const audio = audioRef.current;
        if (!audio) return;

        setHasError(false);
        setHasEnded(false);
        if (position !== currentPosition) {
            audio.src = unreleasedTracks[playOrder[position]];
            audio.load();
            audio.volume = 0;
            setCurrentPosition(position);
            setCurrentTime(0);
            setDuration(0);
        }

        audio.volume = getFadeVolume(audio.currentTime, audio.duration);

        try {
            await audio.play();
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
            setHasError(true);
        }
    };

    const handleMainAction = () => {
        if (!hasTracks) return;

        if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
            return;
        }

        playTrack(currentPosition ?? 0);
    };

    const handleAnotherTrack = () => {
        if (!hasTracks) return;

        const nextPosition = currentPosition === null
            ? 0
            : (currentPosition + 1) % playOrder.length;
        playTrack(nextPosition);
    };
    const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;
    const status = hasError
        ? 'This pour would not play. Try stirring again.'
        : hasEnded
            ? 'Pour finished · another one is ready'
        : currentPosition === null
            ? hasTracks
                ? `${unreleasedTracks.length} unreleased ${unreleasedTracks.length === 1 ? 'fragment' : 'fragments'} in the pot`
                : 'Nothing in the pot yet · check back soon'
            : `Unreleased pour ${String(currentPosition + 1).padStart(2, '0')} of ${String(unreleasedTracks.length).padStart(2, '0')}`;

    return (
        <section className={`brewery${isPlaying ? ' is-playing' : ''}${hasEnded ? ' has-ended' : ''}`} aria-labelledby="brewery-title">
            <div className="brewery-copy">
                <p className="brewery-kicker">From the studio · Unreleased</p>
                <h2 id="brewery-title">See what’s<br /><span>brewing…</span></h2>
                <p className="brewery-description">
                    Click the record to hear a random clip of an unreleased track in the works.
                </p>
                <p className="brewery-disclaimer">
                    <em>Kitchen note: these clips aren’t mixed or mastered yet, so the volume knob has officially been warned.</em>
                </p>
            </div>

            <div className="brewery-visual">
                <button
                    type="button"
                    className="brew-record"
                    onClick={handleMainAction}
                    disabled={!hasTracks}
                    aria-label={!hasTracks ? 'No unreleased music clips available' : isPlaying ? 'Pause unreleased music clip' : currentPosition === null ? 'Play a random unreleased music clip' : 'Resume unreleased music clip'}
                >
                    <span className="brew-record-grooves" aria-hidden="true" />
                    <span className="brew-record-label">
                        <span>{!hasTracks ? 'Check' : isPlaying ? 'Now' : currentPosition === null ? 'Tap to' : 'Paused'}</span>
                        <strong>{!hasTracks ? 'back soon' : isPlaying ? 'brewing' : currentPosition === null ? 'listen' : 'resume'}</strong>
                    </span>
                    <span className="brew-play-icon" aria-hidden="true">{isPlaying ? 'Ⅱ' : '▶'}</span>
                </button>
                {currentPosition !== null && (
                    <button
                        type="button"
                        className="brew-next-button"
                        onClick={handleAnotherTrack}
                        aria-label="Play next unreleased music clip"
                    >
                        <span className="brew-next-symbol" aria-hidden="true">
                            <span className="brew-next-triangle" />
                            <span className="brew-next-bar" />
                        </span>
                    </button>
                )}
            </div>

            <div className="brewery-controls" aria-live="polite">
                <div className="brewery-status">
                    <span className="brewery-status-light" aria-hidden="true" />
                    <span>{status}</span>
                </div>
                <div className="brewery-progress" aria-hidden="true">
                    <span style={{ width: `${progress}%` }} />
                </div>
                <div className="brewery-meta">
                    <span>{currentPosition === null ? '0:00 / --:--' : `${formatTime(currentTime)} / ${formatTime(duration)}`}</span>
                    {currentPosition !== null && (
                        <button type="button" onClick={handleAnotherTrack}>Stir another <span aria-hidden="true">↻</span></button>
                    )}
                </div>
            </div>

            <audio
                ref={audioRef}
                preload="none"
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                onEnded={() => {
                    setIsPlaying(false);
                    setHasEnded(true);
                }}
                onError={() => {
                    setIsPlaying(false);
                    setHasError(true);
                }}
            />
        </section>
    );
};

export default UnreleasedBrewer;
