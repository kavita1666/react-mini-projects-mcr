import { useState } from "react";
import "./todolist.css";
import { TodoCard } from "./TodoCard/TodoCard";

// const todoListData = [
//   {
//     id: 1,
//     content: "list 1",
//   },
// ];

export const Todolist = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onAddListHandler = () => {
    if (value.trim().length > 0) {
      const newList = {
        id: todoList.length + 1,
        content: value,
      };
      setTodoList([...todoList, newList]);
      setValue("");
    }
  };

  return (
    <div className="todolist-container-outer">
      <div className="todolist-input">
      <h1 className="todolist-heading">TODOLIST</h1>
        <div className="input-container">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-field" placeholder="type something here..." />
          <button type="button" className="add-button" onClick={onAddListHandler}>
            ADD
          </button>
        </div>
        <div className="todolist-container">
          {todoList?.map((item) => (
            <TodoCard setTodoList={setTodoList} todoList={todoList} currentList={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
