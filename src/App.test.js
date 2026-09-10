import { render, screen } from '@testing-library/react';
import App from './App';

let mockPathname = '/';

jest.mock('react-router-dom', () => {
    const React = require('react');

    return {
        BrowserRouter: ({ children }) => <>{children}</>,
        Route: () => null,
        Routes: ({ children }) => {
            const routes = React.Children.toArray(children);
            const selectedRoute = routes.find(({ props }) => (
                props.path === mockPathname || props.path === '*'
            ));
            return selectedRoute.props.element;
        },
        useLocation: () => ({ pathname: mockPathname, search: '' }),
    };
});
jest.mock('./components/Header', () => () => <header>Header</header>);
jest.mock('./components/Footer', () => () => <footer>Footer</footer>);
jest.mock('./components/AnalyticsConsent', () => ({ children }) => <>{children}</>);
jest.mock('./components/HomePage', () => () => <div>Home route</div>);
jest.mock('./components/Music', () => () => <div>Music route</div>);
jest.mock('./pages/NotFound', () => () => <div>Not-found route</div>);

describe('App routing', () => {
    test('renders the portfolio home page', async () => {
        mockPathname = '/';
        const { container } = render(<App />);

        expect(await screen.findByText('Home route')).toBeInTheDocument();
        expect(container.querySelector('.App')).not.toHaveClass('music-page-shell');
    });

    test('renders the music page with its page shell', async () => {
        mockPathname = '/Zapps';
        const { container } = render(<App />);

        expect(await screen.findByText('Music route')).toBeInTheDocument();
        expect(container.querySelector('.App')).toHaveClass('music-page-shell');
    });

    test('renders the fallback route', async () => {
        mockPathname = '/missing';
        render(<App />);

        expect(await screen.findByText('Not-found route')).toBeInTheDocument();
    });
});
