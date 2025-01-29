import { render, screen } from '@testing-library/react';
import Skills from '../Skills';
import '@testing-library/jest-dom';

describe('Skills', () => {
    test('renders Skills section correctly', () => {
        render(<Skills />);

        // Check if the "Skills" title is displayed
        expect(screen.getByText('Skills')).toBeInTheDocument();

        // Check if the skill items are displayed
        expect(screen.getByText('JavaScript, React, Node.js')).toBeInTheDocument();
        expect(screen.getByText('HTML, CSS, Sass')).toBeInTheDocument();
        expect(screen.getByText('Git, Docker')).toBeInTheDocument();
        expect(screen.getByText('Agile Development, Scrum')).toBeInTheDocument();
    });

    test('displays the correct list of skills', () => {
        render(<Skills />);

        const skillsList = screen.getByRole('list');
        const listItems = skillsList.querySelectorAll('li');

        // There should be 4 skill items
        expect(listItems).toHaveLength(4);

        // Verify individual skills in the list
        expect(listItems[0]).toHaveTextContent('JavaScript, React, Node.js');
        expect(listItems[1]).toHaveTextContent('HTML, CSS, Sass');
        expect(listItems[2]).toHaveTextContent('Git, Docker');
        expect(listItems[3]).toHaveTextContent('Agile Development, Scrum');
    });
});
