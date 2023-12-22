import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './post/Post.jsx';
import './Timeline.css';

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getPosts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData(); // Fetching posts data when the component mounts
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.post_id}
          username={post.username}
          imageUrl={post.post_image_url}
          comments = {post.post_caption}
        />
      ))}
    
    </div>
  ); // rendering the Post component for each post in the posts array
}

export default Timeline;