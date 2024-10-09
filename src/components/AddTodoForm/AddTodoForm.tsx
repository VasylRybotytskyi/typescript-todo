import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./addTodoForm.module.css"; // Імпорт стилів як модулів

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  console.log(newTodo);

  const handleSubmit = (e: FormEvent) => {
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
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
