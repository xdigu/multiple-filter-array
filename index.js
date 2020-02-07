'use strict'

const lodash = require('lodash/array');

function filterOneArray(arrayToBeFiltered, fieldToFilter, stringToFilter) {
  const arrayFiltered = arrayToBeFiltered.filter(item => {
    const itemKey = item[fieldToFilter];

    if (!itemKey)
      return;

    return itemKey
      .toString()
      .toUpperCase()
      .indexOf(stringToFilter.toString().toUpperCase()) != -1
  });

  return arrayFiltered;
}

function consolidateAllFilter(arrayToBeFiltered, arrayOfFilters) {
  const consolidatedFilters = [];

  arrayOfFilters.map(filter => {
    filterOneArray(arrayToBeFiltered, filter.field, filter.search)
      .forEach(item => consolidatedFilters.push(item))
  });

  return consolidatedFilters;
}

module.exports = {
  filterAndSortArray(items, filters, orderBy) {
    const sortAsc = (firstSortItem, secondSortItem) => firstSortItem[orderBy] - secondSortItem[orderBy];

    return lodash
      .union(consolidateAllFilter(items, filters))
      .sort(sortAsc);
  }
}
