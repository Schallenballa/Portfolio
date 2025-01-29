import { render, screen, fireEvent } from '@testing-library/react';
import Education from '../Education';  // Adjust the import if needed

describe('Education Component', () => {
    test('renders education section correctly', () => {
        render(<Education />);

        // Check if the section with "Education" title exists
        const educationTitle = screen.getByText(/Education/i);
        expect(educationTitle).toBeInTheDocument();

        // Check if the degrees are listed
        const degreeTitles = screen.getAllByRole('heading', { level: 3 });
        expect(degreeTitles).toHaveLength(2);  // There are two degrees

        // Check if the university names are listed
        const universities = screen.getAllByText(/University of Michigan/i);
        expect(universities.length).toBeGreaterThan(0);
        expect(screen.getByText(/Montana State University/i)).toBeInTheDocument();
    });

    test('shows "See More" initially', () => {
        render(<Education />);

        // Check if the toggle button initially displays "See More"
        const toggleButton = screen.getByText(/See More/i);
        expect(toggleButton).toBeInTheDocument();
    });

    test('toggles between "See More" and "See Less" when clicked', () => {
        render(<Education />);

        const toggleButton = screen.getByText(/See More/i);
        const diplomaImage = screen.getByAltText(/MSU Diploma/i);

        // Ensure the image is initially blurred
        expect(diplomaImage).toHaveClass('blurred');

        // Click "See More"
        fireEvent.click(toggleButton);

        // Check if the text now says "See Less"
        expect(screen.getByText(/See Less/i)).toBeInTheDocument();

        // Check if the image is now clear
        expect(diplomaImage).toHaveClass('clear');

        // Click "See Less"
        fireEvent.click(screen.getByText(/See Less/i));

        // Check if the text goes back to "See More"
        expect(screen.getByText(/See More/i)).toBeInTheDocument();

        // Ensure the image is back to being blurred
        expect(diplomaImage).toHaveClass('blurred');
    });
});
