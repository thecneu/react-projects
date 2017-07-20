import React from 'react'
import classnames from 'classnames'
import './Article.css';
import BigImage from './BigImage'
import Content from './Content'

const Article = ({article, type, next, animatePage}) => {
  let $el = undefined

  return (
    <article
      ref={el => $el = el}
      className={classnames(['page', type, {'fade-up-out': animatePage && type === 'current'}])}
      style={(animatePage && type === 'next') ? {transform: `translate3d(0, -${$el.getBoundingClientRect()}px, 0)`} : {}}
    >
      <BigImage {...article} next={next} />
      <Content {...article} />
    </article>
  )
}

export default Article