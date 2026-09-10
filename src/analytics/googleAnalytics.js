export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-2C7N7CSE1B';

const SCRIPT_ID = 'google-analytics-script';
const PRODUCTION_HOSTS = new Set([
    'zacharyschallenberger.com',
    'www.zacharyschallenberger.com',
]);

export function isAnalyticsHost(hostname) {
    return PRODUCTION_HOSTS.has(hostname);
}

export function initializeGoogleAnalytics(hostname) {
    if (typeof window === 'undefined') {
        return false;
    }

    const currentHostname = hostname ?? window.location.hostname;
    if (!isAnalyticsHost(currentHostname)) {
        return false;
    }

    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
    };

    if (!document.getElementById(SCRIPT_ID)) {
        window.gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
        });
        window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
        });

        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {
            send_page_view: false,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
        });
    } else {
        window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
        });
    }

    return true;
}

export function trackPageView(path) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
        return;
    }

    window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: path,
        page_title: document.title,
    });
}

export function disableGoogleAnalytics() {
    if (typeof window === 'undefined') {
        return;
    }

    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

    if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
        });
    }

    document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0].trim();
        if (name === '_ga' || name.startsWith('_ga_')) {
            document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        }
    });
}
