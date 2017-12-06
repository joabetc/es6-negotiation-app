'use strict';

if (!Array.prototype.includes) {
  console.log('Polyfill para Array.includes aplicado');
  Array.prototype.includes = function (element) {
    return this.indexOf(element) != -1;
  };
}
//# sourceMappingURL=es6.js.map