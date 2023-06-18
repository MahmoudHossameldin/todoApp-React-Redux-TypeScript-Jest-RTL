import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Footer from './';
import { clearCompletedTodos } from '../../store/slices/todosSlice';
import { setFilter } from '../../store/slices/filtersSlice';
import { RootState, AppDispatch } from '../../store';

const mockStore = configureStore<RootState, AppDispatch>([]);

describe('Footer', () => {
  let store: MockStoreEnhanced<RootState, AppDispatch>;

  beforeEach(() => {
    store = mockStore({
      todos: {
        todos: [
          { id: 1, text: 'Todo 1', done: false },
          { id: 2, text: 'Todo 2', done: true },
        ],
      },
      filters: {
        filter: 'All',
      },
    });
  });

  it('displays the count of remaining todos', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    const countElement = screen.getByText(/1 items left/i);
    expect(countElement).toBeInTheDocument();
  });

  it('calls clearCompletedTodos when "Clear completed" button is clicked', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    const clearButton = screen.getByText(/clear completed/i);
    fireEvent.click(clearButton);

    expect(store.dispatch).toHaveBeenCalledWith(clearCompletedTodos());
  });

  it('calls setFilter with the correct filter when filter buttons are clicked', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');

    fireEvent.click(activeButton);
    expect(store.dispatch).toHaveBeenCalledWith(setFilter('Active'));

    fireEvent.click(completedButton);
    expect(store.dispatch).toHaveBeenCalledWith(setFilter('Completed'));

    fireEvent.click(allButton);
    expect(store.dispatch).toHaveBeenCalledWith(setFilter('All'));
  });
});
