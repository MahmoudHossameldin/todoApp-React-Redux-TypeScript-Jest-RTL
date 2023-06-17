import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.done);
    },
  },
});

export const { addTodo, toggleTodo, clearCompletedTodos } = todosSlice.actions;
export default todosSlice.reducer;
