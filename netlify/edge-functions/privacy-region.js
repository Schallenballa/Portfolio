const CONSENT_REQUIRED_COUNTRIES = new Set([
    // European Union
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
    'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
    'SI', 'ES', 'SE',
    // Additional EEA countries, Switzerland, and the United Kingdom
    'IS', 'LI', 'NO', 'CH', 'GB',
]);

export default async (_request, context) => {
    const countryCode = context.geo?.country?.code?.toUpperCase();

    return new Response(JSON.stringify({
        // If Netlify cannot resolve a country, fail closed and ask for consent.
        requiresConsent: !countryCode || CONSENT_REQUIRED_COUNTRIES.has(countryCode),
    }), {
        headers: {
            'cache-control': 'private, max-age=3600',
            'content-type': 'application/json; charset=utf-8',
        },
    });
};

export const config = {
    path: '/api/privacy-region',
};
