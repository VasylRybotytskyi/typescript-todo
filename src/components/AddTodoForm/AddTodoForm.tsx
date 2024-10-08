import { useState } from "react";
import styles from "./addTodoForm.module.css"; // Імпорт стилів як модулів

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");
  console.log(newTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
