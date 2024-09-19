// jest.setup.js
import 'whatwg-fetch'; // A polyfill for fetch

// Optionally, mock global fetch here if needed
global.fetch = jest.fn();
