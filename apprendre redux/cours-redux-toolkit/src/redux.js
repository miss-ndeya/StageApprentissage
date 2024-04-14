import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Menage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      //{type: "todo/addTask", paylaod: "aller faire les courses"}
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // {type: TOGGLE_TASK, payload: 20}
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // {type: "DELETE_TASK", plaload: 20}
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})