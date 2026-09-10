const mockRender = jest.fn();
const mockCreateRoot = jest.fn(() => ({ render: mockRender }));

jest.mock('react-dom/client', () => ({ createRoot: mockCreateRoot }));
jest.mock('./App', () => () => <div>Portfolio app</div>);

test('mounts the application at the root element', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
    mockCreateRoot.mockReturnValue({ render: mockRender });

    require('./index');

    expect(mockCreateRoot).toHaveBeenCalledWith(rootElement);
    expect(mockRender).toHaveBeenCalledTimes(1);
});
