import { createSlice, nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.todos.push({ id: nanoid(), ...payload });
    },
  },
});

export const { addTodo } = userSlice.actions;
export default userSlice.reducer;
