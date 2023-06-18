import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import TodoItem from './';
import { toggleTodo } from '../../store/slices/todosSlice';
import { RootState } from '../../store';
import { Todo } from '../../types';

const mockStore = configureStore<RootState>();

describe('TodoItem', () => {
  let store: MockStore<RootState>;
  let component: RenderResult;
  let mockTodo: Todo;

  beforeEach(() => {
    store = mockStore({
      filters: {
        filter: 'All',
      },
      todos: {
        todos: [],
      },
    });

    store.dispatch = jest.fn();

    mockTodo = {
      id: 1,
      text: 'Mock Todo',
      done: false,
    };

    component = render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
  });

  it('toggles todo when checkbox is clicked', () => {
    const checkboxElement = component.getByTestId(
      'todo-checkbox'
    ) as HTMLInputElement;

    fireEvent.click(checkboxElement);

    expect(store.dispatch).toHaveBeenCalledWith(toggleTodo(mockTodo.id));
  });
});
