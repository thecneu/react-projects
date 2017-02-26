import React from 'react';
import Article from './Article'

const List = ({articles}) => (
    <section className="list">
        {articles.map((article, index) => <Article key={index} {...article} />)}
    </section>
);

export default List;
