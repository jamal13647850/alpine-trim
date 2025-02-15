# Alpine.js Trim Directive

A custom Alpine.js directive that provides text trimming capabilities with various customization options.

## Features

- Trim text to a specified number of characters
- Optional ellipsis (...) at the end of trimmed text
- Word boundary respect to prevent word splitting
- Configurable through modifiers

## Installation

1. Install by npm

```bash
npm i alpine-trim
```

2. Register the directive in your application:

```javascript
// main.js or app.js
import Alpine from 'alpinejs';
import alpinetrim from 'alpine-trim'
Alpine.plugin(alpinetrim)
Alpine.start();
```

## Usage

### Basic Usage
```html
<p x-trim>This is a long text that needs to be trimmed</p>
```
By default, the text will be trimmed to 5 characters and an ellipsis will be added at the end.

### Setting Character Count
```html
<p x-trim.count.10>This is a long text</p>
```
The text will be trimmed to 10 characters.

### Removing Ellipsis
```html
<p x-trim.nodots>This is a long text</p>
```
The text will be trimmed but no ellipsis will be added at the end.

### Respecting Word Boundaries
```html
<p x-trim.word>This is a long text</p>
```
The text will be trimmed at word boundaries to prevent word splitting.

### Combining Features
```html
<p x-trim.count.15.word.nodots>This is a long text</p>
```
The text will be trimmed to 15 characters, respecting word boundaries, and no ellipsis will be shown.

## How It Works

### Defaults
- Character count: 5
- Show ellipsis: enabled
- Word boundary respect: disabled

### Modifiers
- `count.{number}`: Set the character count
- `nodots`: Remove the ellipsis
- `word`: Enable word boundary respect

### Word Boundary Logic
1. First looks for the last space before the trim point
2. If no space is found, looks for the first space after the trim point (up to 5 characters)
3. If no suitable space is found, trims at the original point

## Examples

```html
<!-- Trim to 10 characters with ellipsis -->
<p x-trim.count.10>This is a long text</p>
<!-- Output: "This is a..." -->

<!-- Trim with word boundary respect -->
<p x-trim.count.10.word>This is a long text</p>
<!-- Output: "This is..." -->

<!-- No ellipsis and word boundary respect -->
<p x-trim.count.10.word.nodots>This is a long text</p>
<!-- Output: "This is" -->
```

## Technical Details

### Directive Implementation
```javascript
Alpine.directive('trim', (el, { modifiers }) => {
  let count = 5;
  let showDots = true;
  let respectWordBoundary = false;

  // Get count from modifiers
  const countIndex = modifiers.indexOf('count');
  if (countIndex !== -1 && countIndex + 1 < modifiers.length) {
    count = modifiers[countIndex + 1];
  }

  // Check for nodots modifier
  if (modifiers.includes('nodots')) {
    showDots = false;
  }

  // Check for word boundary modifier
  if (modifiers.includes('word')) {
    respectWordBoundary = true;
  }

  // Trim logic implementation
  // ... (rest of the implementation)
});
```

### Performance Considerations
- The directive operates directly on the DOM element's innerHTML
- Word boundary checking is optimized to look only 5 characters ahead
- All operations are performed synchronously

## Browser Support
- Works with all modern browsers that support Alpine.js
- No additional polyfills required
- Tested with Alpine.js v3.x and above

## Contributing
Contributions to improve this directive are welcome. Please follow these steps:
1. Create a new branch for your changes
2. Add appropriate tests
3. Document your code
4. Submit a Pull Request

## License
This project is licensed under the MIT License.

## Acknowledgments
- Inspired by the need for flexible text trimming in Alpine.js applications
- Built with best practices from the Alpine.js community