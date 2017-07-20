import articles from './articles.json'

export const getArticles = (index = 0) => {
  return new Promise((resolve, reject) => setTimeout(() =>
    resolve(articles.slice(index, index + 2)), 420)
  )
}

export const nextArticle = (index) => {
  const next = index + 1 >= 5 ? 5 : index + 1
  return articles[next]
}