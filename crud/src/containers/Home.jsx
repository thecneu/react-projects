import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

const Home = ({articles}) => (
  <main className="home">
    <div className="container">
        <List articles={articles}></List>
    </div>
  </main>
)

export default connect((state) => ({articles: state.articles}))(Home)
