import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
    test('renders a 404 response hint and removes it when unmounted', () => {
        const { unmount } = render(<NotFound />);

        expect(screen.getByRole('heading', { name: '404 - Page Not Found' })).toBeInTheDocument();
        expect(document.head.querySelector('meta[name="prerender-status-code"]')).toHaveAttribute('content', '404');

        unmount();
        expect(document.head.querySelector('meta[name="prerender-status-code"]')).not.toBeInTheDocument();
    });
});
