import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', tags: ['React', 'JavaScript'], content: 'This is the first blog content.' },
    { id: 2, title: 'Second Blog', tags: ['Bootstrap', 'CSS'], content: 'This is the second blog content.' },
  ]);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };