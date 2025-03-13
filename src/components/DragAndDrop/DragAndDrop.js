import React, { useEffect, useState } from "react";
import "./DragAndDrop.css";

// const defaultNotes = [
//   {
//     id: 1,
//     text: "sticky note 1",
//   },
//   {
//     id: 2,
//     text: "sticky note 2",
//   },
// ];

export const DragAndDrop = () => {
  const [stickyNotes, setStickyNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getLocation = () => {
    const maxX = window.innerWidth - 400;
    const maxY = window.innerHeight - 400;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleAddNotes = () => {
    if (inputValue.trim() !== "") {
      const position = getLocation();
      const newNote = {
        id: Date.now(),
        text: inputValue,
        position,
      };
      setStickyNotes([...stickyNotes, newNote]);
      localStorage.setItem("stickyNotes", JSON.stringify([...stickyNotes, newNote]));
      setInputValue("");
    }
  };

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("stickyNotes"));
    if (storedNotes) {
      setStickyNotes(storedNotes);
    }
  }, []); // Empty dependency array ensures this runs once

  // useEffect(() => {
  //   const storedNotes = JSON.parse(localStorage.getItem("stickyNotes")) || [];
  //   const updatedNotes = stickyNotes.map((note) => {
  //     const findNote = storedNotes.find((stored) => stored.id === note.id);
  //     return findNote ? { ...note, position: findNote.position } : note;
  //   });
  //   setStickyNotes(updatedNotes);
  //   localStorage.setItem("stickyNotes", JSON.stringify(updatedNotes));
  // }, [stickyNotes.length]);

  // console.log(stickyNotes);

  return (
    <div className="drag-drop-container">
      <h1>DragAndDrop</h1>
      <div className="input-sticky-notes">
        <input placeholder="type something here..." className="input-fields" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className="add-button" onClick={handleAddNotes}>
          Add Notes
        </button>
      </div>
      <div className="notes-container">
        {stickyNotes &&
          stickyNotes.map((item, index) => {
            return (
              <div key={index} className="sticky-note" style={{ position: "absolute", top: `${item.position?.y}px`, left: `${item.position?.x}px` }}>
                {item.text}
              </div>
            );
          })}
      </div>
    </div>
  );
};
