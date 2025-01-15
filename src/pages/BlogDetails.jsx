import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

function BlogDetails() {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;