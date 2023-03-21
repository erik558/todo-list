import React from "react";

function TodoFooter({ todos, Clearompleted }) {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div>
      <span>
        {completedSize}/ {todos.length} Completed
      </span>
      <button onClick={Clearompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoFooter;
