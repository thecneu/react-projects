export const updateArticle = ({id, author, title, description}) => {
  const type = id ? 'UPDATE_ARTICLE' : 'NEW_ARTICLE'
  return {
    type,
    payload: {
      id,
      author,
      title,
      description
    }
  }
}

export const deleteArticle = (id) => ({
  type: 'DELETE_ARTICLE',
  payload: {
    id
  }
})

export const sortList = (field, up) => {console.log(up); return ({
  type: 'SORT_ARTICLES',
  payload: {
    field,
    up: !up
  }
})}
