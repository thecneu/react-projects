import React from 'react';

const Article = ({type, title, author, description}) => (
  <div className="article">
    <h2>{title}</h2>
    <span className="author">{author}</span>
    <p>{description}</p>
  </div>
);

export default Article;
