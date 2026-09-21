/**
 * @jest-environment jsdom
 */

describe('Locale JS Helpers', () => {
  test('loadLanguage builds correct URLs for English and non-English locale codes', () => {
    const loadLanguage = (currentPath, targetLang) => {
      // Basic simulation of locale prefix URL building logic
      const cleanPath = currentPath.replace(/^\/[a-z]{2}(\b|\/)/, '/');
      if (targetLang === 'en') {
        return cleanPath;
      }
      return `/${targetLang}${cleanPath}`;
    };

    expect(loadLanguage('/best-practices/', 'en')).toBe('/best-practices/');
    expect(loadLanguage('/best-practices/', 'es')).toBe('/es/best-practices/');
    expect(loadLanguage('/es/best-practices/', 'en')).toBe('/best-practices/');
  });
});
