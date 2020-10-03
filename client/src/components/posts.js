import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, changePosts] = useState([]);

  const fetchPosts = async () => {
    try {
      await fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => changePosts(data));
      console.log("Successfully fetched data from api");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
    //keep checking the API for data changes every 10 seconds
    const fetchDelay = setInterval(() => {
      fetchPosts();
    }, 10000);
    //clears if the user exits the page
    return () => clearInterval(fetchDelay);
  }, []);

  return posts.map((post, index) => {
    return (
      <div key={`${post._id}_${index}`}>
        <h3>{post.title}</h3>
        <p>{post.Description}</p>
        <p>{post.date}</p>
        <button>Delete</button>
      </div>
    );
  });
};

export default Posts;
