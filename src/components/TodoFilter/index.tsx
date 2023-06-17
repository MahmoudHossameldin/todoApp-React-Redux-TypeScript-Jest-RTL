import React from 'react';
import styles from './styles.module.css';

type TodoFilterProps = {
  setFilter: (filter: string) => void;
  activeFilter: string;
};

const TodoFilter: React.FC<TodoFilterProps> = ({ setFilter, activeFilter }) => {
  return (
    <div>
      <button
        onClick={() => setFilter('All')}
        className={activeFilter === 'All' ? styles.active : ''}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Active')}
        className={activeFilter === 'Active' ? styles.active : ''}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('Completed')}
        className={activeFilter === 'Completed' ? styles.active : ''}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
