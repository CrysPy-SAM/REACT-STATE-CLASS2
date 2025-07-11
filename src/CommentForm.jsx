import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  function handleInputChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewComment(formData);
    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  }

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
        />

        <label htmlFor="remark">Remarks</label>
        <textarea
          name="remark"
          placeholder="add few remarks"
          value={formData.remark}
          onChange={handleInputChange}
          id="remark"
        />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          min={1}
          max={5}
          id="rating"
        />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
