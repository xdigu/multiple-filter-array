![NPM Version](https://img.shields.io/github/package-json/v/xdigu/multiple-filter-array) ![NPM Downloads](https://img.shields.io/npm/dw/multiple-array-filter) ![NPM License](https://img.shields.io/npm/l/multiple-array-filter)

# A simple way to filter an array with multiple filters

To install :
``` sh
$ npm i multiple-array-filter
```
or
``` sh
$ yarn add multiple-array-filter
```

Usage:

This library was made to help you to filter an array with a lot of filters, 
imagine that you have an app with a flatlist that contains a list of user, 
so to each user there is a lot of fieldes to search to.

You can make a single filter field and than search into each user's field 
with this library. Another approach is creating dinamics filters where each 
filter is a field of your user and than you pass this to the library.

``` js
'use strict'

const { filterAndSortArray } = require('multiple-array-filter');

const items = [
  { name: 'Steve Jobs', id: 1 },
  { name: 'Elon Musk', id: 2 },
  { name: 'Robert C. Martin', id: 3 },
  { name: 'Bill Gates', id: 4 },
]

const filters = [
  { field: 'name', search: ['bil', 'job'] },
  { field: 'id', search: 3 },
]

const filtered_array = filterAndSortArray(items, filters, 'id');

console.log(filtered_array);
/**
 * [
 *  { name: 'Steve Jobs', id: 1 },
 *  { name: 'Robert C. Martin', id: 3 },
 *  { name: 'Bill Gates', id: 4 }
 * ]
 */

```
