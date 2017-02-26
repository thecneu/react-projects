import React from 'react';
import { Link } from 'react-router'

const Article = ({id, title, author, description, onDelete}) => (
  <tr className="article">
    <td><Link to={`/admin/edit/${id}`}>{title}</Link></td>
    <td>{author}</td>
    <td>{description}</td>
    <td><button onClick={() => onDelete(id)}>Delete</button></td>
  </tr>
);

export default Article;
