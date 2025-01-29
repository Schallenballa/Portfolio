import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperienceTimeline from '../ExperienceTimeline';
import '@testing-library/jest-dom'; // for the "toBeInTheDocument" matcher

describe('ExperienceTimeline', () => {
    test('renders the ExperienceTimeline component', () => {
        render(<ExperienceTimeline />);
        const experienceElements = screen.getAllByText('Experience')[0];
        // Check if the title is rendered
        expect(experienceElements).toBeInTheDocument();
    });

    test('displays Ford logo in timeline', () => {
        render(<ExperienceTimeline />);
        // Check if the Ford logo (FordLogo component) is in the document
        const fordLogo = screen.getByAltText('Ford Logo');
        expect(fordLogo).toBeInTheDocument();
    });

    test('displays correct text content for Ford position', () => {
        render(<ExperienceTimeline />);
        // Check if the Ford job title and location is rendered correctly
        expect(screen.getByText(/Software Engineer - Ford Motor Company/i)).toBeInTheDocument();
        expect(screen.getByText(/Dearborn, MI/i)).toBeInTheDocument();
    });
});
