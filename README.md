# vue-storage-helper
A [storage-helper](https://github.com/MatteoGabriele/storage-helper) wrapper for Vue

### Docs
For the documentation please check `storage-helper` repository
[docs](https://github.com/MatteoGabriele/storage-helper#README)

### Usage
All available methods are the same as `storage-helper`, but here they are directly available in the Vue prototype object.

```js
import Vue from 'vue'
import VueStorageHelper from 'vue-storage-helper'

Vue.use(VueStorageHelper, { debug: true })

const component = new Vue({
  mounted () {
    this.$setItem('foo', 'bar')
  },
  computed: {
    value: function () {
      return this.$getItem('foo') // returns 'bar'
    }
  },
  methods: {
    removeStoredItem () {
      this.$removeItem('foo')
    },
    clearAllStoredItems () {
      this.$clearItems()
    }
  }
})

```
