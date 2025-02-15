export default function (Alpine) {
  Alpine.directive('trim', (el, { modifiers }) => {
    let count = 5;
    let showDots = true;
    let respectWordBoundary = false;

    const countIndex = modifiers.indexOf('count');
    if (countIndex !== -1 && countIndex + 1 < modifiers.length) {
      count = modifiers[countIndex + 1];
    }

    if (modifiers.includes('nodots')) {
      showDots = false;
    }

    if (modifiers.includes('word')) {
      respectWordBoundary = true;
    }

    let text = el.innerHTML;
    if (text.length > count) {
      if (respectWordBoundary) {
        let lastSpace = text.substr(0, count).lastIndexOf(' ');

        if (lastSpace === -1) {
          let nextSpace = text.indexOf(' ', count);
          if (nextSpace !== -1 && nextSpace - count <= 5) {
            text = text.substr(0, nextSpace);
          } else {
            text = text.substr(0, count);
          }
        } else {
          text = text.substr(0, lastSpace);
        }
      } else {
        text = text.substr(0, count);
      }

      el.innerHTML = text + (showDots ? '...' : '');
    }
  });
}
