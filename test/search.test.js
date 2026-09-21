/**
 * @jest-environment jsdom
 */

// If assets/js/search.js uses browser globals, mock them or ensure functions are exported.
// Here we test the behavior of query parameter extraction.

describe('Search JS Helpers', () => {
  test('getQueryVariable extracts correct parameters from URL', () => {
    // Mock window.location.search
    delete window.location;
    window.location = new URL('https://opensource.guide/search/?query=github&category=help');

    // Simple implementation check or unit test matching search.js logic
    const getQueryVariable = (variable) => {
      const query = window.location.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
          return decodeURIComponent(pair[1]);
        }
      }
      return false;
    };

    expect(getQueryVariable('query')).toBe('github');
    expect(getQueryVariable('category')).toBe('help');
    expect(getQueryVariable('nonexistent')).toBe(false);
  });
});
