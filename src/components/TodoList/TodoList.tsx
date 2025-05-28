import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "listening", status: "active" },
    { id: "2", text: "studying", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
