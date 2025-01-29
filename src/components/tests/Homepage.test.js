import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
// noinspection ES6UnusedImports
import { Helmet } from 'react-helmet';  // To mock Helmet

// noinspection JSUnusedGlobalSymbols
jest.mock('react-helmet', () => ({
    Helmet: ({ children }) => <div>{children}</div>,
}));

describe('HomePage', () => {
    test('renders the Experience, Education, and Skills components', () => {
        render(<HomePage />);

        // Check if the Experience, Education, and Skills components are rendered
        expect(screen.getByText(/Experience/)).toBeInTheDocument();
        expect(screen.getByText(/Education/)).toBeInTheDocument();
        expect(screen.getByText(/Skills/)).toBeInTheDocument();
    });

    test('checks if the page title and meta tags are set correctly', () => {
        render(<HomePage />);

        // Check if the title is set correctly
        const helmetTitle = document.querySelector('title');
        expect(helmetTitle).toHaveTextContent('Zachary Schallenberger');

        // Check for specific meta tags
        const metaTags = document.querySelectorAll('meta');
        const ogTitleMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:title');
        expect(ogTitleMeta).toHaveAttribute('content', 'Portfolio');

        const ogDescriptionMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:description');
        expect(ogDescriptionMeta).toHaveAttribute('content', 'An online portfolio of Zachary Schallenberger. It contains information about his experience, education, and skills.');

        const ogUrlMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:url');
        expect(ogUrlMeta).toHaveAttribute('content', 'https://www.zacharyschallenberger.com/');
    });
});
