const sort = (state = false, action) => {
  switch(action.type) {
    case 'SORT_ARTICLES':
      const { field, up } = action.payload
      return {
        field,
        up
      }
    default:
      return state;
  }
}

export default sort
