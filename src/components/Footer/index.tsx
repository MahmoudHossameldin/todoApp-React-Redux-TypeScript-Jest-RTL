import React from 'react';
import styles from './styles.module.css';
import TodoFilter from '../TodoFilter';

type FooterProps = {
  count: number;
  clearCompletedTodos: () => void;
  setFilter: (filter: string) => void;
  activeFilter: string;
};

const Footer: React.FC<FooterProps> = ({
  count,
  clearCompletedTodos,
  setFilter,
  activeFilter,
}) => {
  return (
    <footer>
      <p className={styles.count}>{count} items left</p>
      <TodoFilter activeFilter={activeFilter} setFilter={setFilter} />
      <button onClick={clearCompletedTodos}>Clear completed</button>
    </footer>
  );
};

export default Footer;
