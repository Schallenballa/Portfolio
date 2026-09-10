const mockBuildManifest = jest.fn();
const mockStopWatching = jest.fn();
const mockWatchManifest = jest.fn(() => mockStopWatching);
const mockStartReactScripts = jest.fn();

jest.mock('../scripts/generate-unreleased-manifest', () => ({
    buildManifest: mockBuildManifest,
    watchManifest: mockWatchManifest,
}));
jest.mock('react-scripts/scripts/start', () => {
    mockStartReactScripts();
    return {};
});

describe('development server manifest bootstrap', () => {
    test('builds and watches the manifest and cleans up for process termination', () => {
        const handlers = {};
        const once = jest.spyOn(process, 'once').mockImplementation((event, handler) => {
            handlers[event] = handler;
            return process;
        });
        const exit = jest.spyOn(process, 'exit').mockImplementation(() => undefined);
        mockWatchManifest.mockReturnValue(mockStopWatching);

        require('../scripts/start-with-audio-manifest');

        expect(mockBuildManifest).toHaveBeenCalledTimes(1);
        expect(mockWatchManifest).toHaveBeenCalledTimes(1);
        expect(mockStartReactScripts).toHaveBeenCalledTimes(1);
        expect(once).toHaveBeenCalledWith('exit', mockStopWatching);

        handlers.exit();
        handlers.SIGINT();
        handlers.SIGTERM();

        expect(mockStopWatching).toHaveBeenCalledTimes(3);
        expect(exit).toHaveBeenCalledTimes(2);

        once.mockRestore();
        exit.mockRestore();
    });
});
