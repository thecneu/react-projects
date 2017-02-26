const articles = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ARTICLE':
      return {
        ...state,
        ...action.payload
      }
    case 'UPDATE_ARTICLE':
      return state.map((article, index) => {
        return index === parseInt(action.payload.id, 10) ? action.payload : article
      })
    case 'DELETE_ARTICLE':
      return [
        ...state.slice(0, action.payload.id),
        ...state.slice(action.payload.id + 1)
      ]
    default:
      return state
  }
}

export default articles


export const getArticles = (articles, sort) => {
  if (sort) {
    return articles.slice().sort((a, b) => sort.up ? a[sort.field] > b[sort.field] : a[sort.field] < b[sort.field])
  }

  return articles
}
