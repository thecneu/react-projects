import React from 'react'
import { connect } from 'react-redux'
import { updateArticle, deleteArticle, sortList } from '../actions'
import { getArticles } from '../reducers/articles'
import TableList from '../components/admin/TableList'

class Admin extends React.Component {
  render() {
    const { article, articles, children, updateArticle, deleteArticle, sortList, up } = this.props
    const showList = children ?
      React.cloneElement(children, {
        updateArticle: updateArticle,
        article: article
      })
      : <TableList articles={articles} deleteArticle={deleteArticle} onSort={sortList} up={up}></TableList>

    return (
      <main className="home">
        <div className="container">
            {showList}
        </div>
      </main>
    )
  }
}

const stateToProps = (state, ownProps) => {
  return {
    articles: getArticles(state.articles, state.sort),
    article: state.articles ? state.articles[ownProps.params.id] : {},
    up: state.sort.up
  }
}

export default connect(stateToProps, { updateArticle, deleteArticle, sortList })(Admin)
