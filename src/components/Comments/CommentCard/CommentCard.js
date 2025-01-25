import { useState } from "react";
import "./CommentCard.css";

export const CommentCard = ({ commentsData, handleAddComments, key }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const handleAddReply = (commentId, commentInput) => {
    if (commentInput.trim().length > 0) {
      handleAddComments(commentId, commentInput);
      setCommentInput("");
      setIsReplying(false);
    } else {
      setIsReplying(false);
    }
  };

  const handleDeleteItem = () => {
    const newList = commentsData.filter();
  };

  return (
    <>
      <div className="comment-card-container">
        <div>{commentsData?.content}</div>
        <button type="button" className="action-btn" onClick={handleDeleteItem}>
          delete
        </button>
      </div>
    </>
  );
};
