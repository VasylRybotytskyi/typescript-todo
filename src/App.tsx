import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addTodo, deleteTodo } from "./redux/todoSlice";

const App = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Todo-List</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={(id) => dispatch(deleteTodo(id))}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
