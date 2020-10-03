import React from "react";
import Posts from "./components/posts";
import "./App.css";

function App() {
  const AddNewPost = (e) => {
    e.preventDefault();
    const title = document.querySelector("#postTitle").value;
    const desc = document.querySelector("#postDesc").value;
    let newPost = {
      title: title,
      description: desc,
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
    document.querySelector("#newPostForm").reset();
  };
  return (
    <div>
      <h1>Luke's API</h1>
      <Posts />
      <form onSubmit={AddNewPost} id="newPostForm">
        <input
          id="postTitle"
          placeholder="Please enter the title"
          required={true}
        ></input>
        <input
          id="postDesc"
          placeholder="Please enter the desc"
          required={true}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
