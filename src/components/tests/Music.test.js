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

        expect(screen.getByText(/Zapps is the electronic music artist project of Detroit-based producer Zachary Schallenberger/i)).toBeInTheDocument();
    });

    test('applies and cleans up the music page theme', () => {
        const { unmount } = render(<Music />);

        expect(document.body).toHaveClass('music-page');
        unmount();
        expect(document.body).not.toHaveClass('music-page');
    });
});
