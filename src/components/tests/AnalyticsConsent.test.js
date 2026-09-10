import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AnalyticsConsent from '../AnalyticsConsent';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({ pathname: '/', search: '' }),
}), { virtual: true });

describe('AnalyticsConsent', () => {
    beforeEach(() => {
        window.localStorage.clear();
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ requiresConsent: true }),
        });
    });

    afterAll(() => {
        delete global.fetch;
    });

    test('asks visitors in consent regions before enabling analytics', async () => {
        render(
            <AnalyticsConsent><main>Website</main></AnalyticsConsent>
        );

        expect(await screen.findByRole('region', { name: /analytics privacy choices/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /how google uses this data/i })).toHaveAttribute(
            'href',
            'https://business.safety.google/privacy/'
        );
        fireEvent.click(screen.getByRole('button', { name: /help improve the site/i }));

        expect(JSON.parse(window.localStorage.getItem('analytics-consent'))).toEqual(expect.objectContaining({
            choice: 'granted',
            noticeVersion: '2026-09-10',
        }));
        expect(screen.queryByRole('region', { name: /analytics privacy choices/i })).not.toBeInTheDocument();
    });

    test('saves a declined choice', async () => {
        render(
            <AnalyticsConsent><main>Website</main></AnalyticsConsent>
        );

        fireEvent.click(await screen.findByRole('button', { name: /continue without analytics/i }));
        expect(JSON.parse(window.localStorage.getItem('analytics-consent'))).toEqual(expect.objectContaining({
            choice: 'denied',
            noticeVersion: '2026-09-10',
        }));
    });

    test('enables analytics without a banner outside consent regions', async () => {
        global.fetch.mockResolvedValue({
            ok: true,
            json: async () => ({ requiresConsent: false }),
        });

        render(
            <AnalyticsConsent><main>Website</main></AnalyticsConsent>
        );

        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
            '/api/privacy-region',
            { headers: { accept: 'application/json' } }
        ));
        expect(screen.queryByRole('region', { name: /analytics privacy choices/i })).not.toBeInTheDocument();
        expect(window.localStorage.getItem('analytics-consent')).toBeNull();
    });

    test('asks for consent when regional detection fails', async () => {
        global.fetch.mockRejectedValue(new Error('Network unavailable'));

        render(
            <AnalyticsConsent><main>Website</main></AnalyticsConsent>
        );

        expect(await screen.findByRole('region', { name: /analytics privacy choices/i })).toBeInTheDocument();
    });
});
