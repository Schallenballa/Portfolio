jest.mock('./App', () => ({
    __esModule: true,
    default: 'portfolio-router',
}));
jest.mock('react-router-sitemap', () => {
    const MockSitemap = jest.fn(function sitemap() {
        this.build = MockSitemap.mockBuild;
        this.save = MockSitemap.mockSave;
    });
    MockSitemap.mockBuild = jest.fn(function build() { return this; });
    MockSitemap.mockSave = jest.fn();

    return { __esModule: true, default: MockSitemap };
}, { virtual: true });

test('builds the production sitemap from the application router', () => {
    const Sitemap = require('react-router-sitemap').default;
    require('./sitemap-builder');

    expect(Sitemap).toHaveBeenCalledWith('portfolio-router');
    expect(Sitemap.mockBuild).toHaveBeenCalledWith('https://www.zacharyschallenberger.com');
    expect(Sitemap.mockSave).toHaveBeenCalledWith('../public/sitemap.xml');
});
