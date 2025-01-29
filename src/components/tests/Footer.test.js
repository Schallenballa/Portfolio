import { render, screen } from '@testing-library/react';
import Footer from '../Footer';  // Adjust the import if needed

describe('Footer Component', () => {
    test('renders footer with LinkedIn link', () => {
        render(<Footer />);

        // Check if footer is rendered
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();

        // Check if LinkedIn link is rendered
        const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
        expect(linkedInLink).toBeInTheDocument();

        // Check if the link has the correct href attribute
        expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/zacharyschallenberger');
        expect(linkedInLink).toHaveAttribute('target', '_blank');
    });
});
