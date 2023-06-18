import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { clearCompletedTodos } from '../../store/slices/todosSlice';
import TodoFilter from '../TodoFilter';
import styles from './styles.module.css';

const Footer: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const count = todos.filter((todo) => !todo.done).length;

  const handleClearCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <footer>
      <p className={styles.count}>{count} items left</p>
      <TodoFilter />
      <button onClick={handleClearCompletedTodos}>Clear completed</button>
    </footer>
  );
};

export default Footer;
