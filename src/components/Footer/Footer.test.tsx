import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from './';

describe('Footer component', () => {
  test('displays the count of remaining todos', () => {
    const count = 5; // Set the count of remaining todos for testing
    const clearCompletedTodos = jest.fn();
    const setFilter = jest.fn();
    const activeFilter = 'All';

    const { getByText } = render(
      <Footer
        count={count}
        clearCompletedTodos={clearCompletedTodos}
        setFilter={setFilter}
        activeFilter={activeFilter}
      />
    );

    const countElement = getByText(`${count} items left`);
    expect(countElement).toBeInTheDocument();
  });

  test('calls clearCompletedTodos when "Clear completed" button is clicked', () => {
    const count = 5;
    const clearCompletedTodos = jest.fn();
    const setFilter = jest.fn();
    const activeFilter = 'All';

    const { getByText } = render(
      <Footer
        count={count}
        clearCompletedTodos={clearCompletedTodos}
        setFilter={setFilter}
        activeFilter={activeFilter}
      />
    );

    const clearButton = getByText('Clear completed');
    fireEvent.click(clearButton);
    expect(clearCompletedTodos).toHaveBeenCalled();
  });

  test('calls setFilter with the correct filter when filter buttons are clicked', () => {
    const count = 5;
    const clearCompletedTodos = jest.fn();
    const setFilter = jest.fn();
    const activeFilter = 'All';

    const { getByText } = render(
      <Footer
        count={count}
        clearCompletedTodos={clearCompletedTodos}
        setFilter={setFilter}
        activeFilter={activeFilter}
      />
    );

    const allButton = getByText('All');
    const activeButton = getByText('Active');
    const completedButton = getByText('Completed');

    fireEvent.click(allButton);
    expect(setFilter).toHaveBeenCalledWith('All');

    fireEvent.click(activeButton);
    expect(setFilter).toHaveBeenCalledWith('Active');

    fireEvent.click(completedButton);
    expect(setFilter).toHaveBeenCalledWith('Completed');
  });
});
