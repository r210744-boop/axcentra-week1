import React from "react";

function PostCard({ post }) {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p><b>Category:</b> {post.category}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default PostCard;
