export default function (Alpine) {
  Alpine.directive('trim', (el, { modifiers }) => {
    let count = 5;
    const index = modifiers.indexOf('count');
    if (index !== -1 && index + 1 < modifiers.length) {
      count = modifiers[index + 1];
    }

    el.innerHTML =
      el.innerHTML.length > count
        ? el.innerHTML.substring(0, count) + '...'
        : el.innerHTML;
  });
}
