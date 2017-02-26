import React from 'react';
import TableArticle from './TableArticle'

const TableList = ({articles, deleteArticle, onSort, up}) => (
    <table className="table-list">
        <thead>
          <tr>{Object.keys(articles[0]).slice(0).map(key =>
            <th key={key} onClick={() => onSort(key, up)}>{key}</th>
          )}</tr>
        </thead>
        <tbody>
          {articles.map((article, index) => <TableArticle key={index} id={index} onDelete={deleteArticle} {...article} />)}
        </tbody>
    </table>
);

export default TableList;
