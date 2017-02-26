import React from 'react';

const Form = ({router, onUpdateArticle, id, title, author, description}) => (
    <form onSubmit={(e) => {
      e.preventDefault();
      const form = e.currentTarget
      onUpdateArticle({
        id,
        title: form.title.value,
        author: form.author.value,
        description: form.description.value
      })
      router.push('/admin')
    }}>
      <div className="form-group">
        <input type="text" placeholder="Title" name="title" defaultValue={title} />
      </div>

      <div className="form-group">
        <input type="text" placeholder="Author" name="author" defaultValue={author} />
      </div>

      <div className="form-group">
        <textarea placeholder="Description" name="description" cols="30" rows="10" defaultValue={description}></textarea>
      </div>

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
);

export default Form;
