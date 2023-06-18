import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import TodoList from './';
import { RootState } from '../../store';
import { Todo } from '../../types';

const mockStore = configureStore<RootState>();

describe('TodoList', () => {
  let store: MockStore<RootState>;
  let component: RenderResult;
  let mockTodos: Todo[];

  beforeEach(() => {
    mockTodos = [
      { id: 1, text: 'Todo 1', done: false },
      { id: 2, text: 'Todo 2', done: true },
      { id: 3, text: 'Todo 3', done: false },
    ];

    store = mockStore({
      todos: {
        todos: mockTodos,
      },
      filters: {
        filter: 'All',
      },
    });

    component = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });

  it('renders the list of todos', () => {
    const listElement = component.container.querySelector('ul');

    expect(listElement).toBeInTheDocument();

    const todoItems = component.container.querySelectorAll('li');
    expect(todoItems.length).toBe(mockTodos.length);
  });
});
