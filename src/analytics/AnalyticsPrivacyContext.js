import { createContext, useContext } from 'react';

export const AnalyticsPrivacyContext = createContext({ openAnalyticsSettings: () => {} });

export function useAnalyticsPrivacy() {
    return useContext(AnalyticsPrivacyContext);
}
