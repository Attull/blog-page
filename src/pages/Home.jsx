import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

function Home() {
  const { blogs } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h1 className="text-center">Blogs</h1>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="list-group">
        {filteredBlogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`} className="list-group-item list-group-item-action">
            {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
