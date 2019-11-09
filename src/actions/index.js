export const sortBy = fieldId => ({
  type: 'SET_SORTBY',
  fieldId
});

export const setFilterQuery = query => ({
  type: 'SET_FILTER_QUERY',
  query
});
