import React, { useState } from "react";
import "./CommentCard.css";

export const CommentCard = ({ comment }) => {
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleReply = () => {
    setReplyBoxOpen(!replyBoxOpen);
  };

  return (
    <>
      <div className="comment-with-reply">
        <h3>{comment.content}</h3>
        <p>Votes: 0</p>
        <p>{Date.now()}</p>
        <div>
          <button className="button" onClick={handleReply}>
            {replyBoxOpen ? "Hide Reply" : "Reply"}
          </button>
          <button className="button" onClick={() => {}}>
            Edit
          </button>
          <button className="button" onClick={() => {}}>
            Delete
          </button>
        </div>
        {replyBoxOpen && (
          <div className="reply-box">
            <textarea value={replyContent} onChange={(e) => setReplyContent(e.target.value)} className="reply-input" />
            <button onClick={() => {}} className="button submit-reply">
              Submit
            </button>
          </div>
        )}
      </div>

      {comment.replies &&
        comment.replies.length > 0 &&
        comment.replies.map((reply) => {
          return (
            <li style={{ listStyleType: "none", paddingLeft: "20px" }}>
              <CommentCard comment={reply} />
            </li>
          );
        })}
    </>
  );
};
