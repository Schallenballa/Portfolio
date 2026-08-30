import fs from 'fs';
import path from 'path';

describe('production security headers', () => {
    test('allow the embedded music providers used by the Zapps page', () => {
        const headers = fs.readFileSync(path.join(process.cwd(), 'public', '_headers'), 'utf8');
        const contentSecurityPolicy = headers
            .split('\n')
            .find((line) => line.trim().startsWith('Content-Security-Policy:'));

        expect(contentSecurityPolicy).toContain('frame-src');
        expect(contentSecurityPolicy).toContain('https://embed.music.apple.com');
    });
});
