import React, { useState } from "react";
import "./CommentCard.css";

export const CommentCard = ({ comment, commentsData, setCommentsData }) => {
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  // function with recursion
  const handleInsertReply = (replyId, replyData) => {
    const newComments = replyData.map((item) => {
      if (item.id === replyId) {
        const lastDigit = item.id.split(".").pop();
        return {
          ...item,
          replies: [...item.replies, { id: item.id + "." + lastDigit + 1, content: replyContent, replies: [] }],
        };
      } else if (item.replies && item.replies.length > 0) {
        return {
          ...item,
          replies: handleInsertReply(replyId, item.replies),
        };
      }
      return item;
    });
    return newComments;
  };

  // handle reply
  const handleSubmitReply = (replyId) => {
    if (replyContent.trim().length > 0) {
      console.log(replyId, handleInsertReply(replyId, commentsData));
      setCommentsData((prevComments) => handleInsertReply(replyId, prevComments));
      setReplyBoxOpen(!replyBoxOpen);
      setReplyContent("");
    }
  };

  const handleEditCommentRecursion = (commentId, data) => {
    const newComments = data.map((item) => {
      if (item.id === commentId) {
        return {
          ...item,
          content: replyContent,
        };
      } else if (item.replies && item.replies.length > 0) {
        return {
          ...item,
          replies: handleEditCommentRecursion(commentId, item.replies),
        };
      }
      return item;
    });
    return newComments;
  };

  //handle Edit
  const handleEditComment = (commentId) => {
    setReplyBoxOpen(true);
    setReplyContent(comment.content);
    setIsEditMode(true);
    console.log("---here ", replyContent, comment.content);
    if (replyContent !== comment.content) {
      setCommentsData((prevComments) => handleEditCommentRecursion(commentId, prevComments));
    }
  };

  const handleDeleteCommentRecursion = (commentId, data) => {
    return data.reduce((acc, comment) => {
      if (comment.id === commentId) {
        return acc;
      } else if (comment.replies && comment.replies.length > 0) {
        comment.replies = handleDeleteCommentRecursion(commentId, comment.replies);
      }
      return [...acc, comment];
    }, []);
  };

  // handle Delete
  const handleDeleteComment = (commentId) => {
    setCommentsData((prevComments) => handleDeleteCommentRecursion(commentId, prevComments));
  };

  return (
    <>
      <div className="comment-with-reply">
        <h3>{comment.content}</h3>
        <p>Id: {comment.id}</p>
        <div>
          <button className="button" onClick={() => setReplyBoxOpen(!replyBoxOpen)}>
            {replyBoxOpen ? "Hide Reply" : "Reply"}
          </button>
          <button className="button" onClick={() => handleEditComment(comment.id)}>
            Edit
          </button>
          <button className="button" onClick={() => handleDeleteComment(comment.id)}>
            Delete
          </button>
        </div>
        {replyBoxOpen && (
          <div className="reply-box">
            <textarea value={replyContent} onChange={(e) => setReplyContent(e.target.value)} className="reply-input" />
            <button onClick={() => (isEditMode ? handleEditComment(comment.id) : handleSubmitReply(comment.id))} className="button submit-reply">
              {isEditMode ? "Edit" : "Submit"}
            </button>
          </div>
        )}
      </div>

      {comment.replies &&
        comment.replies.length > 0 &&
        comment.replies.map((reply) => {
          return (
            <div style={{ listStyleType: "none", paddingLeft: "20px" }}>
              <CommentCard comment={reply} key={reply.id} commentsData={reply.replies} setCommentsData={setCommentsData} />
            </div>
          );
        })}
    </>
  );
};
