import React, { useEffect, useState } from 'react';
import Header from './Header';

function PostList({ darkMode, toggleDarkMode }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);  

  return (
    
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container my-5">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post-preview">
            <h3>{post.title}</h3>
            <p>{new Date(post.date_created).toLocaleString()}</p>
            <p>{post.content.substring(0, 100)}...</p>
            {/* You can add a link to view full details */}
          </div>
        ))
      )}
      </div>
    </div>
  );
}

export default PostList;
