import React, { useState } from "react";
import "./CommentsSection.css";
import { CommentCard } from "./CommentCard/CommentCard";

// const sampleData = [
//   {
//     id: "1",
//     content: "comment 1",
//     replies: [
//       {
//         id: "1.1",
//         content: "reply 1.1",
//         replies: [
//           {
//             id: "1.1.1",
//             content: "reply 1.1.1",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

export const CommentsSection = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [value, setValue] = useState("");

  const handleAddComment = () => {
    if (!value) return;
    else {
      const newComments = {
        id: `${commentsData.length + 1}`,
        content: value,
        replies: [],
      };
      setCommentsData([...commentsData, newComments]);
      setValue("");
    }
  };

  return (
    <div className="comments-section-container">
      <h1>Comments Section</h1>
      <div className="comments-inner-container">
        <div className="input-container">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-field" placeholder="type something here..." />
          <button type="button" className="add-button" onClick={() => handleAddComment()}>
            ADD
          </button>
        </div>
        <div className="display-comments">
          {commentsData &&
            commentsData.map((comment) => {
              return <CommentCard comment={comment} key={comment.id} commentsData={commentsData} setCommentsData={setCommentsData} />;
            })}
        </div>
      </div>
    </div>
  );
};
