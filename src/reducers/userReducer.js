const initialState = {
  sortByField: '',
  sortOrder: '',
  filterQuery: ''
};
const user = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_SORTBY':
      return Object.assign({}, prevState, {
        sortByField: action.fieldId,
        sortOrder: prevState.sortOrder === 'ASC' && action.fieldId === prevState.sortByField ? 'DESC' : 'ASC'
      });
    case 'SET_FILTER_QUERY':
      return Object.assign({}, prevState, {
        filterQuery: action.query   
      })
    default:
      return prevState
  }
}

export default user;