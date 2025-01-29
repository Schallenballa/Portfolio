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
        expect(ogTitleMeta).toHaveAttribute('content', 'Zapps');

        const ogDescriptionMeta = Array.from(metaTags).find(tag => tag.getAttribute('property') === 'og:description');
        expect(ogDescriptionMeta).toHaveAttribute('content', 'In an industry dominated by high-energy beats and dance floor anthems, Zapps\' devotion to downtempo electronic music and his capacity to conjure evocative, emotive soundscapes are a breath of fresh air. His music is a reminder that in the heart of the city, one can find tranquility, and in the midst of chaos, serenity can be uncovered.');
    });
});
