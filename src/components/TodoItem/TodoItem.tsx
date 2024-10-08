import styles from "./todoItem.module.css";

const TodoItem = ({ todo, onDelete }) => {
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
