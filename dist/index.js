var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
});
module.exports = __toCommonJS(src_exports);
function src_default(Alpine) {
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
