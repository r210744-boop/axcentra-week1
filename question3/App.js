import React, { useState } from "react";
import postsData from "./data/posts.json";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = postsData.filter((post) => {
    const matchSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || post.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container">

      <h1>React Blog UI</h1>

      <input
        type="text"
        placeholder="Search post..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Programming</option>
        <option>Lifestyle</option>
        <option>Health</option>
      </select>

      <div className="posts">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
}

export default App;
