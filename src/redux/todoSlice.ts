import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../Types/types";

const initialState: Task[] = [];

const todosSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
