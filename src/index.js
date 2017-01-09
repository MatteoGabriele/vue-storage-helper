import storageHelper, { showStorageLogger } from 'storage-helper'

/**
 * This is just a wrapper for Vue.
 * Storage Helper repository: https://github.com/MatteoGabriele/storage-helper
 */
export default function install (Vue, options = {}) {
  const debug = !!options.debug
  showStorageLogger(debug)

  Vue.prototype.$setItem = storageHelper.setItem
  Vue.prototype.$getItem = storageHelper.getItem
  Vue.prototype.$removeItem = storageHelper.removeItem
  Vue.prototype.$clear = storageHelper.clear
}
