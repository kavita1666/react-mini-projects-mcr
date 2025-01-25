import { useState } from "react";
import "./comments.css";
import { CommentCard } from "./CommentCard/CommentCard";
import { useCommentsHooks } from "../../hooks/commentsHooks";

const commentsData = [
  {
    id: 1,
    content: "comment 1",
    replies: [],
  },
];
export const Comments = () => {
  const [value, setValue] = useState("");
  const { comments, insertComment } = useCommentsHooks(commentsData);

  const onAddCommentHandler = (commentId, commentInput) => {
    if (commentInput) {
      insertComment(commentId, commentInput);
      setValue("");
    }
  };

  console.log(comments);

  return (
    <div className="comments-container-outer">
      <div className="comments-input">
        <div className="input-container">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-field" placeholder="type something here..." />
          <button type="button" className="add-button" onClick={() => onAddCommentHandler(undefined, value)}>
            COMMENT
          </button>
        </div>
        <div className="comments-container">
          {comments?.map((item) => (
            <CommentCard commentsData={item} key={item.id} handleAddComments={(commentId, commentInput) => onAddCommentHandler(commentId, commentInput)} />
          ))}
        </div>
      </div>
    </div>
  );
};
