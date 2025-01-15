import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Details - {id}</h1>
      {/* Display blog details */}
    </div>
  );
}

export default BlogDetails;