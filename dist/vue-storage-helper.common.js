/*!
 * vue-storage-helper v1.0.0
 * (c) 2017 Matteo Gabriele
 * Released under the ISC License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var storageHelper = require('storage-helper');
var storageHelper__default = _interopDefault(storageHelper);

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

module.exports = install;
