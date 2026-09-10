import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnalyticsPrivacyContext } from '../analytics/AnalyticsPrivacyContext';
import {
    disableGoogleAnalytics,
    initializeGoogleAnalytics,
    trackPageView,
} from '../analytics/googleAnalytics';
import './AnalyticsConsent.css';

const STORAGE_KEY = 'analytics-consent';
const CONSENT_NOTICE_VERSION = '2026-09-10';

function getSavedConsent() {
    try {
        const savedValue = window.localStorage.getItem(STORAGE_KEY);

        // Preserve choices saved by the earlier string-only implementation.
        if (savedValue === 'granted' || savedValue === 'denied') {
            return savedValue;
        }

        const savedConsent = savedValue ? JSON.parse(savedValue) : null;
        return savedConsent?.choice === 'granted' || savedConsent?.choice === 'denied'
            ? savedConsent.choice
            : null;
    } catch {
        return null;
    }
}

function saveConsent(value) {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            choice: value,
            noticeVersion: CONSENT_NOTICE_VERSION,
            recordedAt: new Date().toISOString(),
        }));
    } catch {
        // The choice still applies for the current page if storage is unavailable.
    }
}

export default function AnalyticsConsent({ children }) {
    const location = useLocation();
    const [consent, setConsent] = useState(getSavedConsent);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (consent !== null) {
            return undefined;
        }

        let cancelled = false;

        async function applyRegionalConsentPolicy() {
            try {
                const response = await fetch('/api/privacy-region', {
                    headers: { accept: 'application/json' },
                });

                if (!response.ok) {
                    throw new Error('Unable to determine privacy region');
                }

                const { requiresConsent } = await response.json();
                if (!cancelled) {
                    if (requiresConsent) {
                        setIsOpen(true);
                    } else {
                        // Basic analytics is enabled by default outside the consent region.
                        // This is intentionally not saved as an explicit user choice.
                        setConsent('granted');
                    }
                }
            } catch {
                if (!cancelled) {
                    // Fail closed: ask rather than track when geolocation is unavailable.
                    setIsOpen(true);
                }
            }
        }

        applyRegionalConsentPolicy();

        return () => {
            cancelled = true;
        };
    }, [consent]);

    useEffect(() => {
        if (consent !== 'granted') {
            return;
        }

        if (initializeGoogleAnalytics()) {
            trackPageView(`${location.pathname}${location.search}`);
        }
    }, [consent, location.pathname, location.search]);

    const chooseConsent = (choice) => {
        saveConsent(choice);
        setConsent(choice);
        setIsOpen(false);

        if (choice === 'denied') {
            disableGoogleAnalytics();
        }
    };

    return (
        <AnalyticsPrivacyContext.Provider value={{ openAnalyticsSettings: () => setIsOpen(true) }}>
            {children}
            {isOpen && (
                <section className="analytics-consent" aria-label="Analytics privacy choices">
                    <div>
                        <h2>Help me improve this portfolio</h2>
                        <p>
                            I use Google Analytics to understand how people find and use this
                            site. If you&apos;re okay with that, Google may store analytics cookies
                            and receive usage data. I don&apos;t use it for advertising.{' '}
                            <a
                                href="https://business.safety.google/privacy/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                How Google uses this data
                            </a>
                            .
                        </p>
                    </div>
                    <div className="analytics-consent-actions">
                        <button type="button" className="analytics-decline" onClick={() => chooseConsent('denied')}>
                            Continue without analytics
                        </button>
                        <button type="button" className="analytics-accept" onClick={() => chooseConsent('granted')}>
                            Help improve the site
                        </button>
                        {consent !== null && (
                            <button type="button" className="analytics-close" onClick={() => setIsOpen(false)}>
                                Close
                            </button>
                        )}
                    </div>
                </section>
            )}
        </AnalyticsPrivacyContext.Provider>
    );
}
