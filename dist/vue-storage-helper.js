/*!
 * vue-storage-helper v1.0.0
 * (c) 2017 Matteo Gabriele
 * Released under the ISC License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('storage-helper')) :
  typeof define === 'function' && define.amd ? define(['storage-helper'], factory) :
  (global.VueStorageHelper = factory(global.storageHelper));
}(this, (function (storageHelper) { 'use strict';

var storageHelper__default = 'default' in storageHelper ? storageHelper['default'] : storageHelper;

/**
 * This is just a wrapper for Vue.
 * Storage Helper repository: https://github.com/MatteoGabriele/storage-helper
 */
function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var debug = !!options.debug;
  storageHelper.showStorageLogger(debug);

  Vue.prototype.$setItem = storageHelper__default.setItem;
  Vue.prototype.$getItem = storageHelper__default.getItem;
  Vue.prototype.$removeItem = storageHelper__default.removeItem;
  Vue.prototype.$clear = storageHelper__default.clear;
}

return install;

})));
