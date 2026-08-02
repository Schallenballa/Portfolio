import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Music from '../Music';
import { Helmet } from 'react-helmet';  // To mock Helmet
import '@testing-library/jest-dom';

jest.mock('react-helmet', () => ({
    Helmet: ({ children }) => <div>{children}</div>,
}));

// Mock the loadable components
jest.mock('@loadable/component', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(() => <div>Mocked Track Player</div>),
}));

describe('Music', () => {
    test('renders correct meta tags with Helmet', () => {
        render(<Music />);

        const helmetTitle = document.querySelector('title');
        expect(helmetTitle).toHaveTextContent('Zapps');

        const metaTags = document.querySelectorAll('meta');
        const ogTitleMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:title');
        expect(ogTitleMeta).toHaveAttribute('content', 'Zapps | Downtempo Electronic Music Producer');

        const ogDescriptionMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:description');
        expect(ogDescriptionMeta).toHaveAttribute('content', 'Listen to Zapps, a Michigan electronic music producer creating emotive downtempo soundscapes. Discover the latest single and stream tracks on Spotify, Apple Music, and YouTube Music.');
    });

    test('applies and cleans up the music page theme', () => {
        const { unmount } = render(<Music />);

        expect(document.body).toHaveClass('music-page');
        unmount();
        expect(document.body).not.toHaveClass('music-page');
    });
});
