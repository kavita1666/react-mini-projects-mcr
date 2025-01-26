import "./TodoCard.css";

export const TodoCard = ({ setTodoList, todoList, currentList }) => {
  const handleDeleteItem = () => {
    let newList = [...todoList];
    newList= todoList.filter((item) => item.id !== currentList.id);
    setTodoList(newList);
  };

  return (
    <>
      <div className="todolist-card-container">
        <div>{currentList?.content}</div>
        <button type="button" className="action-btn" onClick={handleDeleteItem}>
          delete
        </button>
      </div>
    </>
  );
};
