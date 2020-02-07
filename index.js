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
      .includes(
        stringToFilter
          .toString()
          .toUpperCase()
      );
  });

  return arrayFiltered;
}

function consolidateAllFilter(arrayToBeFiltered, arrayOfFilters) {
  const consolidatedFilters = [];

  arrayOfFilters.map(filter => {
    const search = [];

    typeof filter.search !== "object" ? search.push(filter.search) : search.push(...filter.search);

    search.forEach(stringToSearch => {
      filterOneArray(arrayToBeFiltered, filter.field, stringToSearch)
        .forEach(item => consolidatedFilters.push(item));
    });
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
