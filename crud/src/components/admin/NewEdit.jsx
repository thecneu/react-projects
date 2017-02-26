import React from 'react';
import Form from './Form'

const NewEdit = ({router, params, article, updateArticle}) => {
    return (
      <section>
        <h1>{params.id ? 'Edit' : 'New'} Article</h1>
        <Form {...article} router={router} id={params.id} onUpdateArticle={updateArticle} />
      </section>
    )
};

export default NewEdit;
