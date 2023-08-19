import { useState } from "react";

export default function NoteForm({ notes }) {
  const [comment, setComment] = useState({ commenter: "", comment: "" });

  const handleComment = (e) => {
    setComment({ commenter: comment.commenter, comment: e.target.value });
  };

  const handleName = (e) => {
    setComment({ commenter: e.target.value, comment: comment.comment });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.commenter && comment.comment) {
      notes.push(comment);
      setComment({ commenter: "", comment: "" });
    } else {
      alert("You have to fill in the fields to say something!");
    }
  };

  return (
    <div className="one-one">
      <form>
        <label>Name</label>
        <input type="text" value={comment["commenter"]} onChange={handleName} />
        <label>Comment</label>
        <input
          type="text"
          value={comment["comment"]}
          id="comment"
          onChange={handleComment}
        />
      </form>
      <button type="submit" value="Add Note" onClick={handleSubmit}>
        Add Note
      </button>
      <p className="counter">
        {notes.length} note{notes.length != 1 ? "s" : ""} so far...
      </p>
      <ul>
        {notes.map((note) => {
          return (
            <li>
              {note.commenter} says "{note.comment}"
            </li>
          );
        })}
      </ul>
    </div>
  );
}
