import { render, screen } from '@testing-library/react';
import FeaturedTrackPlayer from '../FeaturedTrackPlayer';  // Adjust the import if needed

describe('FeaturedTrackPlayer Component', () => {
    test('renders iframe with correct attributes', () => {
        const src = "https://open.spotify.com/embed/track/3n3n9BO8ZTOrskqxhcxad3";
        const width = "300";
        const height = "380";

        render(<FeaturedTrackPlayer src={src} width={width} height={height} />);

        // Check if iframe is rendered
        const iframe = screen.getByTitle(/featured track/i);
        expect(iframe).toBeInTheDocument();

        // Check if iframe has the correct src, width, and height attributes
        expect(iframe).toHaveAttribute('src', src);
        expect(iframe).toHaveAttribute('width', width);
        expect(iframe).toHaveAttribute('height', height);
    });

    test('iframe allows autoplay and other permissions', () => {
        const src = "https://open.spotify.com/embed/track/3n3n9BO8ZTOrskqxhcxad3";

        render(<FeaturedTrackPlayer src={src} width="300" height="380" />);

        // Check if iframe has the correct permissions (allow attributes)
        const iframe = screen.getByTitle(/featured track/i);
        expect(iframe).toHaveAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    });
});
