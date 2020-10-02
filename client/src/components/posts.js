import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, changePosts] = useState(["test"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:3000/posts")
          .then((res) => res.json())
          .then((data) => changePosts(data));
        console.log("Successfully fetched data from api");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return posts.map((post, index) => {
    return (
      <div key={`${post._id}_${index}`}>
        <h3>{post.title}</h3>
        <p>{post.Description}</p>
        <p>{post.date}</p>
      </div>
    );
  });
};

export default Posts;
