import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnreleasedBrewer, { getFadeVolume, shuffleTrackOrder } from '../UnreleasedBrewer';
import unreleasedTracks from '../../generated/unreleasedTracks';

describe('UnreleasedBrewer', () => {
    beforeEach(() => {
        jest.spyOn(window.HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
        jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue();
        jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
        jest.spyOn(Math, 'random').mockReturnValue(0);
    });

    afterEach(() => jest.restoreAllMocks());

    test('fades clips in and out without changing their source audio', () => {
        expect(getFadeVolume(0, 20)).toBe(0);
        expect(getFadeVolume(0.75, 20)).toBe(0.5);
        expect(getFadeVolume(1.5, 20)).toBe(1);
        expect(getFadeVolume(18.75, 20)).toBe(0.5);
        expect(getFadeVolume(20, 20)).toBe(0);
    });

    test('creates one randomized order for the full listening session', () => {
        expect(shuffleTrackOrder(5)).toEqual([1, 2, 3, 4, 0]);
        expect(Math.random).toHaveBeenCalledTimes(4);
    });

    test('waits for interaction before loading and playing a random clip', async () => {
        const { container } = render(<UnreleasedBrewer />);
        const audio = container.querySelector('audio');

        expect(audio).toHaveAttribute('preload', 'none');
        expect(audio).not.toHaveAttribute('src');
        expect(screen.getByText(/aren’t mixed or mastered yet/i)).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: /play a random unreleased music clip/i }));

        await waitFor(() => expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1));
        expect(unreleasedTracks.some((track) => audio.src.endsWith(track))).toBe(true);
        expect(screen.getByText(`Unreleased pour 01 of ${String(unreleasedTracks.length).padStart(2, '0')}`)).toBeInTheDocument();
    });

    test('pauses the current clip and offers another random pour', async () => {
        render(<UnreleasedBrewer />);

        fireEvent.click(screen.getByRole('button', { name: /play a random unreleased music clip/i }));
        await screen.findByRole('button', { name: /pause unreleased music clip/i });
        fireEvent.click(screen.getByRole('button', { name: /pause unreleased music clip/i }));

        expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalled();
        expect(screen.getByRole('button', { name: /resume unreleased music clip/i })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: /stir another/i }));
        await waitFor(() => expect(screen.getByText(`Unreleased pour 02 of ${String(unreleasedTracks.length).padStart(2, '0')}`)).toBeInTheDocument());
    });

    test('offers a next icon beside the record after playback begins', async () => {
        render(<UnreleasedBrewer />);

        fireEvent.click(screen.getByRole('button', { name: /play a random unreleased music clip/i }));
        const nextButton = await screen.findByRole('button', { name: /play next unreleased music clip/i });
        fireEvent.click(nextButton);

        await waitFor(() => expect(screen.getByText(`Unreleased pour 02 of ${String(unreleasedTracks.length).padStart(2, '0')}`)).toBeInTheDocument());
    });

    test('de-emphasizes the record and highlights what to do when a clip ends', async () => {
        const { container } = render(<UnreleasedBrewer />);

        fireEvent.click(screen.getByRole('button', { name: /play a random unreleased music clip/i }));
        await screen.findByRole('button', { name: /play next unreleased music clip/i });
        fireEvent.ended(container.querySelector('audio'));

        expect(container.querySelector('.brewery')).toHaveClass('has-ended');
        expect(screen.getByText(/pour finished · another one is ready/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /play next unreleased music clip/i })).toBeInTheDocument();
    });
});
