const fs = require('fs');

jest.mock('fs', () => ({
    existsSync: jest.fn(),
    mkdirSync: jest.fn(),
    readFileSync: jest.fn(),
    readdirSync: jest.fn(),
    watch: jest.fn(),
    writeFileSync: jest.fn(),
}));

const { buildManifest, watchManifest } = require('../scripts/generate-unreleased-manifest');

describe('unreleased audio manifest generator', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.clearAllMocks();
        fs.existsSync.mockReturnValue(false);
        fs.readdirSync.mockReturnValue([
            { name: 'Zulu.m4a', isFile: () => true },
            { name: 'notes.txt', isFile: () => true },
            { name: 'Álbum clip.M4A', isFile: () => true },
            { name: 'folder.m4a', isFile: () => false },
        ]);
    });

    afterEach(() => jest.useRealTimers());

    test('writes a sorted, URL-encoded catalog when its contents change', () => {
        const tracks = buildManifest();

        expect(tracks).toEqual([
            '/audio/unreleased/%C3%81lbum%20clip.M4A',
            '/audio/unreleased/Zulu.m4a',
        ]);
        expect(fs.mkdirSync).toHaveBeenCalledTimes(2);
        expect(fs.writeFileSync).toHaveBeenCalledWith(
            expect.stringContaining('src/generated/unreleasedTracks.js'),
            expect.stringContaining('const unreleasedTracks =')
        );
    });

    test('does not rewrite an unchanged catalog', () => {
        buildManifest();
        const generatedContents = fs.writeFileSync.mock.calls[0][1];
        jest.clearAllMocks();
        fs.existsSync.mockReturnValue(true);
        fs.readFileSync.mockReturnValue(generatedContents);
        fs.readdirSync.mockReturnValue([
            { name: 'Zulu.m4a', isFile: () => true },
            { name: 'Álbum clip.M4A', isFile: () => true },
        ]);

        buildManifest();

        expect(fs.writeFileSync).not.toHaveBeenCalled();
    });

    test('debounces file changes and closes the watcher', () => {
        let onChange;
        const close = jest.fn();
        fs.watch.mockImplementation((directory, callback) => {
            onChange = callback;
            return { close };
        });

        const stopWatching = watchManifest();
        onChange();
        onChange();
        jest.advanceTimersByTime(100);
        stopWatching();

        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(close).toHaveBeenCalledTimes(1);
    });
});
