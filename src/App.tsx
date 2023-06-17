import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { Todo } from './types';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('All');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().getTime(),
      text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const clearCompletedTodos = () => {
    const remainingTodos = todos.filter((todo) => !todo.done);
    setTodos(remainingTodos);
  };

  const filteredTodos = (): Todo[] => {
    switch (filter) {
      case 'Active':
        return todos.filter((todo) => !todo.done);
      case 'Completed':
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  };

  return (
    <div className='App'>
      <h1>todos</h1>
      <div className='container'>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos()} toggleTodo={toggleTodo} />
        <Footer
          count={todos.filter((todo) => !todo.done).length}
          clearCompletedTodos={clearCompletedTodos}
          setFilter={setFilter}
          activeFilter={filter}
        />
      </div>
    </div>
  );
};

export default App;
