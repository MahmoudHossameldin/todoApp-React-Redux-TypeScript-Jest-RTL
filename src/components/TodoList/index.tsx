import styles from './styles.module.css';
import React from 'react';
import TodoItem from '../TodoItem';
import { Todo } from '../../types';
import { useAppSelector } from '../../store';

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.filters.filter);

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
    <ul>
      {filteredTodos().map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
