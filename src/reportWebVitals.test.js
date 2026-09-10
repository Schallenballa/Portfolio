import reportWebVitals from './reportWebVitals';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

jest.mock('web-vitals', () => ({
    onCLS: jest.fn(),
    onFID: jest.fn(),
    onFCP: jest.fn(),
    onLCP: jest.fn(),
    onTTFB: jest.fn(),
}));

describe('reportWebVitals', () => {
    test('registers the callback for every supported web vital', async () => {
        const onPerfEntry = jest.fn();

        await reportWebVitals(onPerfEntry);

        expect(onCLS).toHaveBeenCalledWith(onPerfEntry);
        expect(onFID).toHaveBeenCalledWith(onPerfEntry);
        expect(onFCP).toHaveBeenCalledWith(onPerfEntry);
        expect(onLCP).toHaveBeenCalledWith(onPerfEntry);
        expect(onTTFB).toHaveBeenCalledWith(onPerfEntry);
    });

    test('does nothing without a callback function', () => {
        reportWebVitals();
        reportWebVitals('not a function');

        expect(onCLS).not.toHaveBeenCalled();
    });
});
