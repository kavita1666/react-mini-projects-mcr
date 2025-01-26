import React from "react";
import "./CommentCard.css"; 

export const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="comment-with-reply">
        <h3>{comment.content}</h3>
        <button className="reply-button" onClick={() => {}}>Reply</button>
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
