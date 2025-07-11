import { useState } from "react";
import "./Comment.css";
import CommentsForm from "../CommentForm";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great job!",
      rating: 4,
    },
  ]);

  function addNewComment(comment) {
    setComments((currComments) => [...currComments, comment]);
  }

  return (
    <div className="container">
      <h3>All Comments</h3>

      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          <span>Rating: {comment.rating}</span>
          <p>- {comment.username}</p>
        </div>
      ))}
{/* 
      <hr /> */}

      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}
