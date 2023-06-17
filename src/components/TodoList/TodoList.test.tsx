import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './';

describe('TodoList component', () => {
  test('renders the list of todos', () => {
    const todos = [
      { id: 1, text: 'Todo 1', done: false },
      { id: 2, text: 'Todo 2', done: true },
    ];
    const toggleTodo = jest.fn();
    const { getByText } = render(
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    );

    const todo1 = getByText('Todo 1');
    const todo2 = getByText('Todo 2');

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });
});
