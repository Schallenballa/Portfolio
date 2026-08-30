import React from 'react';

const collaborators = [
    {
        name: 'Dariya',
        image: '/images/collaborators/dariya.jpg',
        artistHref: 'https://open.spotify.com/artist/2WpOIHP25z050UWIXG9gUE?si=3BJEaGBcRzyX9O5q2diaNw',
        status: 'Currently collaborating',
        palette: 'dariya',
        description: 'Reimagining songs from Dariya’s catalog as new electronic versions—an active collaboration still taking shape.',
        detail: (
            <>
                Producer on{' '}
                <a
                    href="https://open.spotify.com/track/3mCiyC0rmkwP3jHeYPsAYG?si=9dcd8920fec04d31"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    When To Say When <span aria-hidden="true">↗</span>
                </a>
            </>
        ),
    },
    {
        name: 'Neev',
        image: '/images/collaborators/neev.jpg',
        artistHref: 'https://open.spotify.com/artist/0aIrvOYvADRNpEjLsODIYX?si=OeAbMFOhSN6Y2NZQLHIxtg',
        status: 'Released collaboration',
        palette: 'neev',
        description: 'Remixed “Seawall,” producing the electronic elements and weaving Neev’s original vocals into a new world.',
        detail: <a href="#seawall">Hear the Zapps remix <span aria-hidden="true">↓</span></a>,
    },
    {
        name: 'Grace Schallenberger',
        status: 'In development',
        palette: 'grace',
        description: 'Developing a handful of original electronic songs together, with hopes of bringing them into the world soon.',
        detail: <span>Original electronic music · unreleased</span>,
    },
];

const Collaborators = () => (
    <section className="collaborators" aria-labelledby="collaborators-title">
        <div className="collaborators-heading">
            <div>
                <p>In good company</p>
                <h2 id="collaborators-title">Artists I’ve<br /><span>worked with.</span></h2>
            </div>
            <p className="collaborators-intro">
                Songs are better when they become a conversation. A few of the artists I’ve been lucky enough to create alongside.
            </p>
        </div>

        <div className="collaborator-grid">
            {collaborators.map((collaborator) => (
                <article key={collaborator.name} className={`collaborator-card collaborator-${collaborator.palette}`}>
                    <div className="collaborator-card-top">
                        {collaborator.image ? (
                            <img
                                className="collaborator-avatar"
                                src={collaborator.image}
                                alt={`${collaborator.name}, collaborating artist`}
                                width="320"
                                height="320"
                                loading="lazy"
                            />
                        ) : (
                            <div
                                className="collaborator-avatar collaborator-monogram"
                                role="img"
                                aria-label="Grace Schallenberger artist portrait placeholder"
                            >
                                <span>GS</span>
                            </div>
                        )}
                        <span className="collaborator-status">{collaborator.status}</span>
                    </div>

                    <div className="collaborator-copy">
                        <h3>
                            {collaborator.artistHref ? (
                                <a href={collaborator.artistHref} target="_blank" rel="noopener noreferrer">
                                    {collaborator.name} <span aria-hidden="true">↗</span>
                                </a>
                            ) : collaborator.name}
                        </h3>
                        <p>{collaborator.description}</p>
                    </div>

                    <div className="collaborator-detail">{collaborator.detail}</div>
                </article>
            ))}
        </div>
    </section>
);

export default Collaborators;
