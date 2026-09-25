/**
 * @jest-environment jsdom
 */

// Initialize a functional DOM layer and bind jQuery to global context bounds
const \$ = require('jquery');
global. = ;
global.jQuery = \$;

// Load the production Table of Contents interaction script
require('../assets/js/toc.js');

describe('Table of Contents UI Navigation Interactions Suite', () => {
  beforeEach(() => {
    // Setup clean mock target layout nodes inside the virtual document space
    document.body.innerHTML = `
      <button class="toc-trigger">Table of Contents</button>
      <ul class="toc-list">
        <li><a href="#intro">Introduction</a></li>
      </ul>
    `;
    
    // Trigger the document-ready event handlers bound by the script
    \$(document).trigger('ready');
  });

  test('clicking the toc-trigger element should open the navigation tray', () => {
    const trigger = ('.toc-trigger');
    const list = ('.toc-list');

    // Initially, visibility tracking classes must not be present
    expect(\$trigger.hasClass('toc-open')).toBe(false);
    expect(\$list.hasClass('is-shown')).toBe(false);

    // Act: Simulate a click event on the UI button element
    \$trigger.click();

    // Assert: Navigation classes should toggle active
    expect(\$trigger.hasClass('toc-open')).toBe(true);
    expect(\$list.hasClass('is-shown')).toBe(true);
  });

  test('clicking elsewhere in the tracking document context must hide the open navigation tray', () => {
    const trigger = ('.toc-trigger');
    const list = ('.toc-list');

    // Set state to open initially
    \(trigger.addClass('toc-open');\)list.addClass('is-shown');

    // Act: Click anywhere else on the document layer
    \$(document).click();

    // Assert: Classes must be cleanly stripped from elements
    expect(\$trigger.hasClass('toc-open')).toBe(false);
    expect(\$list.hasClass('is-shown')).toBe(false);
  });
});
