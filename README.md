# A simple way to filter an array with multiple filters

To install :
``` sh
$ npm i multiple-array-filter
```
or
``` sh
$ yarn add multiple-array-filter
```

usage: 

``` js
'use strict'

const { filterAndOrdenadeArray } = require('multiple-array-filter');

const items = [
  { name: 'Steve Jobs', id: 1 },
  { name: 'Elon Musk', id: 2 },
  { name: 'Robert C. Martin', id: 3 },
  { name: 'Bill Gates', id: 4 },
]

const filters = [
  { field: 'name', search: 'bil' },
  { field: 'id', search: 3 },
  { field: 'name', search: 'job' }
]

const filtered_array = filterAndOrdenadeArray(items, filters, 'id');

console.log(filtered_array);

```