import React, { Component } from 'react'
import Article from './Article'
import { getArticles } from '../api'

class ViewController extends Component {
  state = { index: 0, articles: [], animatePage: false }

  componentDidMount() {
    getArticles().then(articles => this.setState({ articles }))
  }

  nextArticle = () => {
    console.log('next article')
    // setState changePage true
    //
    // last step getArticles(this.next()).then(articles => this.setState({ index: this.next(), articles }))
    this.setState({
      animatePage: true
    })
  }

  next() {
    return this.state.index + 1 <= 5 ? this.state.index + 1 : 0
  }

  render() {
    return this.state.articles.length ?
      <main>
        <Article key={this.state.articles[0].id} article={this.state.articles[0]} type="current" animatePage={this.state.animatePage} />
        <Article key={this.state.articles[1].id} article={this.state.articles[1]} type="next content-hidden" animatePage={this.state.animatePage} next={this.nextArticle} />
      </main> : <main />
  }
}

export default ViewController
