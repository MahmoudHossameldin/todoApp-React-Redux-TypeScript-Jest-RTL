import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { setFilter } from '../../store/slices/filtersSlice';
import { FilterState } from '../../types';
import styles from './styles.module.css';

const TodoFilter: React.FC = () => {
  const activeFilter = useAppSelector((state) => state.filters.filter);
  const dispatch = useAppDispatch();

  const handleSetFilter = (filter: FilterState) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button
        onClick={() => handleSetFilter('All')}
        className={activeFilter === 'All' ? styles.active : ''}
      >
        All
      </button>
      <button
        onClick={() => handleSetFilter('Active')}
        className={activeFilter === 'Active' ? styles.active : ''}
      >
        Active
      </button>
      <button
        onClick={() => handleSetFilter('Completed')}
        className={activeFilter === 'Completed' ? styles.active : ''}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
