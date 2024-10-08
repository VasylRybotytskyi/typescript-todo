import { FC } from "react";
import styles from "./todoItem.module.css";
import { Task } from "../../App";

interface TodoItemProps {
  todo: Task;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button className={styles.button} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
