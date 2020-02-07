
interface filter {
  field: String,
  search: String
}

/**
 * Function to filter an array from its items an ordernated it self
 * @param items Array of items to filter
 * @param filters Array of filters
 * @param orderBy Which key from the object it will be ordernated
 * 
 * @returns Array filtered and orderned
 */
export function filterAndOrdenateArray(items: Array<Object>, filters: Array<filter>, orderBy: String): Array<Object>
