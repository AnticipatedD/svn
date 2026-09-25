/**
 * @jest-environment jsdom
 */

// Import the actual production search logic mapping function configurations
const { getQueryVariable } = require('../assets/js/search.js');

describe('Search JS Helpers - Production Source Execution', () => {
  beforeEach(() => {
    // Setup clean window context parameters prior to running each suite step
    delete window.location;
  });

  test('getQueryVariable extracts correct parameters from URL', () => {
    // Mock the window.location context natively utilizing the JSdom layer
    window.location = new URL('https://opensource.guide/search/?query=github&category=help');

    // Run evaluations directly against the real imported application file logic
    expect(getQueryVariable('query')).toBe('github');
    expect(getQueryVariable('category')).toBe('help');
    expect(getQueryVariable('nonexistent')).toBe(false);
  });
});
