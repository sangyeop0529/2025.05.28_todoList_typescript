import { FaTrashAlt } from "react-icons/fa";
import type { TodoType } from "../TodoList/TodoList";
import type { ChangeEvent } from "react";

interface TodoProps {
  todo: TodoType;
  onUpdate: (todo: TodoType) => void;
  onDelete: (todo: TodoType) => void;
}

const Todo = ({ todo, onUpdate, onDelete }: TodoProps) => {
  const { text, status } = todo;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
