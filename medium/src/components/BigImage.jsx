import React from 'react'
import './BigImage.css';
import Title from './Title'
import Description from './Description'
import Text from './Text'

const BigImage = ({id, title, description, image, next}) => (
  <div className="big-image" style={{backgroundImage: `url(${image})`}}>
    <div className="inner">
      <div className="fader">
        <Text>
          <a className="goto-next" onClick={e => { e.preventDefault(); next(); }}>Read Next</a>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </div>
    </div>
  </div>
)

export default BigImage