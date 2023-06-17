export {};
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import App from './App';

// describe('App component', () => {
//   test('handles adding todos, toggling todo status, and filtering correctly', () => {
//     const { getByText, queryByText, getAllByRole, getByPlaceholderText } =
//       render(<App />);

//     // Add todos
//     const inputElement = getByPlaceholderText('Add a todo...');
//     fireEvent.change(inputElement, { target: { value: 'Todo 1' } });
//     fireEvent.keyUp(inputElement, { key: 'Enter' });
//     fireEvent.change(inputElement, { target: { value: 'Todo 2' } });
//     fireEvent.keyUp(inputElement, { key: 'Enter' });
//     fireEvent.change(inputElement, { target: { value: 'Todo 3' } });
//     fireEvent.keyUp(inputElement, { key: 'Enter' });

//     // Verify todos added to UI
//     expect(getByText('Todo 1')).toBeInTheDocument();
//     expect(getByText('Todo 2')).toBeInTheDocument();
//     expect(getByText('Todo 3')).toBeInTheDocument();

//     // Toggle todo status
//     const checkboxes = getAllByRole('checkbox');
//     const checkbox1 = checkboxes[0] as HTMLInputElement;
//     fireEvent.click(checkbox1);

//     // Verify todo status updated
//     expect(checkbox1.checked).toBe(true);

//     // Verify Active tab contains the same number of undone todos
//     const activeTab = getByText('Active');
//     fireEvent.click(activeTab);
//     expect(getByText('Todo 2')).toBeInTheDocument();
//     expect(getByText('Todo 3')).toBeInTheDocument();
//     expect(queryByText('Todo 1')).toBeNull();

//     // Verify Completed tab contains the same number of checked todos
//     const completedTab = getByText('Completed');
//     fireEvent.click(completedTab);
//     expect(getByText('Todo 1')).toBeInTheDocument();
//     expect(queryByText('Todo 2')).toBeNull();
//     expect(queryByText('Todo 3')).toBeNull();

//     // Verify number of todos left equals the active ones
//     const todosLeft = getByText(/items left$/);
//     expect(todosLeft).toHaveTextContent('2 items left');

//     // Clear completed todos
//     const clearButton = getByText('Clear completed');
//     fireEvent.click(clearButton);

//     // Verify All tab contains the same number as Active
//     const allTab = getByText('All');
//     fireEvent.click(allTab);
//     expect(getByText('Todo 2')).toBeInTheDocument();
//     expect(getByText('Todo 3')).toBeInTheDocument();
//     expect(queryByText('Todo 1')).toBeNull();

//     // Verify Completed tab contains nothing
//     fireEvent.click(completedTab);
//     expect(queryByText('Todo 1')).toBeNull();
//     expect(queryByText('Todo 2')).toBeNull();
//     expect(queryByText('Todo 3')).toBeNull();
//   });
// });
