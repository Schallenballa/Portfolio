import { render, screen } from '@testing-library/react';
import Header from '../Header';

let mockPathname = '/';

jest.mock('react-router-dom', () => ({
    Link: ({ children, to }) => <a href={to}>{children}</a>,
    useLocation: () => ({ pathname: mockPathname }),
}), { virtual: true });

const renderHeaderAt = (path) => {
    mockPathname = path;
    return render(<Header />);
};

describe('Header', () => {
    test('renders the professional profile on the home page', () => {
        renderHeaderAt('/');

        expect(screen.getByRole('heading', { name: 'Zachary Schallenberger' })).toBeInTheDocument();
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText('Ford Influencer')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /explore my music/i })).toHaveAttribute('href', '/Zapps');
    });

    test('derives the music profile from the current route', () => {
        renderHeaderAt('/Zapps');

        expect(screen.getByRole('heading', { name: 'Zapps' })).toBeInTheDocument();
        expect(screen.getByText('Music Producer')).toBeInTheDocument();
        expect(screen.queryByText('Ford Influencer')).not.toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Zapps' })).toHaveAttribute('src', '/images/zapps_closeup-240.png');
    });
});
