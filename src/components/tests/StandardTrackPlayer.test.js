import { render } from '@testing-library/react';
import StandardTrackPlayer from '../StandardTrackPlayer';
import '@testing-library/jest-dom';

describe('StandardTrackPlayer', () => {
    test('renders iframe with correct props', () => {
        const src = 'https://open.spotify.com/embed/track/5YIEEFt6YnsiKRblUREDwo';
        const width = '100%';
        const height = '352';

        const { getByTitle } = render(<StandardTrackPlayer src={src} width={width} height={height} />);

        const iframe = getByTitle('Standard Track Player');

        // Check if iframe is rendered with correct src, width, and height
        expect(iframe).toHaveAttribute('src', src);
        expect(iframe).toHaveAttribute('width', width);
        expect(iframe).toHaveAttribute('height', height);
        expect(iframe).toHaveAttribute('frameBorder', '0');
        expect(iframe).toHaveAttribute('loading', 'lazy');
        expect(iframe).toHaveStyle('padding: 20px 0');
    });
});
