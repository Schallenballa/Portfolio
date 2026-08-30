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
        expect(ogTitleMeta).toHaveAttribute('content', 'Zapps — Electronic Music Producer & Artist | Zachary Schallenberger');

        const ogDescriptionMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:description');
        expect(ogDescriptionMeta).toHaveAttribute('content', 'Zapps is the Detroit-based electronic music project of producer Zachary Schallenberger. Explore the latest single and release catalog on major streaming platforms.');

        expect(screen.getByText(/Zapps is the electronic artist project of producer Zachary Schallenberger/i)).toBeInTheDocument();
    });

    test('applies and cleans up the music page theme', () => {
        const { unmount } = render(<Music />);

        expect(document.body).toHaveClass('music-page');
        unmount();
        expect(document.body).not.toHaveClass('music-page');
    });

    test('links the Seawall collaborator to the correct Apple Music artist page', () => {
        render(<Music />);

        expect(screen.getAllByRole('link', { name: 'Neev' })[0]).toHaveAttribute(
            'href',
            'https://music.apple.com/us/artist/neev/1472346168'
        );
    });

    test('renders collaborator profiles and production credits', () => {
        render(<Music />);

        expect(screen.getByRole('heading', { name: /artists i’ve worked with/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Dariya/i })).toHaveAttribute(
            'href',
            'https://open.spotify.com/artist/2WpOIHP25z050UWIXG9gUE?si=3BJEaGBcRzyX9O5q2diaNw'
        );
        expect(screen.getByRole('link', { name: /When To Say When/i })).toHaveAttribute(
            'href',
            'https://open.spotify.com/track/3mCiyC0rmkwP3jHeYPsAYG?si=9dcd8920fec04d31'
        );
        expect(screen.getByText(/producing the electronic elements/i)).toBeInTheDocument();
        expect(screen.getByText(/original electronic music · unreleased/i)).toBeInTheDocument();
    });
});
