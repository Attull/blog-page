import React, { useState } from 'react';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

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
      {/* Render blogs with search and filter functionality */}
    </div>
  );
}

export default Home;