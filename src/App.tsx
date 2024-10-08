import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoItem from "./components/TodoItem/TodoItem";

export interface Task {
  id: number;
  text: string;
}

const App = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  console.log("app toto:", todos);

  const addTodos = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodos = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <>
      <h1>Todo-List</h1>
      <AddTodoForm onAdd={addTodos} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodos} />
        ))}
      </ul>
    </>
  );
};

export default App;
