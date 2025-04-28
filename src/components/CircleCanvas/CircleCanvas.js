import React, { useRef, useState } from "react";

const CircleCanvas = () => {
  const [lists, setLists] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const devRef = useRef();

  const handleScreenClick = (e) => {
    const rect = devRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newPosition = {
      id: Date.now(),
      x,
      y,
    };
    setLists([...lists, newPosition]);
  };

//   console.log("----here", lists, redoStack);

  const handleUndo = () => {
    if (lists.length === 0) return;
    const newLists = [...lists];
    const lastItem = newLists.pop();
    setLists(newLists);
    setRedoStack((prev) => [...prev, lastItem]);
  }

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const newRedoStack = [...redoStack];
    const itemToRedo = newRedoStack.pop();
    setLists((prev) => [...prev, itemToRedo]);
    setRedoStack(newRedoStack);
  }

  return (
    <div>
      <div>
        <button onClick={handleUndo} disabled={lists.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={redoStack.length === 0}>
          Redo
        </button>
      </div>
      <div
        onClick={(e) => handleScreenClick(e)}
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          position: "relative",
        }}
        ref={devRef}
      >
        {lists.map((item) => (
          <div
            key={item.id}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "black",
              position: "absolute",
              left: `${item.x}px`,
              top: `${item.y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleCanvas;
