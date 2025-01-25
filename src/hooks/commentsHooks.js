import { useState } from "react";

export const useCommentsHooks = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  const insertNode = (prevComments, commentId, newComment) => {
    return prevComments?.map((comment) => {
      if (comment.id === commentId) {
        // searching at the outer level
        return {
          ...comment,
          replies: [newComment, ...comment.replies],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        // searching at inner level of replies
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, newComment),
        };
      }
      return newComment;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      replies: [],
    };
    if (commentId) {
      // reply comment is to be added
      setComments((prev) => insertNode(prev, commentId, newComment));
    } else {
      // 1st comment to be added (at parent level)
      setComments((prev) => [newComment, ...prev]);
    }
  };

  const editComment = (commentId, newContent) => {
    const updatedComments = comments.map((item) => {
        if(item.id === commentId) {
            return {
                ...item,
                content: newContent
            }
        } else if(item.replies && item.replies.length > 0) {
            return {
                ...item,
                replies: editComment(commentId, newContent)
            }
        }
        return comments;
    })
    setComments(updatedComments);
  }

  const deleteComment = (commentId) => {
    const updatedComments = comments.map((item) => {
        if(item.id === commentId) {
            
        }
    })
  }

  return {
    comments,
    insertComment,
  };
};
