import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export interface TodoType {
  id: string;
  text: string;
  status: "active" | "completed";
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: "1", text: "listening", status: "active" },
    { id: "2", text: "studying", status: "active" },
  ]);
  const handleAdd = (todo: TodoType) => setTodos([...todos, todo]);
  const handleUpdate = (updated: TodoType) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted: TodoType) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
