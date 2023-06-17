export {};
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import TodoInput from './';

// describe('TodoInput component', () => {
//   test('calls addTodo when Enter key is pressed with a non-empty input', () => {
//     const addTodo = jest.fn();
//     const { getByPlaceholderText } = render(<TodoInput addTodo={addTodo} />);

//     const inputElement = getByPlaceholderText('Add a todo...');
//     fireEvent.change(inputElement, { target: { value: 'New todo item' } });
//     fireEvent.keyUp(inputElement, { key: 'Enter' });

//     expect(addTodo).toHaveBeenCalledWith('New todo item');
//   });

//   test('does not call addTodo when Enter key is pressed with an empty input', () => {
//     const addTodo = jest.fn();
//     const { getByPlaceholderText } = render(<TodoInput addTodo={addTodo} />);

//     const inputElement = getByPlaceholderText('Add a todo...');
//     fireEvent.change(inputElement, { target: { value: '' } });
//     fireEvent.keyUp(inputElement, { key: 'Enter' });

//     expect(addTodo).not.toHaveBeenCalled();
//   });
// });
