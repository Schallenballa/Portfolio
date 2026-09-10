import { GA_MEASUREMENT_ID, isAnalyticsHost } from './googleAnalytics';

describe('Google Analytics configuration', () => {
    test('uses the existing GA4 property', () => {
        expect(GA_MEASUREMENT_ID).toBe('G-2C7N7CSE1B');
    });

    test('only sends analytics from the production domains', () => {
        expect(isAnalyticsHost('zacharyschallenberger.com')).toBe(true);
        expect(isAnalyticsHost('www.zacharyschallenberger.com')).toBe(true);
        expect(isAnalyticsHost('localhost')).toBe(false);
        expect(isAnalyticsHost('deploy-preview-123--portfolio.netlify.app')).toBe(false);
    });
});
