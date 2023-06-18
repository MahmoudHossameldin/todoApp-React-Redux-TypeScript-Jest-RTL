import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import TodoInput from './';
import { addTodo } from '../../store/slices/todosSlice';
import { RootState } from '../../store';

const mockStore = configureStore<RootState>();

describe('TodoInput', () => {
  let store: MockStore<RootState>;
  let component: RenderResult;

  beforeEach(() => {
    store = mockStore({
      filters: {
        filter: 'All',
      },
      todos: {
        todos: [],
      },
    });

    component = render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );
  });

  it('calls addTodo when Enter key is pressed with a non-empty input', () => {
    store.dispatch = jest.fn();

    const inputElement = component.getByPlaceholderText(
      'Add a todo...'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    fireEvent.keyUp(inputElement, { key: 'Enter' });

    expect(store.dispatch).toHaveBeenCalledWith(
      addTodo({
        id: expect.any(Number),
        text: 'New Todo',
        done: false,
      })
    );
  });

  it('does not call addTodo when Enter key is pressed with an empty input', () => {
    store.dispatch = jest.fn();

    const inputElement = component.getByPlaceholderText(
      'Add a todo...'
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '' } });

    fireEvent.keyUp(inputElement, { key: 'Enter' });

    expect(store.dispatch).not.toHaveBeenCalledWith(addTodo(expect.anything()));
  });
});
