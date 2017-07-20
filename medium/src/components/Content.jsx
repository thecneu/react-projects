import React from 'react'
import Title from './Title'
import Description from './Description'
import Text from './Text'

const Content = ({title, description, content, author, date}) => (
  <div className="content">
    <h3 className="byline">
      Published <time>{date}</time> by <span className="author">{author}</span>
    </h3>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Text content={content} />
  </div>
)

export default Content