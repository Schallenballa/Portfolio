import {
    disableGoogleAnalytics,
    GA_MEASUREMENT_ID,
    initializeGoogleAnalytics,
    isAnalyticsHost,
    trackPageView,
} from './googleAnalytics';

describe('Google Analytics configuration', () => {
    beforeEach(() => {
        document.getElementById('google-analytics-script')?.remove();
        delete window.gtag;
        delete window.dataLayer;
        delete window[`ga-disable-${GA_MEASUREMENT_ID}`];
    });

    test('uses the existing GA4 property', () => {
        expect(GA_MEASUREMENT_ID).toBe('G-2C7N7CSE1B');
    });

    test('only sends analytics from the production domains', () => {
        expect(isAnalyticsHost('zacharyschallenberger.com')).toBe(true);
        expect(isAnalyticsHost('www.zacharyschallenberger.com')).toBe(true);
        expect(isAnalyticsHost('localhost')).toBe(false);
        expect(isAnalyticsHost('deploy-preview-123--portfolio.netlify.app')).toBe(false);
    });

    test('does not initialize analytics for a non-production host', () => {
        expect(initializeGoogleAnalytics('localhost')).toBe(false);
        expect(document.getElementById('google-analytics-script')).not.toBeInTheDocument();
    });

    test('initializes consent and the GA script once on a production host', () => {
        window.gtag = jest.fn();

        expect(initializeGoogleAnalytics('www.zacharyschallenberger.com')).toBe(true);

        const script = document.getElementById('google-analytics-script');
        expect(script).toHaveAttribute(
            'src',
            `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        );
        expect(script.async).toBe(true);
        expect(window.gtag).toHaveBeenCalledWith('consent', 'default', expect.objectContaining({
            analytics_storage: 'denied',
        }));
        expect(window.gtag).toHaveBeenCalledWith('config', GA_MEASUREMENT_ID, expect.objectContaining({
            send_page_view: false,
        }));

        window.gtag.mockClear();
        expect(initializeGoogleAnalytics('zacharyschallenberger.com')).toBe(true);
        expect(window.gtag).toHaveBeenCalledWith('consent', 'update', expect.objectContaining({
            analytics_storage: 'granted',
        }));
        expect(document.querySelectorAll('#google-analytics-script')).toHaveLength(1);
    });

    test('records page views when analytics is initialized', () => {
        window.gtag = jest.fn();
        document.title = 'Portfolio';

        trackPageView('/Zapps');

        expect(window.gtag).toHaveBeenCalledWith('event', 'page_view', {
            page_location: window.location.href,
            page_path: '/Zapps',
            page_title: 'Portfolio',
        });
    });

    test('ignores page views before analytics is initialized', () => {
        expect(trackPageView('/')).toBeUndefined();
    });

    test('disables analytics, revokes consent, and clears GA cookies', () => {
        window.gtag = jest.fn();
        document.cookie = '_ga=test; path=/';
        document.cookie = '_ga_example=test; path=/';
        document.cookie = 'portfolio=test; path=/';

        disableGoogleAnalytics();

        expect(window[`ga-disable-${GA_MEASUREMENT_ID}`]).toBe(true);
        expect(window.gtag).toHaveBeenCalledWith('consent', 'update', expect.objectContaining({
            analytics_storage: 'denied',
        }));
        expect(document.cookie).not.toContain('_ga=');
        expect(document.cookie).not.toContain('_ga_example=');
        expect(document.cookie).toContain('portfolio=test');
    });
});
