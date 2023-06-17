export {};
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import TodoItem from './';

// describe('TodoItem component', () => {
//   test('toggles todo when checkbox is clicked', () => {
//     const todo = {
//       id: 1,
//       text: 'Todo item',
//       done: false,
//     };
//     const toggleTodo = jest.fn();
//     const { getByTestId } = render(
//       <TodoItem todo={todo} toggleTodo={toggleTodo} />
//     );

//     const checkboxElement = getByTestId('todo-checkbox');
//     fireEvent.click(checkboxElement);

//     expect(toggleTodo).toHaveBeenCalledWith(todo.id);
//   });
// });
